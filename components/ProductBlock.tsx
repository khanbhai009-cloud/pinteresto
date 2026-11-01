import Image from "next/image";
import { withTrackingTag } from "@/lib/db";
import { GeoLink } from "./GeoLink";
import type { ResolvedBlock } from "@/lib/types";

/* Product block — design guide §7 step 6, ARCHITECTURE §4.3/§11:
   - the CTA is a PLAIN, DIRECT Amazon link carrying the post's tracking ID
     (no redirect, no shortener);
   - GEO-CTA: the button AND the product image are the same GeoLink built
     from the ONE `href` below, so they can never diverge — India visitors
     get the amazon.in version of that exact URL, everyone else the .com
     original (see components/GeoLink.tsx / lib/geo.ts);
   - click tracking happens through data-pid / data-slug attributes (on
     both links), which the beacon script (components/Beacon.tsx) turns
     into a /api/t 'click' and reads the final href at click time;
   - rel="sponsored nofollow noopener", target="_blank";
   - Amazon-served images render `unoptimized` (§11.4) so Next never caches
     a copy — but the src is first normalized to Amazon's own 800px
     variant (`amazonDisplaySrc` below) so phones don't pull 1500px
     originals; our own lifestyle images use the optimizer normally;
   - NO price is ever rendered (§11.3); a short "affiliate link" note sits
     near the CTA (§11.2).
   Editorial pass (Nov 2026): one uniform 4/3 image frame on a soft blush
   backing so white-background product shots blend into the page, tighter
   gap-3 rhythm inside the card (the page supplies gap-10 between cards),
   dark 16px/1.7 body text, and the three honest bullets — Best for /
   Why we like it / Keep in mind — from the product's editorial fields. */
interface ProductBlockProps {
  block: ResolvedBlock;
  index: number; // 1-based
  postSlug: string;
  trackingId: string;
}

/* Speed pass (Nov 2026): Amazon serves the same photo at any size through
   the `_AC_SL<n>_` token in the file name. The library URLs point at the
   1000–1500px originals (~270 KB each); the card never displays wider
   than ~716 device px, so the DISPLAY src is normalized to the 800px
   variant (~97 KB, −64%) — visually identical, still `unoptimized`
   (§11.4: Next caches nothing). This touches ONLY the image src below;
   the affiliate `href` is built separately and never passes through here.
   URLs without the token are returned untouched. */
function amazonDisplaySrc(url: string): string {
  return url.replace(/_AC_SL\d+_/, "_AC_SL800_");
}

export function ProductBlock({ block, index, postSlug, trackingId }: ProductBlockProps) {
  const { product } = block;
  const href = withTrackingTag(product.amazonUrl, trackingId);
  const isAmazonImage = product.imageMode === "amazon";
  const imageSrc = isAmazonImage ? amazonDisplaySrc(product.image) : product.image;

  const bullets: { label: string; text?: string }[] = [
    { label: "Best for", text: product.bestFor },
    { label: "Why we like it", text: product.whyWeLike },
    { label: "Keep in mind", text: product.keepInMind },
  ];
  const shownBullets = bullets.filter((b) => b.text && b.text.trim().length > 0);

  return (
    <article className="flex flex-col gap-3">
      <div className="w-7 h-7 rounded-full bg-[var(--c-primary-soft)] text-[var(--c-primary)] text-[13px] font-semibold flex items-center justify-center">
        {index}
      </div>

      {product.image && (
        <GeoLink
          href={href}
          target="_blank"
          rel="sponsored nofollow noopener"
          data-pid={product.id}
          data-slug={postSlug}
          aria-label={`See options for ${block.name} on Amazon`}
          className="block group rounded-2xl overflow-hidden"
          style={{ background: "var(--c-blush)" }}
        >
          <Image
            src={imageSrc}
            alt={block.name}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 672px"
            loading="lazy"
            unoptimized={isAmazonImage}
            className="w-full aspect-[4/3] object-cover shadow-[var(--shadow-image-fan)] transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </GeoLink>
      )}

      <h3 className="font-serif text-[22px] font-semibold text-[var(--c-ink)] leading-[1.2]">
        {block.name}
      </h3>

      {block.description && (
        <p className="text-[16px] leading-[1.7] text-[var(--c-ink)]">
          {block.description}
        </p>
      )}

      {shownBullets.length > 0 && (
        <ul className="flex flex-col gap-1.5 text-[15px] leading-[1.65] text-[var(--c-ink)]">
          {shownBullets.map((b) => (
            <li key={b.label} className="flex gap-2">
              <span aria-hidden="true" className="text-[var(--c-primary)] font-semibold">•</span>
              <span>
                <span className="font-semibold">{b.label}:</span> {b.text}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div>
        <GeoLink
          href={href}
          target="_blank"
          rel="sponsored nofollow noopener"
          data-pid={product.id}
          data-slug={postSlug}
          className="inline-flex w-full items-center justify-center py-[14px] px-[24px] min-h-[48px] rounded-[var(--r-pill)] bg-[var(--c-primary)] text-[15px] font-semibold text-[var(--c-on-primary)] no-underline transition active:scale-[0.97] active:bg-[var(--c-primary-pressed)]"
        >
          {block.ctaLabel}
        </GeoLink>
        <p className="text-[12px] text-[var(--c-ink-faint)] mt-2 text-center">
          Affiliate link — check the latest price on Amazon.
        </p>
      </div>
    </article>
  );
}
