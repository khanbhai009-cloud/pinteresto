import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { getPostBySlug, getRelatedPosts } from '../lib/posts';
import type { BlogPost } from '../lib/types';
import { BlogContent } from '../components/BlogContent';
import { FAQSection } from '../components/FAQSection';
import { PinCard } from '../components/PinCard';

export default function BlogPostPage() {
  const { niche, sub_niche, slug } = useParams<{ niche: string; sub_niche: string; slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (slug && niche && sub_niche) {
        setLoading(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
        const postData = await getPostBySlug(slug);
        setPost(postData);
        if (postData) {
          const relatedData = await getRelatedPosts(niche, sub_niche, slug, 4);
          setRelated(relatedData);
        }
        setLoading(false);
      }
    }
    load();
  }, [slug, niche, sub_niche]);

  if (loading) {
    return <div className="min-h-screen py-32 px-6 flex justify-center"><div className="w-10 h-10 border-4 border-[var(--color-mocha)] border-t-transparent rounded-full animate-spin"></div></div>;
  }

  if (!post) {
    return <div className="min-h-screen py-32 text-center text-[var(--color-mocha)] font-serif text-2xl">Post not found.</div>;
  }

  return (
    <div className="bg-[var(--color-warm-white)] min-h-screen pb-24">
      <Helmet>
        <title>{post.seo_title || post.title}</title>
        <meta name="description" content={post.meta_desc || post.excerpt} />
        {post.image_url && <meta property="og:image" content={post.image_url} />}
      </Helmet>

      <div className="pt-20 px-6 md:px-12 text-center max-w-3xl mx-auto mb-12">
        <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-5">
          <Link to="/" className="text-[var(--color-muted)] hover:text-[var(--color-mocha)]">Home</Link> &gt;{' '}
          <Link to={`/${niche}`} className="text-[var(--color-muted)] hover:text-[var(--color-mocha)] capitalize">{niche?.replace(/-/g, ' ')}</Link> &gt;{' '}
          <Link to={`/${niche}/${sub_niche}`} className="text-[var(--color-muted)] hover:text-[var(--color-mocha)] capitalize">{sub_niche?.replace(/-/g, ' ')}</Link> &gt;{' '}
          Post
        </div>
        <h1 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] text-[var(--color-mocha)] mb-6 leading-tight">
          {post.title}
        </h1>
        <p className="text-[0.9rem] leading-relaxed text-[var(--color-muted)]">{post.excerpt}</p>
      </div>

      <div className="w-full aspect-[16/9] md:aspect-[21/9] max-w-5xl mx-auto bg-gradient-to-br from-[var(--color-blush)] to-[var(--color-sand)] flex items-center justify-center relative overflow-hidden mb-16"
           style={{ backgroundImage: post.image_url ? `url(${post.image_url})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {!post.image_url && <span className="text-6xl text-white/50">🌺</span>}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <BlogContent paragraphs={post.paragraphs || []} products={post.products || []} />
        <FAQSection faqs={post.faq || []} />
      </div>

      {related.length > 0 && (
        <div className="mt-32 max-w-5xl mx-auto px-6">
          <h3 className="font-serif text-2xl text-[var(--color-mocha)] text-center mb-10">More Like This</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map(rel => (
              <PinCard key={rel.slug} post={rel} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
