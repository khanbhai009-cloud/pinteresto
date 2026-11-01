/* Geo storefront swap — the user's geo-CTA design (2026-11-01):
   India visitors get the SAME product link on amazon.in with the IN
   Associates tag; everyone else keeps the amazon.com link with the US
   tag. Only the button destination changes — page, image, copy and
   arrangement are identical, and NOTHING is fetched at visit time:
   the country comes from Vercel's edge header (see middleware.ts),
   and the IN URL is derived locally from the stored .com URL.

   This module is pure and client-safe (no server-only imports): the
   transform runs in the browser on mount, so SSR/first paint always
   renders the .com fallback. */

export const US_TAG = "finisher090-20";
export const IN_TAG = "finisher009-21";
export const GEO_COOKIE = "cc_geo";

/** Derive the amazon.in equivalent of a stored amazon.com product URL:
    same path, same search query, host swapped, US tag swapped for the
    IN tag. Non-Amazon URLs (and anything unparseable) pass through
    unchanged, so the fallback is always the original link. */
export function indiaUrl(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname === "www.amazon.com" || u.hostname === "amazon.com") {
      u.hostname = "www.amazon.in";
      if (u.searchParams.get("tag") === US_TAG) {
        u.searchParams.set("tag", IN_TAG);
      }
      return u.toString();
    }
    return url;
  } catch {
    return url;
  }
}

/** The URL a visitor in `country` should get for a stored .com link. */
export function geoUrl(comUrl: string, country: string | null | undefined): string {
  return country === "IN" ? indiaUrl(comUrl) : comUrl;
}
