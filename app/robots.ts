import type { MetadataRoute } from "next";

/* ARCHITECTURE §4.3: robots.txt must Disallow /api/ (i.e. /api/t).
   Everything else on the public site is crawlable. AI crawlers get the
   same rules as * spelled out explicitly, so AI search and answer
   engines (ChatGPT, Claude, Perplexity, …) are unambiguously welcome
   to read and cite the guides. */
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  const base = process.env.SITE_URL || "";
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: base ? `${base}/sitemap.xml` : undefined,
  };
}
