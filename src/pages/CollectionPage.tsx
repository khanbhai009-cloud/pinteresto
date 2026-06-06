import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getCollectionPins } from '../lib/posts';
import type { BlogPost } from '../lib/types';
import { PinCard } from '../components/PinCard';

export default function CollectionPage() {
  const { niche, sub_niche } = useParams<{ niche: string; sub_niche: string }>();
  const [pins, setPins] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (niche && sub_niche) {
        setLoading(true);
        const data = await getCollectionPins(niche, sub_niche, 20);
        setPins(data);
        setLoading(false);
      }
    }
    load();
  }, [niche, sub_niche]);

  const formattedSubNiche = sub_niche ? sub_niche.replace(/-/g, ' ') : '';
  const titleText = pins.length >= 10 ? `Top 10 ${formattedSubNiche} Ideas` : `Top ${formattedSubNiche} Ideas`;

  return (
    <div className="bg-[var(--color-cream)] min-h-screen pb-24">
      <Helmet>
        <title>{titleText} — Plinth</title>
        <meta name="description" content={`Curated ${formattedSubNiche} aesthetic home decor ideas.`} />
      </Helmet>

      <div className="pt-24 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-4">
          <Link to="/" className="text-[var(--color-muted)] hover:text-[var(--color-mocha)]">Home</Link> &gt;{' '}
          <Link to={`/${niche}`} className="text-[var(--color-muted)] hover:text-[var(--color-mocha)]">{niche?.replace(/-/g, ' ')}</Link> &gt;{' '}
          {formattedSubNiche}
        </div>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[var(--color-mocha)] mb-6 capitalize leading-tight">{titleText}</h1>
        <div className="w-10 h-px bg-[var(--color-sand)] mx-auto opacity-80"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto px-6 md:px-12">
        {loading ? (
           Array(8).fill(0).map((_, i) => (
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
      </div>
      
      {!loading && pins.length === 0 && (
        <div className="text-center text-[var(--color-muted)] py-12">
          No pins found for this collection yet. Check back soon.
        </div>
      )}
    </div>
  );
}
