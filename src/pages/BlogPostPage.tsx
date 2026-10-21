import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useQuery } from '@tanstack/react-query';
import { getPostBySlug, getRelatedPosts } from '../lib/posts';
import { BlogContent } from '../components/BlogContent';
import { FAQSection } from '../components/FAQSection';
import { PinCard } from '../components/PinCard';
import { useBlogAnalytics } from '../hooks/useBlogAnalytics';

export default function BlogPostPage() {
  const { niche, sub_niche, slug } = useParams<{ niche: string; sub_niche: string; slug: string }>();
  const navigate = useNavigate();

  useBlogAnalytics(slug || null);

  const { data: post, isLoading: loadingPost } = useQuery({
    queryKey: ['post', slug],
    queryFn: () => getPostBySlug(slug!),
    enabled: !!slug,
  });

  const { data: related = [], isLoading: loadingRelated } = useQuery({
    queryKey: ['relatedPosts', niche, sub_niche, slug, 4],
    queryFn: () => getRelatedPosts(niche!, sub_niche!, slug!, 4),
    enabled: !!post && !!niche && !!sub_niche && !!slug,
  });

  const loading = loadingPost;

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

      <div className="pt-24 md:pt-32 px-6 md:px-12 text-center max-w-3xl mx-auto mb-12 relative">
        <div className="absolute left-6 md:left-12 top-6 md:top-24 hidden lg:block">
           <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-xs tracking-widest uppercase text-[var(--color-mocha)] hover:text-[var(--color-accent)] transition-colors border border-[var(--color-sand)] rounded-full px-4 py-2 hover:bg-[var(--color-cream)]">
             <span className="text-lg opacity-70">&larr;</span> Back
           </button>
        </div>
        <div className="flex flex-col items-center gap-4 text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-6">
          <div className="lg:hidden">
             <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-xs tracking-widest uppercase text-[var(--color-mocha)] hover:text-[var(--color-accent)] transition-colors border border-[var(--color-sand)] rounded-full px-4 py-2 hover:bg-[var(--color-cream)]">
               <span className="text-lg opacity-70">&larr;</span> Back
             </button>
          </div>
          <div>
            <Link to="/" className="text-[var(--color-muted)] hover:text-[var(--color-mocha)]">Home</Link> &gt;{' '}
            <Link to={`/${niche}`} className="text-[var(--color-muted)] hover:text-[var(--color-mocha)] capitalize">{niche?.replace(/-/g, ' ')}</Link> &gt;{' '}
            <Link to={`/${niche}/${sub_niche}`} className="text-[var(--color-muted)] hover:text-[var(--color-mocha)] capitalize">{sub_niche?.replace(/-/g, ' ')}</Link> &gt;{' '}
            Post
          </div>
        </div>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[var(--color-mocha)] mb-6 leading-[1.1] font-normal">
          {post.title}
        </h1>
        <p className="text-base md:text-lg leading-[1.8] text-[var(--color-mocha)] opacity-90 max-w-2xl mx-auto font-light">{post.excerpt}</p>
      </div>

      <div className="w-full relative flex items-center justify-center mb-16 px-0 md:px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full overflow-hidden bg-[var(--color-cream)] md:rounded-3xl pin-shadow group"
        >
          {post.image_url ? (
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center blur-[20px] scale-110 opacity-60 transition-transform duration-[2s] group-hover:scale-125"
                style={{ backgroundImage: `url(${post.image_url})` }}
              ></div>
              <img 
                src={post.image_url} 
                alt={post.title} 
                className="relative z-10 w-full h-auto object-contain block mx-auto transition-transform duration-[2s] group-hover:scale-[1.02]" 
                style={{ maxHeight: '85vh' }}
              />
            </>
          ) : (
            <div className="w-full aspect-[16/9] flex items-center justify-center relative bg-gradient-to-br from-[var(--color-blush)] to-[var(--color-sand)] opacity-40">
              <span className="text-6xl opacity-50 relative z-10">🌺</span>
            </div>
          )}
        </motion.div>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        {post.products && post.products.length > 0 && (
          <p className="text-xs leading-relaxed text-[var(--color-muted)] border border-[var(--color-sand)] bg-[var(--color-cream)] rounded-lg px-4 py-3 mb-10">
            This post may contain affiliate links — if you buy through them, we may earn a small commission at no extra cost to you.{' '}
            <Link to="/affiliate-disclosure" className="underline hover:text-[var(--color-mocha)]">Read our disclosure</Link>
          </p>
        )}
        <BlogContent paragraphs={post.paragraphs || []} products={post.products || []} />
        <FAQSection faqs={post.faq || []} />

        <div className="mt-16 text-center border border-[var(--color-sand)] bg-[var(--color-cream)] rounded-3xl px-6 py-10">
          <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-3">Love cozy spaces?</div>
          <h3 className="font-serif text-2xl text-[var(--color-mocha)] mb-3">Follow The Cozy Canvas on Pinterest</h3>
          <p className="text-sm text-[var(--color-mocha)] opacity-80 mb-6">New dream corners, organization ideas and curated finds — every day.</p>
          <a
            href="https://www.pinterest.com/swiftmart_fashion/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center items-center bg-[#e60023] text-white px-6 py-3 text-[0.7rem] tracking-[0.2em] uppercase rounded-full no-underline transition-transform active:scale-95 hover:opacity-90"
          >
            Follow @swiftmart_fashion
          </a>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-32 max-w-6xl mx-auto px-6">
          <h3 className="font-serif text-2xl text-[var(--color-mocha)] text-center mb-10">More Like This</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map(rel => (
              <PinCard key={rel.slug} post={rel} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
