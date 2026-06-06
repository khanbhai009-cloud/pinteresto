import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getSubNiches } from '../lib/posts';
import type { Niche } from '../lib/types';

export default function NichePage() {
  const { niche: nicheSlug } = useParams<{ niche: string }>();
  const [nicheData, setNicheData] = useState<Niche | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (nicheSlug) {
        setLoading(true);
        const data = await getSubNiches(nicheSlug);
        setNicheData(data);
        setLoading(false);
      }
    }
    load();
  }, [nicheSlug]);

  if (loading) {
    return <div className="min-h-screen py-32 px-6 flex justify-center"><div className="w-10 h-10 border-4 border-[var(--color-mocha)] border-t-transparent rounded-full animate-spin"></div></div>;
  }

  if (!nicheData) {
    return <div className="min-h-screen py-32 text-center text-[var(--color-mocha)] font-serif text-2xl">Collection not found.</div>;
  }

  return (
    <div className="bg-[var(--color-warm-white)] min-h-screen pb-24">
      <Helmet>
        <title>{nicheData.title} Ideas — Plinth</title>
        <meta name="description" content={nicheData.description} />
      </Helmet>

      <div className="pt-24 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-muted)] mb-4">
          <Link to="/" className="text-[var(--color-muted)] hover:text-[var(--color-mocha)]">Home</Link> &gt; {nicheData.title}
        </div>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[var(--color-mocha)] mb-6 leading-tight">{nicheData.title}</h1>
        <p className="text-[0.9rem] leading-relaxed text-[var(--color-muted)] max-w-2xl mx-auto">{nicheData.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto px-6 md:px-12">
        {nicheData.sub_niches && nicheData.sub_niches.map((sub) => (
          <Link 
            key={sub.slug} 
            to={`/${nicheSlug}/${sub.slug}`}
            className="group relative h-48 bg-[var(--color-blush)] flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(92,61,46,0.1)] to-[rgba(92,61,46,0.3)] transition-opacity duration-300 group-hover:opacity-50"></div>
            <h3 className="relative z-10 font-serif text-2xl text-[var(--color-warm-white)] group-hover:-translate-y-1 transition-transform duration-300">{sub.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
