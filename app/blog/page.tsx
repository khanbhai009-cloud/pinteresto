/* Blog index — the "Blog" nav tab (guide §9). Lists every published guide. */
import type { Metadata } from "next";
import { PostCard } from "@/components/PostCard";
import { getPublishedPosts } from "@/lib/db";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog — Cozy Decor Guides",
  description: "Shop-the-look guides for cozy bedrooms, living rooms, vanities and desks — the products behind our most-saved Pinterest pins.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Cozy Decor Guides | The Cozy Canvas",
    description: "Shop-the-look guides for cozy bedrooms, living rooms, vanities and desks — the products behind our most-saved Pinterest pins.",
  },
};

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();
  return (
    <section className="pt-[96px] md:pt-[112px] pb-16 px-4 md:px-8" style={{ background: "var(--c-canvas)" }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--c-primary)] text-center">
          The Blog
        </p>
        <h1 className="font-serif text-[32px] md:text-[44px] font-semibold text-[var(--c-ink)] leading-[1.15] text-center mt-2">
          Fresh from the Blog
        </h1>
        <p className="font-serif italic text-[18px] text-[var(--c-ink-muted)] text-center mt-3 max-w-xl mx-auto">
          Every guide recreates a look from our pins — piece by piece, with honest picks.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
          {posts.length === 0 && (
            <p className="col-span-full text-center text-[var(--c-ink-muted)] py-12">
              New guides are coming soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
