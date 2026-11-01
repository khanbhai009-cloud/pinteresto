/* POST /api/t — the ONLY public route on this site (ARCHITECTURE §4.3).
   Pageview + affiliate-click beacon. ALWAYS returns 204 with no body,
   whatever happens; it never returns data and never reads content.
   Checks, in order: origin/host match, rate limit, body < 1KB, valid JSON,
   known fields only, bot user-agents dropped, slugs/product ids validated
   against the cached published/active lists. */
import { getActiveProductIds, getPublishedSlugs } from "@/lib/db";
import { recordEvent, type BeaconEvent } from "@/lib/analytics";
import { rateLimit } from "@/lib/ratelimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NO_CONTENT = new Response(null, { status: 204 });

const KNOWN_FIELDS = new Set([
  "t", "path", "slug", "pid", "ref", "url",
  "utm_source", "utm_campaign", "w", "dur", "scroll",
]);

const BOT_UA =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora|pinterestbot|googlebot|bytespider|petalbot|semrush|ahrefs|mj12|dotbot|headless/i;

function hostAllowed(req: Request): boolean {
  const host = req.headers.get("host") || "";
  const site = process.env.SITE_URL;
  if (site) {
    try {
      if (host === new URL(site).host) return true;
    } catch {
      /* fall through */
    }
  }
  // Local dev / preview: accept same-host origins only.
  const origin = req.headers.get("origin");
  if (origin) {
    try {
      return new URL(origin).host === host;
    } catch {
      return false;
    }
  }
  // sendBeacon usually sends Origin; when absent, accept (other checks apply).
  return true;
}

function str(v: unknown, max: number): string | undefined {
  return typeof v === "string" ? v.slice(0, max) : undefined;
}

function num(v: unknown): number | undefined {
  return typeof v === "number" && Number.isFinite(v) ? v : undefined;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const ua = req.headers.get("user-agent") || "";
    if (BOT_UA.test(ua)) return NO_CONTENT;
    if (!hostAllowed(req)) return NO_CONTENT;

    const ip =
      (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
    if (!(await rateLimit(ip))) return NO_CONTENT;

    const text = await req.text();
    if (!text || text.length > 1024) return NO_CONTENT;

    let raw: unknown;
    try {
      raw = JSON.parse(text);
    } catch {
      return NO_CONTENT;
    }
    if (!raw || typeof raw !== "object") return NO_CONTENT;
    const obj = raw as Record<string, unknown>;
    for (const key of Object.keys(obj)) {
      if (!KNOWN_FIELDS.has(key)) return NO_CONTENT;
    }

    const t = obj.t;
    if (t !== "pv" && t !== "end" && t !== "click") return NO_CONTENT;

    const ev: BeaconEvent = {
      t,
      path: str(obj.path, 200),
      slug: str(obj.slug, 120),
      pid: str(obj.pid, 120),
      url: str(obj.url, 400),
      ref: str(obj.ref, 300),
      utm_source: str(obj.utm_source, 80),
      utm_campaign: str(obj.utm_campaign, 120),
      w: num(obj.w),
      dur: num(obj.dur),
      scroll: num(obj.scroll),
    };

    // Slug must belong to a published post when one is claimed.
    if (ev.slug) {
      const slugs = await getPublishedSlugs();
      if (!slugs.includes(ev.slug)) return NO_CONTENT;
    } else if (t === "click" || t === "end") {
      return NO_CONTENT; // clicks and end-events are always per-post
    }
    // Clicks must name an active product.
    if (t === "click") {
      if (!ev.pid) return NO_CONTENT;
      const ids = await getActiveProductIds();
      if (!ids.includes(ev.pid)) return NO_CONTENT;
    }

    const country =
      (req.headers.get("x-vercel-ip-country") || "XX").toUpperCase().slice(0, 2);
    await recordEvent(ev, { ip, ua, country });
  } catch {
    /* swallow — the beacon contract is 204 no matter what */
  }
  return NO_CONTENT;
}
