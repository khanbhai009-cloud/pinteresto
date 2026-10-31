/* Homepage — HOMEPAGE-SPEC (user's reference image + corrections beat the
   generic guide): sticky nav -> COMPACT hero (never 100vh; Featured
   Collections peeks on mobile) -> Featured Collections -> Latest Arrivals
   dark band -> footer (in layout). The 3 hero mini-cards from the reference
   image were REMOVED by the user's explicit order and are not built.
   Guide extras retained: Pick a Vibe chips, Fresh from the Blog (sage).
   Section order/visibility and all hero content come from
   settings/homepage (ARCHITECTURE §4.2), read via the data layer. */
import Link from "next/link";
import Image from "next/image";
import { HeroFan } from "@/components/HeroFan";
import { CardFan } from "@/components/CardFan";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Chip } from "@/components/Chip";
import { Button } from "@/components/Button";
import { PostCard } from "@/components/PostCard";
import {
  getCollections,
  getFeaturedProducts,
  getHomepageSettings,
  getPostsByCollection,
  getPublishedPosts,
  getSiteSettings,
} from "@/lib/db";
import type { Collection } from "@/lib/types";

export const revalidate = 60;

const TINTS = ["var(--c-card)", "var(--c-blush)", "var(--c-sage)", "var(--c-primary-soft)"];

const VIBES = ["Bedroom", "Garden", "Bathroom", "Living Room", "Balcony", "Kids Room", "Decor Finds"];

const TINT_BG: Record<Collection["tint"], string> = {
  blush: "var(--c-blush)",
  lavender: "var(--c-lavender)",
  sage: "var(--c-sage)",
  card: "var(--c-card)",
  "primary-soft": "var(--c-primary-soft)",
};

