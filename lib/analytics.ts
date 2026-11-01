/* Analytics writes — ARCHITECTURE §6.2/§6.3. Called ONLY by /api/t.
   Aggregated docs updated with FieldValue.increment + set(merge) — never one
   doc per pageview. Unique visitors use a daily-salted hash of ip+UA:
     dailySalt   = HMAC(ANALYTICS_SECRET, YYYY-MM-DD)
     visitorHash = sha256(ip + userAgent + dailySalt)
   The analytics_visitors/{date}_{hash} doc is created with create(); if it
   already exists the visit is not a new unique. Raw IPs are never stored.
   When Firebase is not configured (seed mode), counts are kept in a
   module-level in-memory tally so the flow is testable locally; nothing is
   persisted and nothing is returned to clients. */
import "server-only";
import { createHash, createHmac } from "crypto";
import { getDb } from "./firebase";

export interface BeaconEvent {
  t: "pv" | "end" | "click";
  path?: string;
  slug?: string;
  pid?: string;
  url?: string;
  ref?: string;
  utm_source?: string;
  utm_campaign?: string;
  w?: number;
  dur?: number;
  scroll?: number;
}

export function todayKey(d = new Date()): string {
  return d.toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
}

export function sourceOf(ev: BeaconEvent): "pinterest" | "google" | "direct" | "other" {
  const utm = (ev.utm_source || "").toLowerCase();
  const ref = (ev.ref || "").toLowerCase();
  if (utm.includes("pinterest") || ref.includes("pinterest")) return "pinterest";
  if (utm.includes("google") || ref.includes("google.")) return "google";
  if (!utm && !ref) return "direct";
  return "other";
}

/** Which Amazon storefront a clicked URL points at (geo-CTA split). */
export function storeOf(url?: string): "in" | "com" | "other" {
  if (!url) return "other";
  try {
    const host = new URL(url).hostname;
    if (host.endsWith("amazon.in")) return "in";
    if (host.endsWith("amazon.com")) return "com";
  } catch {
    /* fall through */
  }
  return "other";
}

export function deviceOf(width?: number): "mobile" | "desktop" | "tablet" {
  if (!width) return "mobile";
  if (width < 768) return "mobile";
  if (width < 1100) return "tablet";
  return "desktop";
}

export function countryOf(req: Request): string {
  // Vercel sets x-vercel-ip-country; absent locally -> "XX".
  return (req.headers.get("x-vercel-ip-country") || "XX").toUpperCase().slice(0, 2);
}

function visitorHash(ip: string, ua: string, date: string): string {
  const secret = process.env.ANALYTICS_SECRET || "dev-only-secret";
  const salt = createHmac("sha256", secret).update(date).digest("hex");
  return createHash("sha256").update(`${ip}|${ua}|${salt}`).digest("hex").slice(0, 32);
}

/* ------------------------------ seed-mode tally ---------------------------- */

const tally = {
  days: new Map<string, { views: number; clicks: number; visitors: number }>(),
};
const seenVisitors = new Set<string>();

/* --------------------------------- writer ---------------------------------- */

export async function recordEvent(
  ev: BeaconEvent,
  ctx: { ip: string; ua: string; country: string }
): Promise<void> {
  const date = todayKey();
  const source = sourceOf(ev);
  const db = getDb();

  if (!db) {
    const day = tally.days.get(date) ?? { views: 0, clicks: 0, visitors: 0 };
    if (ev.t === "pv") {
      day.views += 1;
      const h = `${date}_${visitorHash(ctx.ip, ctx.ua, date)}`;
      if (!seenVisitors.has(h)) {
        seenVisitors.add(h);
        day.visitors += 1;
      }
    }
    if (ev.t === "click") day.clicks += 1;
    tally.days.set(date, day);
    return;
  }

  const { FieldValue } = await import("firebase-admin/firestore");
  const inc = (n = 1) => FieldValue.increment(n);
  const batch = db.batch();

  if (ev.t === "pv") {
    // Unique visitor first: create() fails when the doc already exists.
    const hash = visitorHash(ctx.ip, ctx.ua, date);
    let isNewVisitor = false;
    try {
      await db.doc(`analytics_visitors/${date}_${hash}`).create({ createdAt: new Date() });
      isNewVisitor = true;
    } catch {
      isNewVisitor = false;
    }

    const dailyRef = db.doc(`analytics_daily/${date}`);
    batch.set(
      dailyRef,
      {
        views: inc(),
        visitors: isNewVisitor ? inc() : inc(0),
        [`sources.${source}`]: inc(),
        [`devices.${deviceOf(ev.w)}`]: inc(),
        [`countries.${ctx.country}`]: inc(),
      },
      { merge: true }
    );

    if (ev.slug) {
      batch.set(
        db.doc(`analytics_posts/${ev.slug}_${date}`),
        {
          slug: ev.slug,
          date,
          views: inc(),
          visitors: isNewVisitor ? inc() : inc(0),
          [`sources.${source}`]: inc(),
        },
        { merge: true }
      );
    }
  }

  if (ev.t === "end" && ev.slug) {
    batch.set(
      db.doc(`analytics_posts/${ev.slug}_${date}`),
      {
        slug: ev.slug,
        date,
        durSum: inc(Math.max(0, Math.round(ev.dur ?? 0))),
        scrollSum: inc(Math.min(100, Math.max(0, Math.round(ev.scroll ?? 0)))),
      },
      { merge: true }
    );
  }

  if (ev.t === "click" && ev.slug && ev.pid) {
    batch.set(
      db.doc(`analytics_daily/${date}`),
      { clicks: inc() },
      { merge: true }
    );
    batch.set(
      db.doc(`analytics_clicks/${date}_${ev.slug}_${ev.pid}`),
      {
        date,
        postSlug: ev.slug,
        productId: ev.pid,
        clicks: inc(),
        [`sources.${source}`]: inc(),
        // Geo-CTA split: which storefront the clicked URL actually used.
        [`stores.${storeOf(ev.url)}`]: inc(),
      },
      { merge: true }
    );
    batch.set(
      db.doc(`analytics_posts/${ev.slug}_${date}`),
      { slug: ev.slug, date, clicks: inc() },
      { merge: true }
    );
  }

  await batch.commit();
}
