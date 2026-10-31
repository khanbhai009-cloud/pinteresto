import type { MetadataRoute } from "next";
import { getCollections, getPublishedPosts } from "@/lib/db";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.SITE_URL || "";
  const [posts, collections] = await Promise.all([getPublishedPosts(), getCollections()]);
  const staticPages = ["", "/collections", "/blog", "/about", "/contact", "/privacy-policy", "/affiliate-disclosure"];
  return [
    ...staticPages.map((p) => ({ url: `${base}${p}`, changeFrequency: "weekly" as const })),
    ...collections.map((c) => ({
      url: `${base}/collections/${c.slug}`,
      changeFrequency: "weekly" as const,
    })),
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt),
      changeFrequency: "monthly" as const,
    })),
  ];
}
