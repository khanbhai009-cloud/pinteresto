import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(250, 246, 241, 0)', 'rgba(250, 246, 241, 0.9)']
  );
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );
  
  const paddingY = useTransform(
    scrollY,
    [0, 50],
    ['2rem', '1rem']
  );
  
  const borderColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(196, 149, 106, 0)', 'rgba(196, 149, 106, 0.1)']
  );

  return (
    <motion.nav 
      style={{ backgroundColor, backdropFilter, paddingBottom: paddingY, paddingTop: paddingY, borderBottomColor: borderColor, borderBottomWidth: '1px', borderBottomStyle: 'solid' }}
      className="fixed top-0 w-full z-50 px-6 md:px-12"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Desktop Left Nav */}
        <div className="hidden md:flex flex-1 justify-start space-x-8 text-[0.65rem] uppercase tracking-[0.2em] font-medium text-[var(--color-mocha)]">
          <a href="/#collections" className="hover:text-[var(--color-accent)] transition-colors py-2">Collections</a>
          <Link to="/about" className="hover:text-[var(--color-accent)] transition-colors py-2">Our Story</Link>
        </div>

        {/* Logo */}
        <Link to="/" className="font-serif text-3xl md:text-[2rem] font-medium tracking-tight text-[var(--color-mocha)] no-underline whitespace-nowrap mx-auto transition-transform hover:scale-[1.02]">
          Plinth
        </Link>

        {/* Desktop Right Nav */}
        <div className="hidden md:flex flex-1 justify-end space-x-8 text-[0.65rem] uppercase tracking-[0.2em] font-medium text-[var(--color-mocha)] items-center">
          <Link to="/latest" className="hover:text-[var(--color-accent)] transition-colors py-2">Gallery</Link>
          <a href="#footer" className="px-6 py-2.5 border border-[var(--color-mocha)] rounded-full hover:bg-[var(--color-mocha)] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">Subscribe</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center flex-1 justify-end">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--color-mocha)] focus:outline-none p-2 bg-white/50 rounded-full backdrop-blur-sm">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[var(--color-warm-white)]/95 backdrop-blur-lg border-b border-[rgba(196,149,106,0.15)] shadow-xl flex flex-col gap-8 items-center overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] py-10 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <a href="/#collections" onClick={() => setIsOpen(false)} className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-mocha)] hover:text-[var(--color-accent)] transition-colors">Collections</a>
        <Link to="/about" onClick={() => setIsOpen(false)} className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-mocha)] hover:text-[var(--color-accent)] transition-colors">Our Story</Link>
        <Link to="/latest" onClick={() => setIsOpen(false)} className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-mocha)] hover:text-[var(--color-accent)] transition-colors">Gallery</Link>
        <a href="#footer" onClick={() => setIsOpen(false)} className="px-8 py-3 border border-[var(--color-mocha)] rounded-full text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-mocha)] hover:bg-[var(--color-mocha)] hover:text-white transition-all shadow-sm">Subscribe</a>
      </div>
    </motion.nav>
  );
}
