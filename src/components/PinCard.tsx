import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import type { BlogPost } from '../lib/types';
import { Heart, Pin } from 'lucide-react';

export function PinCard({ post }: { post: BlogPost; key?: string | number }): ReactNode {
  return (
    <Link to={`/${post.niche}/${post.sub_niche}/${post.slug}`} className="group flex flex-col gap-3 no-underline break-inside-avoid mb-6 transition-transform duration-500 hover:scale-[1.03] hover:-translate-y-1">
      <div className="w-full bg-[var(--color-blush)] rounded-2xl overflow-hidden relative pin-shadow" style={{ aspectRatio: post.image_url ? 'auto' : '3/4' }}>
         {post.image_url ? (
            <img src={post.image_url} alt={post.title} className="w-full h-auto transition-transform duration-700 group-hover:scale-105 block" />
         ) : (
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50">🌺</div>
         )}
         {/* Overlay gradient for hover effect */}
         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
      <div className="px-1">
        <h3 className="text-sm md:text-base font-medium text-[var(--color-mocha)] line-clamp-2 leading-snug group-hover:text-[var(--color-accent)] transition-colors">{post.title}</h3>
        <div className="flex items-center gap-3 mt-2 text-[10px] md:text-xs text-[var(--color-muted)]">
           <span className="flex items-center"><Heart size={12} className="mr-1.5" /> {post.like_count || Math.floor(Math.random() * 500) + 100}</span>
           <span className="flex items-center"><Pin size={12} className="mr-1.5" /> {post.pin_count || Math.floor(Math.random() * 200) + 50}</span>
        </div>
      </div>
    </Link>
  );
}
