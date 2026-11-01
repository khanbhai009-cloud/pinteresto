/* Collections index — the "Collections" nav tab (guide §9):
   a Card Fan card per collection theme. */
import type { Metadata } from "next";
import Link from "next/link";
import { CardFan } from "@/components/CardFan";
import { getCollections, getPostsByCollection } from "@/lib/db";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Collections — Cozy Decor Themes | The Cozy Canvas",
  description: "Browse cozy decor collections: bedroom, living room, vanity and desk guides with the products behind the pins.",
};

const TINT_BG = {
  blush: "var(--c-blush)",
  lavender: "var(--c-lavender)",
  sage: "var(--c-sage)",
  card: "var(--c-card)",
  "primary-soft": "var(--c-primary-soft)",
} as const;

export default async function CollectionsIndexPage() {
  const collections = await getCollections();
  const counts = new Map<string, number>();
  for (const c of collections) counts.set(c.id, (await getPostsByCollection(c.id)).length);

  return (
    <section className="pt-[96px] md:pt-[112px] pb-16 px-4 md:px-8" style={{ background: "var(--c-lavender)" }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--c-primary)] text-center">
          Collections
        </p>
        <h1 className="font-serif text-[32px] md:text-[44px] font-semibold text-[var(--c-ink)] leading-[1.15] text-center mt-2">
          Pick a Corner to Cozy Up
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
          {collections.map((c) => (
            <Link key={c.id} href={`/collections/${c.slug}`} className="block no-underline">
              <div
                className="rounded-[var(--r-lg)] p-4 pb-5 h-full"
                style={{ background: TINT_BG[c.tint], boxShadow: "var(--shadow-card-soft)" }}
              >
                <CardFan images={c.coverImages.map((src) => ({ src, alt: c.name }))} />
                <h2 className="font-serif text-[22px] font-semibold text-[var(--c-ink)] mt-4">{c.name}</h2>
                <p className="text-[13px] text-[var(--c-ink-muted)] mt-1">
                  {counts.get(c.id)
                    ? `${counts.get(c.id)} guide${counts.get(c.id) === 1 ? "" : "s"}`
                    : "Guides coming soon"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
