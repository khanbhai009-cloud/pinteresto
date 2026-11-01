/* Structured data (JSON-LD) builders — schema.org, real site data only.
   Rendered through components/JsonLd.tsx. Base URL mirrors the
   metadataBase logic in app/layout.tsx (SITE_URL env). */

import type { Collection, Post, SiteSettings } from "./types";

export function siteBaseUrl(): string {
  return (process.env.SITE_URL || "http://localhost:3000").replace(/\/$/, "");
}

export function organizationNode(site: SiteSettings) {
  const base = siteBaseUrl();
  return {
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: site.name,
    url: `${base}/`,
    logo: `${base}/icon-512.png`,
    sameAs: [site.pinterestUrl],
  };
}

export function websiteJsonLd(site: SiteSettings) {
  const base = siteBaseUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(site),
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        name: site.name,
        url: `${base}/`,
        description: site.seoDefaults.description,
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en",
      },
    ],
  };
}

interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  const base = siteBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${base}${c.path}`,
    })),
  };
}

export function blogPostingJsonLd(post: Post, site: SiteSettings) {
  const base = siteBaseUrl();
  const url = `${base}/blog/${post.slug}`;
  const images = Array.from(
    new Set([post.seo.ogImage, ...post.heroImages].filter(Boolean))
  );
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    headline: post.title,
    description: post.seo.description || post.hook,
    image: images,
    datePublished: new Date(post.createdAt).toISOString(),
    dateModified: new Date(post.updatedAt).toISOString(),
    author: { "@id": `${base}/#organization` },
    publisher: { "@id": `${base}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en",
  };
}

export function collectionBreadcrumbCrumbs(collection: Collection): Crumb[] {
  return [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: collection.name, path: `/collections/${collection.slug}` },
  ];
}
