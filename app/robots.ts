import type { MetadataRoute } from "next";

/* ARCHITECTURE §4.3: robots.txt must Disallow /api/ (i.e. /api/t).
   Everything else on the public site is crawlable. */
export default function robots(): MetadataRoute.Robots {
  const base = process.env.SITE_URL || "";
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: base ? `${base}/sitemap.xml` : undefined,
  };
}
