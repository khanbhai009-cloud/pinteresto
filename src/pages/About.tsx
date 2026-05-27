import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <div className="bg-[var(--color-warm-white)] min-h-screen pb-24">
      <Helmet>
        <title>About Us — Pinteresto</title>
        <meta name="description" content="Learn about Pinteresto, our AI-curated Pinterest aesthetic blog, and our mission for beautiful content." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-[var(--color-blush)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--color-accent)] mb-4">Our Story</div>
          <h1 className="font-serif text-[clamp(3rem,5vw,4.5rem)] text-[var(--color-mocha)] mb-6 leading-tight">We Are Pinteresto</h1>
          <p className="text-[0.85rem] leading-[1.8] text-[var(--color-muted)]">
            Pinteresto is an AI-curated aesthetic blog that brings Pinterest inspiration to life. We bridge the gap between beautiful inspiration and practical implementation, serving you shoppable ideas directly in beautiful editorial layouts.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 md:px-12 bg-[var(--color-cream)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-[2.5rem] text-[var(--color-mocha)] text-center mb-16">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-[var(--color-blush)] text-[var(--color-mocha)] flex items-center justify-center font-serif text-2xl mx-auto mb-6 relative">
                1
                <div className="absolute -inset-2 border border-[var(--color-sand)] rounded-full"></div>
              </div>
              <h3 className="font-serif text-xl text-[var(--color-mocha)] mb-3">Discovery</h3>
              <p className="text-[0.8rem] leading-relaxed text-[var(--color-muted)]">A Pinterest Pin is discovered capturing a unique, viral aesthetic or room setup.</p>
            </div>
            
            <div>
              <div className="w-16 h-16 rounded-full bg-[var(--color-blush)] text-[var(--color-mocha)] flex items-center justify-center font-serif text-2xl mx-auto mb-6 relative">
                2
                <div className="absolute -inset-2 border border-[var(--color-sand)] rounded-full"></div>
              </div>
              <h3 className="font-serif text-xl text-[var(--color-mocha)] mb-3">Curation</h3>
              <p className="text-[0.8rem] leading-relaxed text-[var(--color-muted)]">Our AI writes a highly-detailed, engaging 1500-word blog post breaking down the aesthetic elements.</p>
            </div>
            
            <div>
              <div className="w-16 h-16 rounded-full bg-[var(--color-blush)] text-[var(--color-mocha)] flex items-center justify-center font-serif text-2xl mx-auto mb-6 relative">
                3
                <div className="absolute -inset-2 border border-[var(--color-sand)] rounded-full"></div>
              </div>
              <h3 className="font-serif text-xl text-[var(--color-mocha)] mb-3">Placement</h3>
              <p className="text-[0.8rem] leading-relaxed text-[var(--color-muted)]">To bring the idea to life, high-quality affiliate products are placed naturally within the context.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 md:px-12 text-center max-w-3xl mx-auto">
        <h2 className="font-serif text-[2.5rem] text-[var(--color-mocha)] mb-6">Our Mission</h2>
        <p className="text-[0.85rem] leading-[1.9] text-[var(--color-muted)] mb-10">
          Our mission is simple: to provide beautiful content and honest recommendations. We want to remove the friction between seeing a beautifully designed space and actually creating it in your own home. Every idea is thoughtfully crafted to inspire.
        </p>
        <p className="text-[0.85rem] text-[var(--color-mocha)] select-all">hello@pinteresto.com</p>
      </section>
    </div>
  );
}
