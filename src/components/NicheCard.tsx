import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import type { Niche } from '../lib/types';

export function NicheCard({ niche }: { niche: Niche; key?: string | number }): ReactNode {
  return (
    <Link to={`/${niche.slug}`} className="bg-transparent overflow-hidden transition-transform duration-400 cursor-pointer block hover:-translate-y-1.5 no-underline group block">
      <div className="w-full aspect-[3/4] bg-[var(--color-blush)] relative overflow-hidden flex items-center justify-center arch pin-shadow">
        <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-gradient-to-b from-[var(--color-sand)] to-transparent"></div>
        <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: niche.cover_image ? `url(${niche.cover_image})` : undefined }}></div>
        <div className="absolute w-[80%] h-[90%] border border-[var(--color-mocha)] opacity-10 arch bottom-0 left-1/2 -translate-x-1/2"></div>
      </div>
      <div className="pt-6 text-center px-2">
        <h3 className="font-serif text-2xl font-light italic text-[var(--color-mocha)] mb-2">{niche.title}</h3>
        <p className="text-[10px] tracking-widest uppercase text-[var(--color-muted)] mb-3 leading-loose">{niche.description.slice(0, 50)}...</p>
        <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-mocha)] border-b border-[var(--color-mocha)] pb-0.5 transition-colors group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)]">Read More</span>
      </div>
    </Link>
  );
}
