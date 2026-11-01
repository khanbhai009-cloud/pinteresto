"use client";

/* Geo-aware affiliate anchor — renders the stored amazon.com URL
   (SSR + first paint = always the fallback), then, on mount, reads
   the cc_geo cookie set by middleware.ts and swaps to the amazon.in
   URL when the visitor is in India. The swap is a local string
   transform (lib/geo.ts): no fetch, no API, effectively instant.
   If there is no cookie (header absent, JS crippled, anything odd)
   the .com link simply stays — the fallback can never break. */
import { useEffect, useState, type AnchorHTMLAttributes } from "react";
import { GEO_COOKIE, indiaUrl } from "@/lib/geo";

interface GeoLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  /** The .com URL exactly as rendered today (post-tracking-tag). */
  href: string;
  "data-pid"?: string;
  "data-slug"?: string;
}

function geoCountry(): string | null {
  try {
    const m = document.cookie.match(
      new RegExp(`(?:^|;\\s*)${GEO_COOKIE}=([A-Za-z]{2})`)
    );
    return m ? m[1].toUpperCase() : null;
  } catch {
    return null;
  }
}

export function GeoLink({ href, children, ...rest }: GeoLinkProps) {
  const [url, setUrl] = useState(href);

  useEffect(() => {
    if (geoCountry() === "IN") setUrl(indiaUrl(href));
  }, [href]);

  return (
    <a href={url} {...rest}>
      {children}
    </a>
  );
}
