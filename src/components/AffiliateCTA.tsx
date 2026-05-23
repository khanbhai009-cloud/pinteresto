import type { Product } from '../lib/types';

export function AffiliateCTA({ product }: { product: Product }) {
  return (
    <div className="bg-[var(--color-cream)] border-l-[3px] border-[var(--color-accent)] p-5 px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-9">
      <div className="flex-1">
        <span className="text-[0.82rem] font-medium text-[var(--color-mocha)] tracking-wide flex items-center gap-2 mb-2 md:mb-0">
          🛒 {product.name}
        </span>
      </div>
      <div className="flex items-center justify-between w-full md:w-auto gap-4">
        <span className="font-serif text-[1.1rem] text-[var(--color-accent)] whitespace-nowrap">
          {product.price}
        </span>
        <a 
          href={product.affiliate_url} 
          target="_blank" 
          rel="nofollow sponsored noreferrer" 
          className="inline-block bg-[var(--color-mocha)] text-[var(--color-warm-white)] px-[22px] py-2.5 text-[0.6rem] tracking-[0.2em] uppercase no-underline whitespace-nowrap transition-colors hover:bg-[var(--color-brown)] text-center text-ellipsis overflow-hidden"
        >
          Check on Amazon →
        </a>
      </div>
    </div>
  );
}
