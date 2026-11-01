/* Collection page — guide §9: collection header with Card Fan, then its posts. */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CardFan } from "@/components/CardFan";
import { PostCard } from "@/components/PostCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, collectionBreadcrumbCrumbs } from "@/lib/jsonld";
import { getCollectionBySlug, getCollections, getPostsByCollection } from "@/lib/db";

export const revalidate = 60;

const TINT_BG = {
  blush: "var(--c-blush)",
  lavender: "var(--c-lavender)",
  sage: "var(--c-sage)",
  card: "var(--c-card)",
  "primary-soft": "var(--c-primary-soft)",
} as const;

export async function generateStaticParams() {
  const collections = await getCollections();
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug);
  if (!collection) return {};
  const description = `Cozy ${collection.name.toLowerCase()} ideas and shop-the-look guides from The Cozy Canvas.`;
  return {
    title: `${collection.name} — Cozy Decor Guides`,
    description,
    alternates: { canonical: `/collections/${collection.slug}` },
    openGraph: {
      title: `${collection.name} — Cozy Decor Guides | The Cozy Canvas`,
      description,
      url: `/collections/${collection.slug}`,
      images: [
        { url: collection.coverImages[0], width: 1000, height: 1500, alt: collection.name },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${collection.name} — Cozy Decor Guides | The Cozy Canvas`,
      description,
      images: [collection.coverImages[0]],
    },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug);
  if (!collection) notFound();
  const posts = await getPostsByCollection(collection.id);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(collectionBreadcrumbCrumbs(collection))} />
      <section className="pt-[96px] md:pt-[112px] pb-12 px-4 md:px-8" style={{ background: TINT_BG[collection.tint] }}>
        <div className="max-w-[560px] mx-auto text-center">
          <CardFan images={collection.coverImages.map((src) => ({ src, alt: collection.name }))} />
          <h1 className="font-serif text-[32px] md:text-[44px] font-semibold text-[var(--c-ink)] leading-[1.15] mt-8">
            {collection.name}
          </h1>
          <p className="font-serif italic text-[18px] text-[var(--c-ink-muted)] mt-3">
            Guides and finds for your coziest {collection.name.toLowerCase()} yet.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 md:px-8" style={{ background: "var(--c-canvas)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
            {posts.length === 0 && (
              <p className="col-span-full text-center text-[var(--c-ink-muted)] py-12">
                Guides for this collection are on their way.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
