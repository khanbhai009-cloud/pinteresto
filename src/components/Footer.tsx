import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer id="footer" className="bg-[var(--color-warm-white)] text-[var(--color-mocha)] px-6 md:px-12 py-12 md:py-16 border-t border-[var(--color-sand)] flex flex-col gap-12">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10">
        <div>
          <div className="font-serif text-[1.4rem] font-semibold tracking-tight uppercase mb-4">
            Plinth
          </div>
          <p className="text-[0.72rem] leading-[1.9] text-[var(--color-muted)] mb-6 max-w-sm">
            Thoughtfully curated aesthetic home decor blogs with real affiliate picks. From Pinterest pin to purchase — beautifully.
          </p>
          <div className="flex mt-5 max-w-xs w-full">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-1 bg-transparent border border-[var(--color-sand)] border-r-0 rounded-l-full px-4 md:px-5 py-2.5 text-[0.72rem] text-[var(--color-mocha)] font-sans outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-mocha)] transition-colors min-w-0"
            />
            <button className="bg-[var(--color-mocha)] border border-[var(--color-mocha)] rounded-r-full px-4 md:px-5 py-2.5 text-[0.6rem] tracking-[0.15em] uppercase text-[var(--color-warm-white)] cursor-pointer font-sans transition-colors hover:brightness-110 shrink-0">
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] tracking-widest uppercase text-[var(--color-muted)] mb-4 font-medium">Explore</h4>
          <div className="space-y-3">
            <a href="/#collections" className="block text-[0.72rem] text-[var(--color-mocha)] hover:text-[var(--color-accent)] transition-colors">Our Collections</a>
            <Link to="/latest" className="block text-[0.72rem] text-[var(--color-mocha)] hover:text-[var(--color-accent)] transition-colors">Latest Gallery</Link>
            <a href="mailto:finishertechai@gmail.com" className="block text-[0.72rem] text-[var(--color-mocha)] hover:text-[var(--color-accent)] transition-colors">Contact Us</a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] tracking-widest uppercase text-[var(--color-muted)] mb-4 font-medium">About & Legal</h4>
          <div className="space-y-3">
            <Link to="/about" className="block text-[0.72rem] text-[var(--color-mocha)] hover:text-[var(--color-accent)] transition-colors">Our Story</Link>
            <Link to="/affiliate-disclosure" className="block text-[0.72rem] text-[var(--color-mocha)] hover:text-[var(--color-accent)] transition-colors">Affiliate Disclosure</Link>
            <Link to="/privacy-policy" className="block text-[0.72rem] text-[var(--color-mocha)] hover:text-[var(--color-accent)] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-sand)] pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
        <div>&copy; 2026 Plinth Editorial</div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/affiliate-disclosure" className="hover:text-[var(--color-accent)] transition-colors">Affiliate Disclosure</Link>
          <Link to="/privacy-policy" className="hover:text-[var(--color-accent)] transition-colors">Privacy Policy</Link>
          <a href="mailto:finishertechai@gmail.com" className="hover:text-[var(--color-accent)] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
