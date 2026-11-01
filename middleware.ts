/* Geo cookie middleware — the ONLY server touch in the geo-CTA design.
   Vercel's platform already knows the visitor's country and puts it in
   the x-vercel-ip-country request header; this middleware just copies
   it into a lightweight `cc_geo` cookie so the client can pick the
   right Amazon storefront for product CTAs (components/GeoLink.tsx).
   No API call, no lookup, no delay: the header is already there.

   When the header is absent (local dev, non-Vercel hosting) NO cookie
   is set and every visitor simply gets the .com fallback links —
   exactly today's behaviour. */
import { NextResponse, type NextRequest } from "next/server";
import { GEO_COOKIE } from "@/lib/geo";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const country = (req.headers.get("x-vercel-ip-country") || "")
    .toUpperCase()
    .slice(0, 2);
  if (/^[A-Z]{2}$/.test(country)) {
    res.cookies.set(GEO_COOKIE, country, {
      path: "/",
      maxAge: 60 * 60 * 24, // re-check the country daily
      sameSite: "lax",
    });
  }
  return res;
}

export const config = {
  // Pages only: skip API routes, Next internals and any file asset.
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
