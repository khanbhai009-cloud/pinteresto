import { motion } from 'motion/react';
import type { Product } from '../lib/types';
import { productDisplayName } from './ShopTheLook';

export function AffiliateCTA({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-br from-[var(--color-cream)] to-white border border-[var(--color-sunshine)]/60 p-4 md:p-5 px-5 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-9 rounded-2xl shadow-[0_10px_30px_-12px_rgba(224,149,67,0.45)] overflow-hidden"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[var(--color-sunshine)] to-[var(--color-sage)]" />
      <div className="flex-1 w-full min-w-0 pl-2">
        <span className="text-sm font-medium text-[var(--color-mocha)] tracking-wide flex items-center gap-2 mb-2 md:mb-0 line-clamp-2">
          🛒 {productDisplayName(product)}
        </span>
      </div>
      <div className="flex items-center justify-between w-full md:w-auto gap-4 shrink-0">
        <span className="font-serif text-lg text-[var(--color-honey)] whitespace-nowrap">
          {product.price}
        </span>
        <a
          href={product.affiliate_url}
          target="_blank"
          rel="nofollow sponsored noreferrer"
          className="inline-flex justify-center items-center bg-[var(--color-mocha)] text-[var(--color-warm-white)] px-5 py-3 md:px-[22px] md:py-2.5 text-[0.65rem] tracking-[0.2em] uppercase rounded-full no-underline whitespace-nowrap transition-transform active:scale-95 hover:bg-[var(--color-honey)] hover:scale-[1.03] text-center w-full md:w-auto shadow-md"
        >
          Buy on Amazon →
        </a>
      </div>
    </motion.div>
  );
}
