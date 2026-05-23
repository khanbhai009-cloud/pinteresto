import type { Product } from '../lib/types';

export function AffiliateCTA({ product }: { product: Product }) {
  return (
    <div className="bg-[var(--color-cream)] border-l-[3px] border-[var(--color-accent)] p-4 md:p-5 px-5 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-9 rounded-r-lg">
      <div className="flex-1 w-full min-w-0">
        <span className="text-sm font-medium text-[var(--color-mocha)] tracking-wide flex items-center gap-2 mb-2 md:mb-0 line-clamp-2">
          🛒 {product.name}
        </span>
      </div>
      <div className="flex items-center justify-between w-full md:w-auto gap-4 shrink-0">
        <span className="font-serif text-lg text-[var(--color-accent)] whitespace-nowrap">
          {product.price}
        </span>
        <a 
          href={product.affiliate_url} 
          target="_blank" 
          rel="nofollow sponsored noreferrer" 
          className="inline-flex justify-center items-center bg-[var(--color-mocha)] text-[var(--color-warm-white)] px-5 py-3 md:px-[22px] md:py-2.5 text-[0.65rem] tracking-[0.2em] uppercase rounded-full no-underline whitespace-nowrap transition-transform active:scale-95 hover:bg-[var(--color-brown)] text-center w-full md:w-auto"
        >
          Check on Amazon →
        </a>
      </div>
    </div>
  );
}
