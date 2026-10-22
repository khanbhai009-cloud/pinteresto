import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { useQuery } from '@tanstack/react-query';
import { getPostBySlug, getRelatedPosts } from '../lib/posts';
import { BlogContent } from '../components/BlogContent';
import { FAQSection } from '../components/FAQSection';
import { PinCard } from '../components/PinCard';
import { AffiliateCTA } from '../components/AffiliateCTA';
import { useBlogAnalytics } from '../hooks/useBlogAnalytics';

const PINTEREST_PROFILE = 'https://www.pinterest.com/swiftmart_fashion/';

function formatDate(raw: unknown): string | null {
  if (!raw) return null;
  let d: Date | null = null;
  if (typeof raw === 'number') d = new Date(raw);
  else if (raw instanceof Date) d = raw;
  else if (typeof raw === 'object' && raw !== null && 'seconds' in (raw as Record<string, unknown>)) {
    d = new Date(((raw as { seconds: number }).seconds) * 1000);
  }
  if (!d || isNaN(d.getTime())) return null;
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function BlogPostPage() {
  const { niche, sub_niche, slug } = useParams<{ niche: string; sub_niche: string; slug: string }>();
  const navigate = useNavigate();

  useBlogAnalytics(slug || null);

  // Reading progress bar (spring-smoothed)
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.4 });

  const [showBar, setShowBar] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 650);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const { data: post, isLoading: loadingPost } = useQuery({
    queryKey: ['post', slug],
    queryFn: () => getPostBySlug(slug!),
    enabled: !!slug,
  });

  const { data: related = [] } = useQuery({
    queryKey: ['relatedPosts', niche, sub_niche, slug, 4],
    queryFn: () => getRelatedPosts(niche!, sub_niche!, slug!, 4),
    enabled: !!post && !!niche && !!sub_niche && !!slug,
  });

  if (loadingPost) {
    return <div className="min-h-screen py-32 px-6 flex justify-center"><div className="w-10 h-10 border-4 border-[var(--color-honey)] border-t-transparent rounded-full animate-spin"></div></div>;
  }

  if (!post) {
    return (
      <div className="min-h-[70vh] py-32 px-6 text-center flex flex-col items-center justify-center">
        <div className="text-5xl mb-6">🌿</div>
        <h1 className="font-serif text-3xl text-[var(--color-mocha)] mb-4">This corner hasn't been decorated yet</h1>
        <p className="text-[var(--color-muted)] mb-8 max-w-md">The post you're looking for doesn't exist or has moved. Explore the gallery for fresh cozy ideas instead.</p>
        <div className="flex gap-4">
          <Link to="/latest" className="bg-[var(--color-mocha)] text-white px-6 py-3 rounded-full text-xs tracking-[0.2em] uppercase no-underline hover:opacity-90">Open Gallery</Link>
          <Link to="/" className="border border-[var(--color-mocha)] text-[var(--color-mocha)] px-6 py-3 rounded-full text-xs tracking-[0.2em] uppercase no-underline hover:bg-[var(--color-cream)]">Home</Link>
        </div>
      </div>
    );
  }

  const pageUrl = typeof window !== 'undefined' ? window.location.href : `https://pinteresto.vercel.app/${niche}/${sub_niche}/${slug}`;
  const pinShareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&media=${encodeURIComponent(post.image_url || '')}&description=${encodeURIComponent(post.title)}`;
  const dateStr = formatDate((post as unknown as Record<string, unknown>).created_at);
  const wordCount = (post.paragraphs || []).reduce((n, p) => n + (p.text ? p.text.split(/\s+/).length : 0), 0);
  const readMins = Math.max(1, Math.round(wordCount / 200));
  const firstProduct = post.products && post.products.length > 0 ? post.products[0] : null;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard unavailable */ }
  };

  return (
    <div className="bg-[var(--color-warm-white)] min-h-screen pb-28 relative overflow-x-clip">
      <Helmet>
        <title>{post.seo_title || post.title}</title>
        <meta name="description" content={post.meta_desc || post.excerpt} />
        {post.image_url && <meta property="og:image" content={post.image_url} />}
      </Helmet>

      {/* Reading progress */}
      <motion.div style={{ scaleX: progress }} className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-sunshine)] via-[var(--color-honey)] to-[var(--color-sage)] origin-left z-[70]" />

      {/* Warm sunshine / sage glows — the account's palette */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[560px] overflow-hidden">
        <motion.div animate={{ y: [0, 18, 0], x: [0, 10, 0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} className="absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full bg-[var(--color-sunshine)] opacity-25 blur-3xl" />
        <motion.div animate={{ y: [0, -14, 0], x: [0, -12, 0] }} transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-10 -right-28 w-[420px] h-[420px] rounded-full bg-[var(--color-sage)] opacity-25 blur-3xl" />
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-64 left-1/3 w-[260px] h-[260px] rounded-full bg-[var(--color-blush)] opacity-30 blur-3xl" />
      </div>

      <div className="pt-24 md:pt-32 px-6 md:px-12 text-center max-w-3xl mx-auto mb-10 relative">
        <div className="absolute left-6 md:left-12 top-6 md:top-24 hidden lg:block">
           <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-xs tracking-widest uppercase text-[var(--color-mocha)] hover:text-[var(--color-honey)] transition-colors border border-[var(--color-sand)] rounded-full px-4 py-2 hover:bg-[var(--color-cream)] bg-white/60 backdrop-blur">
             <span className="text-lg opacity-70">&larr;</span> Back
           </button>
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-4 text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-6">
          <div>
            <Link to="/" className="text-[var(--color-muted)] hover:text-[var(--color-mocha)]">Home</Link> &gt;{' '}
            <Link to={`/${niche}`} className="text-[var(--color-muted)] hover:text-[var(--color-mocha)] capitalize">{niche?.replace(/-/g, ' ')}</Link> &gt;{' '}
            <Link to={`/${niche}/${sub_niche}`} className="text-[var(--color-muted)] hover:text-[var(--color-mocha)] capitalize">{sub_niche?.replace(/-/g, ' ')}</Link> &gt;{' '}
            Post
          </div>
        </motion.div>

        {sub_niche && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-5">
            <span className="inline-block bg-[var(--color-sunshine)]/90 text-[#5c3d2e] text-[0.62rem] font-semibold tracking-[0.22em] uppercase px-4 py-1.5 rounded-full shadow-sm capitalize">{sub_niche.replace(/-/g, ' ')} Ideas</span>
          </motion.div>
        )}

        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[var(--color-mocha)] mb-6 leading-[1.1] font-normal">
          {post.title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="text-base md:text-lg leading-[1.8] text-[var(--color-mocha)] opacity-90 max-w-2xl mx-auto font-light">{post.excerpt}</motion.p>

        {/* Meta row */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }} className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[var(--color-muted)]">
          <span className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-sunshine)] to-[var(--color-sage)] flex items-center justify-center text-[0.6rem] font-bold text-white">TC</span>
            <span className="font-medium text-[var(--color-mocha)]">The Cozy Canvas</span>
          </span>
          {dateStr && <span>· {dateStr}</span>}
          <span>· {readMins} min read</span>
          {typeof post.views === 'number' && post.views > 0 && <span>· {post.views} reads</span>}
        </motion.div>

        {/* Share row */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-6 flex items-center justify-center gap-3">
          <a href={pinShareUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#e60023] text-white px-4 py-2 rounded-full text-[0.65rem] tracking-[0.15em] uppercase no-underline transition-transform hover:scale-105 active:scale-95 shadow-sm">📌 Save</a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noreferrer" className="inline-flex items-center bg-white/70 backdrop-blur border border-[var(--color-sand)] text-[var(--color-mocha)] px-4 py-2 rounded-full text-[0.65rem] tracking-[0.15em] uppercase no-underline hover:bg-[var(--color-cream)]">Share</a>
          <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noreferrer" className="inline-flex items-center bg-white/70 backdrop-blur border border-[var(--color-sand)] text-[var(--color-mocha)] px-4 py-2 rounded-full text-[0.65rem] tracking-[0.15em] uppercase no-underline hover:bg-[var(--color-cream)]">Post</a>
          <button onClick={copyLink} className="inline-flex items-center bg-white/70 backdrop-blur border border-[var(--color-sand)] text-[var(--color-mocha)] px-4 py-2 rounded-full text-[0.65rem] tracking-[0.15em] uppercase hover:bg-[var(--color-cream)] cursor-pointer">{copied ? '✓ Copied' : 'Copy Link'}</button>
        </motion.div>
      </div>

      <div className="w-full relative flex items-center justify-center mb-14 px-0 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full overflow-hidden bg-[var(--color-cream)] md:rounded-[2rem] pin-shadow group"
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
            <div className="w-full aspect-[16/9] flex items-center justify-center relative bg-gradient-to-br from-[var(--color-sunshine)] to-[var(--color-sage)] opacity-60">
              <span className="text-6xl opacity-60 relative z-10">🌼</span>
            </div>
          )}
        </motion.div>
      </div>

      <div className="max-w-2xl mx-auto px-6 relative">
        {post.products && post.products.length > 0 && (
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xs leading-relaxed text-[var(--color-muted)] border border-[var(--color-sand)] bg-[var(--color-cream)] rounded-xl px-4 py-3 mb-8">
            This post may contain affiliate links — if you buy through them, we may earn a small commission at no extra cost to you.{' '}
            <Link to="/affiliate-disclosure" className="underline hover:text-[var(--color-mocha)]">Read our disclosure</Link>
          </motion.p>
        )}

        {firstProduct && (
          <div className="mb-4">
            <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-honey)] font-semibold mb-3">★ Shop the look — featured pick</div>
            <AffiliateCTA product={firstProduct} />
          </div>
        )}

        <BlogContent paragraphs={post.paragraphs || []} products={post.products || []} />
        <FAQSection faqs={post.faq || []} />

        {post.tags && post.tags.length > 0 && (
          <div className="mt-14 flex flex-wrap gap-2 justify-center">
            {post.tags.map((t) => (
              <Link key={t} to="/latest" className="text-[0.65rem] tracking-[0.15em] uppercase bg-[var(--color-cream)] border border-[var(--color-sand)] text-[var(--color-mocha)] px-3.5 py-1.5 rounded-full no-underline hover:bg-[var(--color-sunshine)]/40 transition-colors">#{t}</Link>
            ))}
          </div>
        )}

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-16 text-center rounded-[2rem] px-6 py-10 bg-gradient-to-br from-[var(--color-cream)] via-white to-[var(--color-mint)] border border-[var(--color-sand)] pin-shadow relative overflow-hidden">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[var(--color-sunshine)] opacity-20 blur-2xl" />
          <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-3 relative">Love cozy spaces?</div>
          <h3 className="font-serif text-2xl text-[var(--color-mocha)] mb-3 relative">Follow The Cozy Canvas on Pinterest</h3>
          <p className="text-sm text-[var(--color-mocha)] opacity-80 mb-6 relative">New dream corners, organization ideas and curated finds — every day.</p>
          <a
            href={PINTEREST_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex justify-center items-center bg-[#e60023] text-white px-6 py-3 text-[0.7rem] tracking-[0.2em] uppercase rounded-full no-underline transition-transform active:scale-95 hover:scale-105 shadow-md"
          >
            Follow @swiftmart_fashion
          </a>
        </motion.div>
      </div>

      {related.length > 0 && (
        <div className="mt-28 max-w-6xl mx-auto px-6">
          <h3 className="font-serif text-2xl text-[var(--color-mocha)] text-center mb-10">More Like This</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map(rel => (
              <PinCard key={rel.slug} post={rel} />
            ))}
          </div>
        </div>
      )}

      {/* Sticky action bar */}
      <AnimatePresence>
        {showBar && (
          <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }} transition={{ duration: 0.35 }} className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:left-auto z-[60] flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[var(--color-sand)] rounded-full pl-5 pr-2 py-2 shadow-xl">
            <span className="text-xs font-medium text-[var(--color-mocha)] hidden sm:block max-w-[180px] truncate">{post.title}</span>
            <a href={pinShareUrl} target="_blank" rel="noreferrer" className="bg-[#e60023] text-white text-[0.65rem] tracking-[0.15em] uppercase px-4 py-2.5 rounded-full no-underline whitespace-nowrap hover:opacity-90">📌 Save</a>
            <a href={PINTEREST_PROFILE} target="_blank" rel="noreferrer" className="bg-[var(--color-mocha)] text-white text-[0.65rem] tracking-[0.15em] uppercase px-4 py-2.5 rounded-full no-underline whitespace-nowrap hover:opacity-90">Follow</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
