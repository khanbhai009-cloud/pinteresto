/* Data model — ARCHITECTURE-cozy-canvas.md §3, verbatim shapes.
   The public site reads these via the Admin SDK on the server (lib/db.ts);
   the browser never talks to Firebase. */

export type Tint = "blush" | "lavender" | "sage" | "card" | "primary-soft";

export interface SiteSettings {
  name: string;
  tagline: string;
  pinterestUrl: string;
  seoDefaults: { title: string; description: string; ogImage: string };
  analyticsOn: boolean;
}

export interface ThemeSettings {
  colors: {
    primary: string;
    canvas: string;
    blush: string;
    lavender: string;
    sage: string;
    ink: string;
    dark: string;
  };
  fonts: { display: string; body: string };
  radius: string; // e.g. "soft" | "rounder" | "pill-like" (admin Design tab)
}

export interface HeroSlide {
  imageUrl: string;
  alt: string;
  link: string;
  order: number;
  active: boolean;
}

export interface HomepageSettings {
  sections: { id: string; visible: boolean; order: number }[];
  heroHook: string;
  heroCtaLabel: string;
  heroCtaLink: string;
  heroSlides: HeroSlide[];
  autoSlide: boolean;
  slideMs: number;
}

export interface LegalSettings {
  disclosureText: string;
  footerDisclaimer: string;
  privacyHtml: string;
  affiliateDisclosureHtml: string;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  tint: Tint;
  coverImages: string[]; // exactly 3 for the Card Fan
  order: number;
  showOnHome: boolean;
  updatedAt?: number;
}

export type PostStatus = "draft" | "published" | "scheduled" | "trashed";

export interface PostBlock {
  productId: string;
  overrideName?: string;
  overrideDescription?: string;
  ctaLabel?: string;
}

export interface PostSeo {
  title: string;
  description: string;
  ogImage: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  hook: string;
  collectionId: string;
  status: PostStatus;
  publishAt?: number | null;
  tint: Tint;
  heroImages: string[]; // 5+ for the Hero Fan
  intro: string;
  closingNote: string;
  trackingId: string; // Amazon tracking ID used in this post's links
  blocks: PostBlock[];
  seo: PostSeo;
  createdAt: number;
  updatedAt: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  asin: string;
  amazonUrl: string;
  imageMode: "amazon" | "own";
  image: string;
  ctaLabel: string;
  featured: boolean;
  active: boolean;
  updatedAt?: number;
  // NOTE: deliberately NO price field — ARCHITECTURE §11.3.
}

/** A post with its blocks resolved against the products library. */
export interface ResolvedBlock {
  product: Product;
  name: string;
  description: string;
  ctaLabel: string;
}

export interface ResolvedPost extends Post {
  resolvedBlocks: ResolvedBlock[];
  collection?: Collection;
}
