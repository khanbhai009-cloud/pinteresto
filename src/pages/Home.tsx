import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { getLatestPosts, getNiches } from '../lib/posts';
import type { BlogPost, Niche } from '../lib/types';
import { NicheCard } from '../components/NicheCard';
import { PinCard } from '../components/PinCard';

export default function Home() {
  const [niches, setNiches] = useState<Niche[]>([]);
  const [latestPins, setLatestPins] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [fetchedNiches, fetchedPins] = await Promise.all([
          getNiches(),
          getLatestPosts(8)
        ]);
        setNiches(fetchedNiches);
        setLatestPins(fetchedPins);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Pinteresto — Aesthetic Home Decor Blog</title>
        <meta name="description" content="Curated Decor Ideas That Last. AI-curated Pinterest-inspired blogs for every aesthetic." />
        <link rel="canonical" href="https://pinteresto.vercel.app/" />
      </Helmet>

      {/* Hero */}
      <section className="min-h-[calc(100vh-88px)] bg-[var(--color-cream)] flex-grow flex flex-col lg:grid lg:grid-cols-12 px-6 md:px-12 gap-8 items-center pt-10 pb-20">
        <div className="lg:col-span-5 order-2 lg:order-1 mt-10 lg:mt-0 w-full text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[var(--color-muted)] mb-4 block">Est. 2024 &bull; Curated Decor</span>
          <h1 className="font-serif text-[clamp(4rem,7vw,7rem)] leading-[0.9] text-[var(--color-mocha)] mb-8">
            Curated <i className="font-normal">Ideas</i> <br/>That Last
          </h1>
          <p className="text-[var(--color-brown)] leading-relaxed max-w-sm mb-10 font-light mx-auto lg:mx-0">
            Transforming digital inspiration into physical beauty. A minimalist blog dedicated to slow living, neutral palettes, and artisanal craftsmanship.
          </p>
          <a href="#collections" className="inline-flex bg-[var(--color-accent)] text-white px-10 py-4 rounded-full text-sm font-medium hover:brightness-110 items-center gap-4 no-underline transition-all">
            Explore Collections
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>

        <div className="lg:col-span-7 flex justify-center lg:justify-end gap-3 md:gap-6 h-[400px] md:h-[480px] order-1 lg:order-2 w-full mt-8 lg:mt-0">
          <div className="w-24 md:w-48 h-full arch bg-[var(--color-blush)] overflow-hidden relative">
            <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-gradient-to-b from-[var(--color-sand)] to-transparent"></div>
            <div className="hidden md:block absolute bottom-8 left-0 right-0 text-center font-serif italic text-xl text-[var(--color-mocha)]">Ceramics</div>
          </div>
          <div className="w-36 md:w-64 h-[calc(100%+60px)] -mt-8 md:-mt-16 arch bg-[var(--color-warm-white)] overflow-hidden pin-shadow relative">
            <div className="w-full h-full bg-[var(--color-sand)] opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-[80%] h-[70%] arch border border-[var(--color-mocha)] opacity-10"></div>
            </div>
            <div className="absolute bottom-6 md:bottom-12 left-0 right-0 text-center">
              <p className="font-serif text-xl md:text-3xl font-light italic mb-1 md:mb-2 text-[var(--color-mocha)]">Interior</p>
              <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-[var(--color-muted)]">The Niche Edition</p>
            </div>
          </div>
          <div className="w-24 md:w-48 h-[300px] md:h-[400px] mt-10 md:mt-20 arch bg-[var(--color-sand)] overflow-hidden relative hidden sm:block">
            <div className="absolute bottom-8 left-0 right-0 text-center font-serif italic text-xl text-[var(--color-mocha)]">Textiles</div>
          </div>
        </div>
      </section>

      {/* Our Collections (Niches) */}
      <section id="collections" className="py-24 px-6 md:px-12 bg-[var(--color-warm-white)]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 max-w-6xl mx-auto">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-mocha)]">Our Collections</h2>
            <p className="text-xs text-[var(--color-muted)] font-light mt-2 uppercase tracking-widest">Browse by aesthetic</p>
          </div>
          <Link to="/" className="text-[10px] uppercase tracking-widest text-[var(--color-mocha)] border-b border-[var(--color-mocha)] pb-0.5 mt-4 md:mt-0 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">View All Gallery</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="bg-[var(--color-cream)] w-full h-[400px] animate-pulse"></div>
            ))
          ) : (
             niches.slice(0, 3).map((niche) => (
                <NicheCard key={niche.slug} niche={niche} />
             ))
          )}
          {!loading && niches.length === 0 && (
            <div className="col-span-3 text-center text-sm text-[var(--color-muted)]">No collections found.</div>
          )}
        </div>
      </section>

      {/* Gift Ideas Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
        <div className="bg-[var(--color-cream)] flex items-center px-8 py-16 md:px-16 border-t border-b border-[var(--color-blush)]">
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[420px] mx-auto md:mx-0"
          >
            <div className="text-[10px] tracking-widest uppercase text-[var(--color-accent)] mb-4 font-medium block">Affiliate Picks</div>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-[var(--color-mocha)] leading-[1.1] mb-6">
              Ideas That Feel <i className="font-normal">Real</i>
            </h2>
            <p className="text-[0.9rem] leading-[1.9] text-[var(--color-brown)] font-light mb-10">
              Every blog post comes with hand-picked affiliate products placed naturally in the content. Minimal clutter. High-quality curation. Just beautiful pieces with real purchase links — right where you need them.
            </p>
            <a href="#blog" className="inline-flex items-center gap-4 bg-[var(--color-mocha)] text-[var(--color-warm-white)] px-8 py-3.5 rounded-full text-sm font-medium tracking-wide transition-colors hover:brightness-125 no-underline">
              Read Our Stories
            </a>
          </motion.div>
        </div>
        <div className="bg-[var(--color-blush)] relative overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-full">
          <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-multiply" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000)' }}></div>
          <div className="w-[300px] h-[400px] arch bg-[var(--color-cream)] flex items-center justify-center relative pin-shadow">
            <div className="absolute inset-4 arch border border-[var(--color-mocha)] opacity-10"></div>
            <span className="text-[4rem] saturate-50 opacity-80">🌾</span>
          </div>
        </div>
      </section>

      {/* Popular Pins */}
      <section id="popular" className="py-24 px-6 md:px-12 bg-[var(--color-warm-white)]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 max-w-6xl mx-auto">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-mocha)]">Popular Pins</h2>
            <p className="text-xs text-[var(--color-muted)] font-light mt-2">Trending this week from our collections</p>
          </div>
          <Link to="/" className="text-[10px] uppercase tracking-widest text-[var(--color-mocha)] border-b border-[var(--color-mocha)] pb-0.5 mt-4 md:mt-0 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">View All Gallery</Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 content-start max-w-6xl mx-auto">
          {loading ? (
             Array(8).fill(0).map((_, i) => (
                <div key={i} className="bg-[var(--color-cream)] w-full h-24 rounded-xl animate-pulse"></div>
             ))
          ) : (
            latestPins.map((pin) => (
              <PinCard key={pin.slug} post={pin} />
            ))
          )}
          {!loading && latestPins.length === 0 && (
             <div className="col-span-4 text-center text-sm text-[var(--color-muted)]">No pins found.</div>
          )}
        </div>
      </section>

      {/* Talk To Staff */}
      <section className="py-32 px-6 md:px-12 bg-[var(--color-cream)] flex items-center justify-center text-center relative overflow-hidden border-t border-[var(--color-sand)]">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[var(--color-warm-white)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-[500px]"
        >
          <div className="text-[10px] tracking-widest uppercase text-[var(--color-accent)] mb-4 font-medium">We're Here to Help</div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] text-[var(--color-mocha)] mb-6 leading-tight">Talk To Our Team</h2>
          <p className="text-[0.9rem] leading-[1.9] text-[var(--color-brown)] font-light mb-10">
            Looking for a specific aesthetic or need help finding the perfect decor style for your space? Our AI-powered curation team is here to guide you — every step of the way.
          </p>
          <a href="mailto:hello@pinteresto.com" className="inline-flex items-center gap-4 bg-transparent border border-[var(--color-mocha)] text-[var(--color-mocha)] px-10 py-4 rounded-full text-sm font-medium tracking-wide transition-colors hover:bg-[var(--color-mocha)] hover:text-white no-underline">
            Get in touch
          </a>
        </motion.div>
      </section>

    </>
  );
}
