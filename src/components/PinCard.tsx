import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import type { BlogPost } from '../lib/types';
import { Heart, Pin } from 'lucide-react';

export function PinCard({ post }: { post: BlogPost; key?: string | number }): ReactNode {
  return (
    <Link to={`/${post.niche}/${post.sub_niche}/${post.slug}`} className="flex items-center gap-4 bg-[var(--color-cream)] p-4 rounded-xl hover:-translate-y-1 transition-transform relative no-underline">
      <div className="w-16 h-20 bg-[var(--color-blush)] rounded-lg overflow-hidden shrink-0"
           style={{ backgroundImage: post.image_url ? `url(${post.image_url})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-[var(--color-mocha)] truncate">{post.title}</p>
        <p className="text-[10px] text-[var(--color-muted)] tracking-tight mt-1 flex items-center gap-2">
           <span className="flex items-center"><Heart size={10} className="mr-1" /> {post.like_count || Math.floor(Math.random() * 500) + 100}</span>
           <span className="flex items-center"><Pin size={10} className="mr-1" /> {post.pin_count || Math.floor(Math.random() * 200) + 50}</span>
        </p>
      </div>
    </Link>
  );
}
