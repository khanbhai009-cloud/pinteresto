import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
  return (
    <div className="bg-[var(--color-warm-white)] min-h-screen pb-24">
      <Helmet>
        <title>About Us — The Cozy Canvas</title>
        <meta name="description" content="Learn about The Cozy Canvas, our curated editorial aesthetic blog, and our mission for beautiful content." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-[var(--color-blush)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--color-accent)] mb-4">Our Story</div>
          <h1 className="font-serif text-[clamp(3rem,5vw,4.5rem)] text-[var(--color-mocha)] mb-6 leading-tight">We Are The Cozy Canvas</h1>
          <p className="text-[0.9rem] leading-[1.9] text-[var(--color-muted)] font-light max-w-lg mx-auto">
            The Cozy Canvas is an editorial home decor destination — curated spaces, handpicked products, and honest recommendations for your home. We bridge the gap between beautiful inspiration and practical implementation, serving you shoppable ideas directly in beautiful editorial layouts.
          </p>
        </motion.div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 md:px-12 bg-[var(--color-cream)] border-y border-[rgba(196,149,106,0.1)]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif text-[2.5rem] md:text-[3rem] text-[var(--color-mocha)] text-center mb-20"
          >
            How It Works
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center relative"
          >
            {/* Animated Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-[2rem] left-[15%] right-[15%] h-[1px]">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                 className="h-full bg-gradient-to-r from-[var(--color-sand)] via-[var(--color-mocha)] to-[var(--color-sand)] opacity-30"
               ></motion.div>
            </div>

            <motion.div variants={fadeUp} className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-[var(--color-warm-white)] text-[var(--color-mocha)] flex items-center justify-center font-serif text-2xl mx-auto mb-8 relative pin-shadow">
                1
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }} 
                  transition={{ repeat: Infinity, duration: 3, delay: 0 }}
                  className="absolute inset-0 border-[2px] border-[var(--color-accent)] rounded-full"
                ></motion.div>
              </div>
              <h3 className="font-serif text-xl text-[var(--color-mocha)] mb-4">Discovery</h3>
              <p className="text-[0.85rem] leading-relaxed text-[var(--color-muted)] font-light max-w-xs mx-auto">A beautifully designed space is discovered capturing a unique, aesthetic vibe or room setup.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-[var(--color-warm-white)] text-[var(--color-mocha)] flex items-center justify-center font-serif text-2xl mx-auto mb-8 relative pin-shadow">
                2
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }} 
                  transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                  className="absolute inset-0 border-[2px] border-[var(--color-accent)] rounded-full"
                ></motion.div>
              </div>
              <h3 className="font-serif text-xl text-[var(--color-mocha)] mb-4">Curation</h3>
              <p className="text-[0.85rem] leading-relaxed text-[var(--color-muted)] font-light max-w-xs mx-auto">Our editors craft a detailed, engaging post — breaking down the aesthetic, the vibe, and every product that makes it work.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-[var(--color-warm-white)] text-[var(--color-mocha)] flex items-center justify-center font-serif text-2xl mx-auto mb-8 relative pin-shadow">
                3
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }} 
                  transition={{ repeat: Infinity, duration: 3, delay: 2 }}
                  className="absolute inset-0 border-[2px] border-[var(--color-accent)] rounded-full"
                ></motion.div>
              </div>
              <h3 className="font-serif text-xl text-[var(--color-mocha)] mb-4">Placement</h3>
              <p className="text-[0.85rem] leading-relaxed text-[var(--color-muted)] font-light max-w-xs mx-auto">High-quality lifestyle products are placed naturally within the context.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Pull Quote & Mission */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center">
        <motion.blockquote 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="text-[4rem] text-[var(--color-sand)] leading-[0] block mb-2 font-serif opacity-50">"</span>
          <p className="font-serif text-[1.5rem] md:text-[2.2rem] leading-[1.4] text-[var(--color-mocha)] italic max-w-2xl">
            We want to remove the friction between seeing a beautifully designed space and actually creating it in your own home.
          </p>
        </motion.blockquote>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--color-accent)] mb-4">Our Mission</h2>
          <p className="text-[0.9rem] leading-[1.9] text-[var(--color-brown)] font-light mb-10 max-w-xl mx-auto">
            Our mission is simple: to provide beautiful content and honest recommendations. Every editorial layout and product idea is thoughtfully crafted to inspire long-term design decisions that make your space feel real.
          </p>
          <a href="mailto:finishertechai@gmail.com" className="inline-flex items-center gap-3 border border-[var(--color-mocha)] text-[var(--color-mocha)] px-8 py-3 rounded-full text-[0.7rem] uppercase tracking-widest hover:bg-[var(--color-mocha)] hover:text-[var(--color-warm-white)] transition-all overflow-hidden relative group">
            <span className="relative z-10">Contact Editorial Team</span>
            <div className="absolute inset-0 bg-[var(--color-accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-500 delay-100">&rarr;</span>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
