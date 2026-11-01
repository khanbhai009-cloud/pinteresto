/* Data layer — ARCHITECTURE §4.1.
   Server-only reads through the Admin SDK (rules are bypassed server-side;
   the browser never sees Firebase). Pages opt into ISR with
   `export const revalidate = 60`.
   Published filter: status == 'published' OR (status == 'scheduled' AND
   publishAt <= now) — scheduled posts go live automatically, no cron.
   When FIREBASE_SERVICE_ACCOUNT is not configured yet, every getter falls
   back to lib/seed.ts so the site renders and builds with zero credentials. */
import "server-only";
import { unstable_cache } from "next/cache";
import { getDb } from "./firebase";
import * as seed from "./seed";
import type {
  Collection,
  HomepageSettings,
  LegalSettings,
  Post,
  Product,
  ResolvedPost,
  SiteSettings,
  ThemeSettings,
} from "./types";

/* ---------------------------------- utils --------------------------------- */

function isLive(p: Post, now: number): boolean {
  return (
    p.status === "published" ||
    (p.status === "scheduled" && (p.publishAt ?? Infinity) <= now)
  );
}

function toMillis(v: unknown): number {
  if (typeof v === "number") return v;
  if (v && typeof v === "object" && "toMillis" in v)
    return (v as { toMillis: () => number }).toMillis();
  return 0;
}

function docToPost(id: string, d: Record<string, unknown>): Post {
  return {
    id,
    title: String(d.title ?? ""),
    slug: String(d.slug ?? id),
    hook: String(d.hook ?? ""),
    collectionId: String(d.collectionId ?? ""),
    status: (d.status as Post["status"]) ?? "draft",
    publishAt: d.publishAt == null ? null : toMillis(d.publishAt),
    tint: (d.tint as Post["tint"]) ?? "blush",
    heroImages: Array.isArray(d.heroImages) ? (d.heroImages as string[]) : [],
    intro: String(d.intro ?? ""),
    closingNote: String(d.closingNote ?? ""),
    trackingId: String(d.trackingId ?? ""),
    blocks: Array.isArray(d.blocks) ? (d.blocks as Post["blocks"]) : [],
    seo: (d.seo as Post["seo"]) ?? { title: "", description: "", ogImage: "" },
    createdAt: toMillis(d.createdAt),
    updatedAt: toMillis(d.updatedAt),
  };
}

async function fetchSettingsDoc<T>(name: string, fallback: T): Promise<T> {
  const db = getDb();
  if (!db) return fallback;
  try {
    const snap = await db.doc(`settings/${name}`).get();
    if (!snap.exists) return fallback;
    return { ...fallback, ...(snap.data() as T) };
  } catch {
    return fallback;
  }
}

/* -------------------------------- settings -------------------------------- */

export const getSiteSettings = unstable_cache(
  async (): Promise<SiteSettings> => fetchSettingsDoc("site", seed.siteSettings),
  ["settings-site"],
  { revalidate: 60 }
);

export const getThemeSettings = unstable_cache(
  async (): Promise<ThemeSettings> => fetchSettingsDoc("theme", seed.themeSettings),
  ["settings-theme"],
  { revalidate: 60 }
);

export const getHomepageSettings = unstable_cache(
  async (): Promise<HomepageSettings> =>
    fetchSettingsDoc("homepage", seed.homepageSettings),
  ["settings-homepage"],
  { revalidate: 60 }
);

export const getLegalSettings = unstable_cache(
  async (): Promise<LegalSettings> => fetchSettingsDoc("legal", seed.legalSettings),
  ["settings-legal"],
  { revalidate: 60 }
);

/* ------------------------------- collections ------------------------------ */

export const getCollections = unstable_cache(
  async (): Promise<Collection[]> => {
    const db = getDb();
    if (!db) return [...seed.collections].sort((a, b) => a.order - b.order);
    try {
      const snap = await db.collection("collections").get();
      const rows = snap.docs.map((doc) => {
        const d = doc.data();
        return {
          id: doc.id,
          name: String(d.name ?? ""),
          slug: String(d.slug ?? doc.id),
          tint: (d.tint as Collection["tint"]) ?? "blush",
          coverImages: Array.isArray(d.coverImages) ? (d.coverImages as string[]) : [],
          order: Number(d.order ?? 0),
          showOnHome: Boolean(d.showOnHome),
          updatedAt: toMillis(d.updatedAt),
        } as Collection;
      });
      return rows.sort((a, b) => a.order - b.order);
    } catch {
      return [...seed.collections].sort((a, b) => a.order - b.order);
    }
  },
  ["collections"],
  { revalidate: 60 }
);