export default async function HomePage() {
  const [home, site, collections, posts, featured] = await Promise.all([
    getHomepageSettings(),
    getSiteSettings(),
    getCollections(),
    getPublishedPosts(),
    getFeaturedProducts(3),
  ]);

  const visible = new Map(home.sections.map((s) => [s.id, s.visible]));
  const show = (id: string) => visible.get(id) !== false;

  const homeCollections = collections.filter((c) => c.showOnHome);
  const counts = new Map<string, number>();
  for (const c of homeCollections) {
    counts.set(c.id, (await getPostsByCollection(c.id)).length);
  }

  const heroImages = home.heroSlides
    .filter((s) => s.active)
    .sort((a, b) => a.order - b.order)
    .map((s) => ({ src: s.imageUrl, alt: s.alt }));

  return (
    <>
      {/* HERO — compact: content starts below the fixed 64px nav; the fan is
          trimmed on mobile (290px) so Collections peeks without scrolling. */}
      {show("hero") && (
        <section className="relative px-4 md:px-8 pt-[88px] md:pt-[104px] pb-10" style={{ background: "var(--c-blush)" }}>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--c-primary)]">
                Welcome to {site.name}
              </p>
              <h1 className="font-serif font-semibold text-[var(--c-ink)] text-[36px] leading-[1.1] md:text-[56px] mt-2">
                {home.heroHook}
              </h1>
              <p className="text-[16px] leading-[1.6] text-[var(--c-ink-muted)] max-w-md mt-4">
                Curated decor ideas and honest product picks — from our Pinterest boards straight to your home.
              </p>
              <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
                <Button variant="primary" href={home.heroCtaLink}>{home.heroCtaLabel}</Button>
                <Button variant="ghost" href="/blog">Read the Blog</Button>
              </div>
            </div>
            <div>
              <HeroFan images={heroImages} autoSlide={home.autoSlide} intervalMs={home.slideMs} compact />
            </div>
          </div>
        </section>
      )}

      {/* PICK A VIBE */}
      {show("vibes") && (
        <section className="py-10 px-4 md:px-8" style={{ background: "var(--c-canvas)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="flex gap-2 overflow-x-auto pb-1 lg:justify-center" role="list">
              {VIBES.map((label) => (
                <Chip key={label} label={label} href="/collections" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FEATURED COLLECTIONS */}
      {show("collections") && (
        <section id="collections" className="py-14 md:py-[88px] px-4 md:px-8" style={{ background: "var(--c-lavender)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--c-primary)]">
                  Featured Collections
                </p>
                <h2 className="font-serif text-[28px] md:text-[40px] font-semibold text-[var(--c-ink)] leading-[1.15] mt-1">
                  Featured Collections
                </h2>
              </div>
              <Button variant="ghost" href="/collections" className="hidden md:inline-flex">
                View All
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {homeCollections.map((c) => (
                <Link key={c.id} href={`/collections/${c.slug}`} className="block no-underline group">
                  <div
                    className="rounded-[var(--r-lg)] p-4 pb-5 h-full"
                    style={{ background: TINT_BG[c.tint], boxShadow: "var(--shadow-card-soft)" }}
                  >
                    <CardFan images={c.coverImages.map((src) => ({ src, alt: c.name }))} />
                    <h3 className="font-serif text-[22px] font-semibold text-[var(--c-ink)] mt-4">{c.name}</h3>
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
      )}

      {/* LATEST POSTS */}
      {show("latest") && (
        <section className="py-14 md:py-[88px] px-4 md:px-8" style={{ background: "var(--c-sage)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--c-primary)]">
                  From the Blog
                </p>
                <h2 className="font-serif text-[28px] md:text-[40px] font-semibold text-[var(--c-ink)] leading-[1.15] mt-1">
                  Fresh from the Blog
                </h2>
              </div>
              <Button variant="ghost" href="/blog" className="hidden md:inline-flex">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(0, 6).map((post) => (
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
      )}

      {/* LATEST ARRIVALS — dark band with 3 product cards (HOMEPAGE-SPEC #5).
          Cards link INTO the guide that features the product, never straight
          to Amazon (ARCHITECTURE §11.7 spirit: pins/pages -> guide -> Amazon). */}
      {show("arrivals") && featured.length > 0 && (
        <section className="py-14 md:py-[88px] px-4 md:px-8 text-[var(--c-on-dark)]" style={{ background: "var(--c-dark)" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="lg:grid lg:grid-cols-[1fr_2fr] gap-10 items-center">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--c-primary-soft)" }}>
                  Just In
                </p>
                <h2 className="font-serif text-[28px] md:text-[40px] font-semibold leading-[1.15] mt-1" style={{ color: "var(--c-on-dark)" }}>
                  Latest Arrivals
                </h2>
                <p className="text-[16px] leading-[1.6] mt-3" style={{ color: "var(--c-on-dark-muted)" }}>
                  Fresh finds we are loving right now — cozy pieces with real purchase links inside the guides.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Button variant="primary" href="/collections">Get Inspired</Button>
                  <a
                    href={site.pinterestUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-[14px] font-semibold text-[var(--c-on-dark)] rounded-full"
                    style={{ border: "1.5px solid rgba(251,247,242,0.35)" }}
                  >
                    Follow on Pinterest
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 lg:mt-0">
                {featured.map((p) => {
                  const post = posts.find((x) => x.blocks.some((b) => b.productId === p.id));
                  return (
                    <Link key={p.id} href={post ? `/blog/${post.slug}` : "/blog"} className="block no-underline group">
                      <div className="bg-[var(--c-card)] rounded-[var(--r-lg)] overflow-hidden" style={{ boxShadow: "var(--shadow-card-soft)" }}>
                        {p.image && (
                          <Image src={p.image} alt={p.name} width={500} height={625} className="w-full aspect-[4/5] object-cover" />
                        )}
                        <div className="p-4">
                          <div className="font-serif text-[18px] font-semibold text-[var(--c-ink)] line-clamp-2">{p.name}</div>
                          <span className="inline-flex w-full items-center justify-center mt-3 px-4 py-2.5 text-[13px] font-semibold text-[var(--c-on-primary)] rounded-full" style={{ background: "var(--c-primary)" }}>
                            View Product
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* NEWSLETTER — part of this dark Pinterest/Newsletter band
                (guide §6.7 / HOMEPAGE-SPEC): follow on Pinterest OR get cozy
                ideas by email. Email-only signup, no account (amendment,
                2026-11-01) — the form posts to /api/subscribe. */}
            <div className="mt-14 pt-10 border-t border-[rgba(251,247,242,0.14)]">
              <div className="max-w-[560px] mx-auto text-center">
                <h3 className="font-serif text-[24px] md:text-[28px] font-semibold leading-[1.15]" style={{ color: "var(--c-on-dark)" }}>
                  Cozy ideas, straight to your inbox
                </h3>
                <p className="text-[14px] leading-[1.6] mt-2" style={{ color: "var(--c-on-dark-muted)" }}>
                  Join the newsletter for new room guides and the finds behind our pins.
                </p>
                <NewsletterForm source="homepage" className="mt-5 text-left" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
