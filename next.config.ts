import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    staleTimes: {
      // Fully static pages (blog posts are ISR-cached server renders):
      // keep a prefetched copy in the client Router Cache for 3 minutes
      // so Back-then-click navigation between posts is instant instead
      // of refetching a fresh RSC payload on every click.
      static: 180,
    },
  },
  images: {
    // Prefer AVIF derivatives (smaller than WebP at the same quality);
    // verified live after the hero-speed pass. Falls back to WebP.
    formats: ["image/avif", "image/webp"],
    // Optimizer responses were going stale after 60s (default), and every
    // MISS costs a slow Supabase origin round-trip (~1.6–2.4s per image).
    // Pin/hero originals change rarely, so cache derivatives for 30 days.
    minimumCacheTTL: 2592000,
    // Own images live in /public; Amazon product images (when imageMode is
    // "amazon") are hotlinked from Amazon media hosts and rendered with
    // `unoptimized` per ARCHITECTURE §11.4 so Next never caches copies.
    remotePatterns: [
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "images-na.ssl-images-amazon.com" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "brroybwnppxbouxqqofz.supabase.co" },
    ],
  },
};

export default nextConfig;
