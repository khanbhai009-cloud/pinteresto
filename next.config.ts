import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
