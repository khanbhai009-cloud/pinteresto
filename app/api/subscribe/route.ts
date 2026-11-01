/* POST /api/subscribe — newsletter email collection (AMENDMENT to
   ARCHITECTURE §4.3, added by the user's explicit instruction 2026-11-01:
   "Email collection ke liye koi authentication nhi chahiye, sirf email
   collection karna hai" — visitors submit an email only; no account, no
   login. Collected emails are emailed later via Resend, see USER-STEPS §9).
   This is the ONLY public write besides /api/t, and it mirrors /api/t's
   discipline: origin/host check, rate limit per IP, body < 1KB, valid JSON,
   known fields only, bot user-agents dropped, a hidden honeypot field.
   Responses are deliberately generic: success is always the same neutral
   message (a duplicate signup is indistinguishable from a new one), and
   structural rejections (bot, bad origin, rate limit, honeypot) return a
   FAKE success without storing anything, so the endpoint leaks nothing. */
import { rateLimit } from "@/lib/ratelimit";
import { addSubscriber, normalizeEmail } from "@/lib/subscribers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const KNOWN_FIELDS = new Set(["email", "source", "website"]); // "website" = honeypot

const BOT_UA =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora|pinterestbot|googlebot|bytespider|petalbot|semrush|ahrefs|mj12|dotbot|headless/i;

/* Strict-enough email shape: one @, dotted domain, no spaces, sane lengths. */
const EMAIL_RE = /^[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

const GENERIC_ERROR = "Please enter a valid email address.";

function json(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/** The one and only success shape — real, duplicate and dropped alike. */
function success(): Response {
  return json({ ok: true, message: "Thanks for joining The Cozy Canvas." }, 200);
}

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
  const origin = req.headers.get("origin");
  if (origin) {
    try {
      return new URL(origin).host === host;
    } catch {
      return false;
    }
  }
  return true;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const ua = req.headers.get("user-agent") || "";
    if (BOT_UA.test(ua)) return success(); // silently dropped
    if (!hostAllowed(req)) return success(); // silently dropped

    const ip =
      (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
    if (!(await rateLimit(ip, "sub"))) return success(); // silently dropped

    const text = await req.text();
    if (!text || text.length > 1024) return json({ ok: false, message: GENERIC_ERROR }, 400);

    let raw: unknown;
    try {
      raw = JSON.parse(text);
    } catch {
      return json({ ok: false, message: GENERIC_ERROR }, 400);
    }
    if (!raw || typeof raw !== "object") return json({ ok: false, message: GENERIC_ERROR }, 400);
    const obj = raw as Record<string, unknown>;
    for (const key of Object.keys(obj)) {
      if (!KNOWN_FIELDS.has(key)) return json({ ok: false, message: GENERIC_ERROR }, 400);
    }

    // Honeypot: real visitors never fill the hidden "website" field.
    // A filled one means a bot — fake success, store nothing.
    if (typeof obj.website === "string" && obj.website.length > 0) {
      console.log("[subscribe] honeypot filled — dropped silently");
      return success();
    }

    const email = typeof obj.email === "string" ? normalizeEmail(obj.email) : "";
    if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
      return json({ ok: false, message: GENERIC_ERROR }, 400);
    }

    const source =
      typeof obj.source === "string" && obj.source.length > 0
        ? obj.source.slice(0, 120)
        : "homepage";

    await addSubscriber(email, source); // "created" | "duplicate" — same response
    return success();
  } catch {
    // Never leak internals; the form shows its own fallback message.
    return json({ ok: false, message: "Something went wrong — please try again." }, 500);
  }
}
