import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { getLatestPosts } from '../lib/posts';
import type { BlogPost } from '../lib/types';
import { PinCard } from '../components/PinCard';

const FILTERS = ['All', 'Bedroom', 'Living Room', 'Gaming', 'Aesthetic'];

export default function LatestPage() {
  const [pins, setPins] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    async function load() {
      const data = await getLatestPosts(50);
      setPins(data);
      setLoading(false);
    }
    load();
  }, []);

  const filteredPins = pins.filter(pin => {
    if (activeFilter === 'All') return true;
    const filterTerm = activeFilter.toLowerCase();
    return pin.niche.includes(filterTerm) || pin.sub_niche.includes(filterTerm) || pin.title.toLowerCase().includes(filterTerm);
  });

  return (
    <div className="min-h-[calc(100vh-88px)] bg-[var(--color-warm-white)] py-12 md:py-24">
      <Helmet>
        <title>All Gallery - Plinth</title>
        <meta name="description" content="View all our curated aesthetic home decor collections." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12">
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[var(--color-mocha)] mb-4 leading-[1.1]">
          The Gallery
        </h1>
        <p className="text-sm text-[var(--color-muted)] tracking-wide font-light max-w-xl mx-auto mb-10">
          Explore all our latest curated interior designs, aesthetic picks, and home decor blogs in one place.
        </p>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-3xl mx-auto">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${activeFilter === filter ? 'bg-[var(--color-mocha)] text-white shadow-md' : 'bg-transparent border border-[var(--color-sand)] text-[var(--color-mocha)] hover:bg-[var(--color-cream)]'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div layout className="columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6">
          {loading ? (
            Array(12).fill(0).map((_, i) => (
               <div key={i} className="flex flex-col gap-3 break-inside-avoid mb-6">
                 <div className="bg-[var(--color-cream)] w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl animate-pulse relative overflow-hidden">
                   <div className="absolute inset-0 bg-white/50 -translate-x-full animate-[shimmer_1.5s_infinite] skew-x-12"></div>
                 </div>
               </div>
            ))
          ) : (
            <AnimatePresence>
              {filteredPins.map((pin) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={pin.slug}
                  className="break-inside-avoid mb-4 md:mb-6"
                >
                  <PinCard post={pin} />
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </motion.div>
        
        {!loading && filteredPins.length === 0 && (
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-sm text-[var(--color-muted)] py-20">
             No posts found for "{activeFilter}".
           </motion.div>
        )}
      </div>
    </div>
  );
}
