/* Blog post page — design guide §7, in order:
   Nav (layout) -> Hero Fan on the post tint -> title block (display-lg,
   italic hook, meta chips) -> Affiliate Disclosure Box (always, before any
   product) -> intro -> product blocks (numbered, direct tagged Amazon
   links with beacon hooks) -> closing note + Save to Pinterest -> More
   Collections (Card Fan cards) -> Footer (layout).
   Data: ARCHITECTURE model — posts{heroImages, blocks[]} resolved against
   the products library by lib/db.ts. ISR revalidate = 60 (§4.1). */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { HeroFan } from "@/components/HeroFan";
import { CardFan } from "@/components/CardFan";
import { Chip } from "@/components/Chip";
import { DisclosureBox } from "@/components/DisclosureBox";
import { ProductBlock } from "@/components/ProductBlock";
import { Button } from "@/components/Button";
import {
  getCollections,
  getLegalSettings,
  getPostBySlug,
  getPostsByCollection,
  getPublishedPosts,
  getSiteSettings,
} from "@/lib/db";

export const revalidate = 60;

const TINT_BG = {
  blush: "var(--c-blush)",
  lavender: "var(--c-lavender)",
  sage: "var(--c-sage)",
  card: "var(--c-card)",
  "primary-soft": "var(--c-primary-soft)",
} as const;

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seo.title || post.title,
    description: post.seo.description || post.hook,
    openGraph: {
      title: post.seo.title || post.title,
      description: post.seo.description || post.hook,
      images: [{ url: post.seo.ogImage || post.heroImages[0], width: 1000, height: 1500 }],
    },
  };
}

function readingTime(post: { intro: string; closingNote: string; resolvedBlocks: { description: string }[] }) {
  const words = [post.intro, post.closingNote, ...post.resolvedBlocks.map((b) => b.description)]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 180));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, legal, site, collections] = await Promise.all([
    getPostBySlug(slug),
    getLegalSettings(),
    getSiteSettings(),
    getCollections(),
  ]);
  if (!post) notFound();

  const related = post.collection
    ? (await getPostsByCollection(post.collection.id)).filter((p) => p.slug !== post.slug)
    : [];
  const moreCollections = collections
    .filter((c) => c.id !== post.collectionId)
    .slice(0, 3);
  const updated = new Date(post.updatedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const pinSaveUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
    `${process.env.SITE_URL || ""}/blog/${post.slug}`
  )}&description=${encodeURIComponent(post.title)}`;

  return (
    <article>
      {/* HERO FAN on the post tint */}
      <section className="pt-[88px] md:pt-[104px] pb-8 px-4" style={{ background: TINT_BG[post.tint] }}>
        <div className="max-w-[900px] mx-auto">
          <HeroFan images={post.heroImages.map((src) => ({ src, alt: post.title }))} />
        </div>
      </section>

      <div className="max-w-[760px] mx-auto px-4 md:px-6">
        {/* TITLE BLOCK */}
        <header className="pt-8 text-center">
          <h1 className="font-serif text-[28px] md:text-[40px] font-semibold text-[var(--c-ink)] leading-[1.15]">
            {post.title}
          </h1>
          {post.hook && (
            <p className="font-serif italic text-[18px] leading-[1.4] text-[var(--c-ink-muted)] mt-3">
              {post.hook}
            </p>
          )}
          <div className="flex items-center justify-center gap-2.5 mt-5 flex-wrap">
            {post.collection && (
              <Chip label={post.collection.name} href={`/collections/${post.collection.slug}`} />
            )}
            <span className="inline-flex items-center gap-1.5 text-[13px] text-[var(--c-ink-muted)]">
              <Clock className="w-3.5 h-3.5" /> {readingTime(post)} min read
            </span>
            <span className="text-[13px] text-[var(--c-ink-faint)]">Updated {updated}</span>
          </div>
        </header>

        {/* DISCLOSURE — always here, before the first product (§11.2) */}
        <DisclosureBox text={legal.disclosureText} className="mt-8" />

        {/* INTRO */}
        {post.intro && (
          <p className="text-[16px] leading-[1.6] text-[var(--c-ink)] mt-8">{post.intro}</p>
        )}

        {/* PRODUCT BLOCKS */}
        <div className="mt-10">
          {post.resolvedBlocks.map((block, i) => (
            <div key={block.product.id}>
              {i > 0 && <hr className="border-[var(--c-hairline)] mb-10" />}
              <ProductBlock block={block} index={i + 1} postSlug={post.slug} trackingId={post.trackingId} />
            </div>
          ))}
        </div>

        {/* CLOSING + SAVE */}
        {post.closingNote && (
          <p className="text-[16px] leading-[1.6] text-[var(--c-ink)] mt-4">{post.closingNote}</p>
        )}
        <div className="flex justify-center mt-8 mb-4">
          <Button href={pinSaveUrl} external>
            Save to Pinterest
          </Button>
        </div>
        <p className="text-center text-[13px] text-[var(--c-ink-muted)] pb-12">
          Loved these corners?{" "}
          <a href={site.pinterestUrl} target="_blank" rel="noreferrer" className="text-[var(--c-primary)] font-semibold">
            Follow {site.name} on Pinterest
          </a>{" "}
          for daily cozy inspiration.
        </p>
      </div>

      {/* MORE COLLECTIONS */}
      {moreCollections.length > 0 && (
        <section className="py-14 px-4 md:px-8" style={{ background: "var(--c-lavender)" }}>
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-[var(--c-ink)] leading-[1.15] mb-8 text-center">
              More Collections
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-[900px] mx-auto">
              {moreCollections.map((c) => (
                <Link key={c.id} href={`/collections/${c.slug}`} className="block no-underline">
                  <div className="rounded-[var(--r-lg)] p-4 pb-5 h-full" style={{ background: TINT_BG[c.tint], boxShadow: "var(--shadow-card-soft)" }}>
                    <CardFan images={c.coverImages.map((src) => ({ src, alt: c.name }))} />
                    <h3 className="font-serif text-[20px] font-semibold text-[var(--c-ink)] mt-4">{c.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
            {related.length > 0 && (
              <p className="text-center mt-10 text-[14px] text-[var(--c-ink-muted)]">
                More in this collection:{" "}
                {related.map((p, i) => (
                  <span key={p.id}>
                    {i > 0 && " · "}
                    <Link href={`/blog/${p.slug}`} className="text-[var(--c-primary)] font-semibold">
                      {p.title}
                    </Link>
                  </span>
                ))}
              </p>
            )}
          </div>
        </section>
      )}
    </article>
  );
}
