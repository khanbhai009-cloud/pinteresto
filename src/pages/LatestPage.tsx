import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getLatestPosts } from '../lib/posts';
import type { BlogPost } from '../lib/types';
import { PinCard } from '../components/PinCard';

export default function LatestPage() {
  const [pins, setPins] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getLatestPosts(50);
      setPins(data);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="min-h-[calc(100vh-88px)] bg-[var(--color-warm-white)] py-12 md:py-24">
      <Helmet>
        <title>All Gallery - Pinteresto</title>
        <meta name="description" content="View all our curated aesthetic home decor collections." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[var(--color-mocha)] mb-4">
          The Gallery
        </h1>
        <p className="text-sm text-[var(--color-muted)] tracking-wide font-light max-w-xl mx-auto">
          Explore all our latest curated interior designs, aesthetic picks, and aesthetic home decor blogs in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 content-start max-w-7xl mx-auto px-6 md:px-12">
        {loading ? (
          Array(12).fill(0).map((_, i) => (
             <div key={i} className="flex flex-col gap-3">
               <div className="bg-[var(--color-cream)] w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl animate-pulse"></div>
               <div className="bg-[var(--color-cream)] w-3/4 h-5 rounded animate-pulse"></div>
               <div className="bg-[var(--color-cream)] w-1/2 h-4 rounded animate-pulse"></div>
             </div>
          ))
        ) : (
          pins.map((pin) => (
            <PinCard key={pin.slug} post={pin} />
          ))
        )}
        {!loading && pins.length === 0 && (
           <div className="col-span-1 sm:col-span-2 lg:col-span-4 text-center text-sm text-[var(--color-muted)] py-20">No posts found.</div>
        )}
      </div>
    </div>
  );
}
