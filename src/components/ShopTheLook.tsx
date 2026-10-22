import { motion } from 'motion/react';
import type { Product } from '../lib/types';

export function productDisplayName(p: Product): string {
  const name = (p.name || '').trim();
  if (name && name.toLowerCase() !== 'amazon product') return name;
  // Older products were saved with the placeholder name "Amazon Product" —
  // fall back to the search keyword the pipeline used to find them.
  const kw = (p.keyword || '').trim();
  if (kw) return kw.replace(/\b\w/g, (c) => c.toUpperCase());
  return 'Cozy Home Find';
}

function Stars({ rating }: { rating?: string | number }) {
  const r = typeof rating === 'string' ? parseFloat(rating) : rating;
  if (!r || isNaN(r)) return null;
  const full = Math.round(r);
  return (
    <span className="flex items-center gap-1.5 text-xs text-[var(--color-muted)]">
      <span className="text-[var(--color-sunshine)] tracking-tight" aria-label={`${r} out of 5 stars`}>
        {'★'.repeat(full)}{'☆'.repeat(Math.max(0, 5 - full))}
      </span>
      {r.toFixed(1)}
    </span>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const price = (product.price || '').toString().trim();
  const priceLabel = price ? (price.startsWith('$') ? price : `$${price}`) : '';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.3) }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-3xl border border-[var(--color-sand)] overflow-hidden pin-shadow flex flex-col"
    >
      <a href={product.affiliate_url} target="_blank" rel="nofollow sponsored noreferrer" className="block bg-white">
        {product.image_url ? (
          <img src={product.image_url} alt={productDisplayName(product)} loading="lazy" className="w-full aspect-square object-contain p-4 transition-transform duration-500 hover:scale-105" />
        ) : (
          <div className="w-full aspect-square flex items-center justify-center text-5xl bg-gradient-to-br from-[var(--color-sunshine)]/40 to-[var(--color-sage)]/40">🛋️</div>
        )}
      </a>
      <div className="px-5 pb-5 pt-1 flex flex-col gap-2 flex-1">
        <h4 className="text-[0.95rem] font-medium text-[var(--color-mocha)] leading-snug line-clamp-2 min-h-[2.6em]">{productDisplayName(product)}</h4>
        <Stars rating={product.rating} />
        {product.why_fits && <p className="text-xs leading-relaxed text-[var(--color-muted)] line-clamp-2">{product.why_fits}</p>}
        <div className="mt-auto pt-2 flex items-end justify-between gap-3">
          {priceLabel && <span className="font-serif text-xl text-[var(--color-honey)]">{priceLabel}</span>}
        </div>
        <a
          href={product.affiliate_url}
          target="_blank"
          rel="nofollow sponsored noreferrer"
          className="mt-1 inline-flex w-full justify-center items-center bg-[var(--color-mocha)] text-[var(--color-warm-white)] px-5 py-3 text-[0.68rem] tracking-[0.18em] uppercase rounded-full no-underline transition-all active:scale-95 hover:bg-[var(--color-honey)] shadow-md"
        >
          Buy on Amazon →
        </a>
      </div>
    </motion.div>
  );
}

export function ShopTheLook({ products }: { products: Product[] }) {
  if (!products || products.length === 0) return null;
  return (
    <section className="mb-12">
      <div className="text-center mb-7">
        <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-honey)] font-semibold mb-2">Recreate this look</div>
        <h2 className="font-serif text-[1.9rem] text-[var(--color-mocha)]">🛍️ Shop This Look</h2>
        <p className="text-xs text-[var(--color-muted)] mt-2">Tap a product to see it on Amazon. Prices were checked when this post was made and may change.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {products.map((p, i) => (
          <ProductCard key={`${p.affiliate_url}-${i}`} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}
