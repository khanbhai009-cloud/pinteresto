/* Instant skeleton for a blog post, shown the moment a post link is
   clicked while the real page payload loads. Mirrors the post page's
   own layout (hero band on a soft tint -> centered title block in the
   max-w-2xl container -> first product image + text lines) so the
   navigation is visibly acknowledged instead of looking like a dead
   click. Pure placeholder shapes in the site's own tokens; no data,
   no client JS. */
export default function Loading() {
  return (
    <div className="animate-pulse" aria-hidden="true">
      {/* Hero band, matching the post hero's tint + top offset */}
      <section
        className="pt-[88px] md:pt-[104px] pb-8 px-4 md:px-6"
        style={{ background: "var(--c-blush)" }}
      >
        <div className="mx-auto w-full max-w-2xl">
          <div className="rounded-[var(--r-lg)] bg-[var(--c-card)]/70 aspect-[16/7] w-full" />
        </div>
      </section>

      <div className="mx-auto w-full max-w-2xl px-4 md:px-6">
        {/* Title block */}
        <header className="pt-8 flex flex-col items-center">
          <div className="h-[30px] md:h-[42px] rounded-[var(--r-pill)] bg-[var(--c-primary-soft)] w-11/12" />
          <div className="h-[30px] md:h-[42px] rounded-[var(--r-pill)] bg-[var(--c-primary-soft)] w-2/3 mt-2.5" />
          <div className="h-[20px] rounded-[var(--r-pill)] bg-[var(--c-blush)] w-1/2 mt-4" />
          <div className="flex items-center justify-center gap-2.5 mt-5">
            <div className="h-[22px] w-[76px] rounded-[var(--r-pill)] bg-[var(--c-primary-soft)]" />
            <div className="h-[22px] w-[64px] rounded-[var(--r-pill)] bg-[var(--c-blush)]" />
            <div className="h-[22px] w-[96px] rounded-[var(--r-pill)] bg-[var(--c-blush)]" />
          </div>
        </header>

        {/* Disclosure box placeholder */}
        <div className="mt-8 rounded-[var(--r-lg)] bg-[var(--c-disclosure-bg)] h-[76px]" />

        {/* Intro lines */}
        <div className="mt-8 flex flex-col gap-2.5">
          <div className="h-[15px] rounded-[var(--r-pill)] bg-[var(--c-blush)] w-full" />
          <div className="h-[15px] rounded-[var(--r-pill)] bg-[var(--c-blush)] w-full" />
          <div className="h-[15px] rounded-[var(--r-pill)] bg-[var(--c-blush)] w-3/5" />
        </div>

        {/* First product block: 4:3 image + lines */}
        <div className="mt-10 pb-14">
          <div className="rounded-[var(--r-lg)] bg-[var(--c-primary-soft)] aspect-[4/3] w-full" />
          <div className="mt-5 flex flex-col gap-2.5">
            <div className="h-[20px] rounded-[var(--r-pill)] bg-[var(--c-primary-soft)] w-1/2" />
            <div className="h-[15px] rounded-[var(--r-pill)] bg-[var(--c-blush)] w-full" />
            <div className="h-[15px] rounded-[var(--r-pill)] bg-[var(--c-blush)] w-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
}