export async function getCollectionBySlug(
  slug: string
): Promise<Collection | undefined> {
  const all = await getCollections();
  return all.find((c) => c.slug === slug);
}

/* --------------------------------- products ------------------------------- */

export const getAllProducts = unstable_cache(
  async (): Promise<Product[]> => {
    const db = getDb();
    if (!db) return seed.products;
    try {
      const snap = await db.collection("products").get();
      return snap.docs.map((doc) => {
        const d = doc.data();
        const { price: _ignored, ...rest } = d; // never carry a price (§11.3)
        return {
          id: doc.id,
          name: String(rest.name ?? ""),
          description: String(rest.description ?? ""),
          asin: String(rest.asin ?? ""),
          amazonUrl: String(rest.amazonUrl ?? ""),
          imageMode: (rest.imageMode as Product["imageMode"]) ?? "own",
          image: String(rest.image ?? ""),
          ctaLabel: String(rest.ctaLabel ?? "Check Price on Amazon"),
          featured: Boolean(rest.featured),
          active: rest.active !== false,
          updatedAt: toMillis(rest.updatedAt),
        } as Product;
      });
    } catch {
      return seed.products;
    }
  },
  ["products"],
  { revalidate: 60 }
);

export async function getProductById(id: string): Promise<Product | undefined> {
  const all = await getAllProducts();
  return all.find((p) => p.id === id);
}

export async function getFeaturedProducts(limit = 6): Promise<Product[]> {
  const all = await getAllProducts();
  return all.filter((p) => p.active && p.featured).slice(0, limit);
}

/** Cached list of active product ids — used by /api/t to validate clicks. */
export const getActiveProductIds = unstable_cache(
  async (): Promise<string[]> => {
    const all = await getAllProducts();
    return all.filter((p) => p.active).map((p) => p.id);
  },
  ["active-product-ids"],
  { revalidate: 300 }
);

/* ---------------------------------- posts --------------------------------- */

const getAllPostsRaw = unstable_cache(
  async (): Promise<Post[]> => {
    const db = getDb();
    if (!db) return seed.posts;
    try {
      const snap = await db.collection("posts").get();
      return snap.docs.map((doc) =>
        docToPost(doc.id, doc.data() as Record<string, unknown>)
      );
    } catch {
      return seed.posts;
    }
  },
  ["posts-all"],
  { revalidate: 60 }
);

export async function getPublishedPosts(): Promise<Post[]> {
  const now = Date.now();
  const all = await getAllPostsRaw();
  return all
    .filter((p) => isLive(p, now))
    .sort((a, b) => b.createdAt - a.createdAt);
}

export async function getPostBySlug(slug: string): Promise<ResolvedPost | undefined> {
  const posts = await getPublishedPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return undefined;
  return resolvePost(post);
}

export async function getPostsByCollection(collectionId: string): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.filter((p) => p.collectionId === collectionId);
}

export async function resolvePost(post: Post): Promise<ResolvedPost> {
  const [products, collections] = await Promise.all([
    getAllProducts(),
    getCollections(),
  ]);
  const byId = new Map(products.map((p) => [p.id, p]));
  const resolvedBlocks = post.blocks
    .map((b) => {
      const product = byId.get(b.productId);
      if (!product || !product.active) return null;
      return {
        product,
        name: b.overrideName ?? product.name,
        description: b.overrideDescription ?? product.description,
        ctaLabel: b.ctaLabel ?? product.ctaLabel,
      };
    })
    .filter((b): b is NonNullable<typeof b> => b !== null);
  return {
    ...post,
    resolvedBlocks,
    collection: collections.find((c) => c.id === post.collectionId),
  };
}

/** Cached list of published slugs — used by /api/t to validate beacons. */
export const getPublishedSlugs = unstable_cache(
  async (): Promise<string[]> => {
    const posts = await getPublishedPosts();
    return posts.map((p) => p.slug);
  },
  ["published-slugs"],
  { revalidate: 300 }
);

/* ------------------------------ amazon links ------------------------------ */

/** Put the post's own tracking ID on a product link (ARCHITECTURE §4.3/§11.5).
    Links stay direct Amazon URLs — no redirect, no shortener. */
export function withTrackingTag(amazonUrl: string, trackingId: string): string {
  if (!trackingId) return amazonUrl;
  try {
    const u = new URL(amazonUrl);
    u.searchParams.set("tag", trackingId);
    return u.toString();
  } catch {
    return amazonUrl;
  }
}
