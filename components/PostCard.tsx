import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/types";

/* Blog post card — design guide §5: white card, radius 22px, 2:3 image on
   top, title, 1-line hook, "Read the guide" text link. */
export function PostCard({ post }: { post: Post }) {
  const cover = post.heroImages[0];
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block no-underline group bg-[var(--c-card)] rounded-[var(--r-lg)] overflow-hidden shadow-[var(--shadow-card-soft)]"
    >
      {cover && (
        <div className="aspect-[2/3] overflow-hidden">
          <Image
            src={cover}
            alt={post.title}
            width={600}
            height={900}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="font-serif text-[20px] font-semibold text-[var(--c-ink)] leading-[1.2]">
          {post.title}
        </h3>
        {post.hook && (
          <p className="text-[13px] leading-[1.45] text-[var(--c-ink-muted)] mt-1.5 line-clamp-1">
            {post.hook}
          </p>
        )}
        <span className="inline-block mt-3 text-[13px] font-semibold text-[var(--c-primary)]">
          Read the guide
        </span>
      </div>
    </Link>
  );
}
