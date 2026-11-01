import Image from "next/image";
import { withTrackingTag } from "@/lib/db";
import type { ResolvedBlock } from "@/lib/types";

/* Product block — design guide §7 step 6, ARCHITECTURE §4.3/§11:
   - the CTA is a PLAIN, DIRECT Amazon link carrying the post's tracking ID
     (no redirect, no shortener — the link itself is never touched);
   - click tracking happens through data-pid / data-slug attributes, which
     the beacon script (components/Beacon.tsx) turns into a /api/t 'click';
   - rel="sponsored nofollow noopener", target="_blank";
   - Amazon-served images render `unoptimized` (§11.4) so Next never caches
     a copy; our own lifestyle images use the optimizer normally;
   - NO price is ever rendered (§11.3); a short "affiliate link" note sits
     near the CTA (§11.2). */
interface ProductBlockProps {
  block: ResolvedBlock;
  index: number; // 1-based
  postSlug: string;
  trackingId: string;
}

export function ProductBlock({ block, index, postSlug, trackingId }: ProductBlockProps) {
  const { product } = block;
  const href = withTrackingTag(product.amazonUrl, trackingId);
  const isAmazonImage = product.imageMode === "amazon";

  return (
    <article className="mb-10">
      <div className="w-7 h-7 rounded-full bg-[var(--c-primary-soft)] text-[var(--c-primary)] text-[13px] font-semibold flex items-center justify-center mb-3">
        {index}
      </div>

      {product.image && (
        <div className="mb-4">
          <Image
            src={product.image}
            alt={block.name}
            width={800}
            height={1000}
            loading="lazy"
            unoptimized={isAmazonImage}
            className="w-full aspect-[4/5] object-cover rounded-[var(--r-md)] shadow-[var(--shadow-image-fan)]"
          />
        </div>
      )}

      <h3 className="font-serif text-[22px] font-semibold text-[var(--c-ink)] leading-[1.2] mb-2">
        {block.name}
      </h3>

      {block.description && (
        <p className="text-[16px] leading-[1.6] text-[var(--c-ink-muted)] mb-4">
          {block.description}
        </p>
      )}

      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener"
        data-pid={product.id}
        data-slug={postSlug}
        className="inline-flex w-full items-center justify-center py-[14px] px-[24px] min-h-[48px] rounded-[var(--r-pill)] bg-[var(--c-primary)] text-[15px] font-semibold text-[var(--c-on-primary)] no-underline transition active:scale-[0.97] active:bg-[var(--c-primary-pressed)]"
      >
        {block.ctaLabel}
      </a>
      <p className="text-[12px] text-[var(--c-ink-faint)] mt-2 text-center">
        Affiliate link — check the latest price on Amazon.
      </p>
    </article>
  );
}
