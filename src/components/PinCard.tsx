import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import type { BlogPost } from '../lib/types';
import { Heart, Pin } from 'lucide-react';

export function PinCard({ post }: { post: BlogPost; key?: string | number }): ReactNode {
  return (
    <Link to={`/${post.niche}/${post.sub_niche}/${post.slug}`} className="group flex flex-col no-underline break-inside-avoid mb-6 rounded-2xl overflow-hidden relative pin-shadow transition-all duration-500 hover:scale-[1.03] hover:shadow-xl group">
      <div className="w-full bg-[var(--color-blush)] relative" style={{ aspectRatio: post.image_url ? 'auto' : '3/4' }}>
         {post.image_url ? (
            <img src={post.image_url} alt={post.title} className="w-full h-auto transition-transform duration-700 group-hover:scale-105 block" />
         ) : (
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50">🌺</div>
         )}
         {/* Overlay gradient for hover effect */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
           <h3 className="text-sm md:text-base font-medium text-white line-clamp-2 leading-snug drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{post.title}</h3>
           <div className="flex items-center gap-4 mt-3 text-xs text-[rgba(255,255,255,0.8)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
              <span className="flex items-center"><Heart size={14} className="mr-1.5" /> {post.like_count || Math.floor(Math.random() * 500) + 100}</span>
              <span className="flex items-center"><Pin size={14} className="mr-1.5" /> {post.pin_count || Math.floor(Math.random() * 200) + 50}</span>
           </div>
         </div>
      </div>
    </Link>
  );
}
