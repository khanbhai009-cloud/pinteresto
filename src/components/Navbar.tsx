import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-4 md:py-6 bg-[rgba(245,237,227,0.95)] backdrop-blur-sm border-b border-[rgba(196,149,106,0.15)] md:border-transparent md:bg-transparent md:backdrop-blur-none transition-all">
      <div className="flex justify-between items-center">
        {/* Desktop Left Nav */}
        <div className="hidden md:flex flex-1 justify-start space-x-8 text-xs uppercase tracking-widest font-medium text-[var(--color-mocha)]">
          <Link to="/#collections" className="hover:text-[#c4956a] transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-[#c4956a] transition-colors">Our Story</Link>
        </div>

        {/* Logo */}
        <Link to="/" className="font-serif text-3xl md:text-3xl font-semibold tracking-tight text-[#5c3d2e] no-underline whitespace-nowrap md:mx-auto">
          Pinteresto
        </Link>

        {/* Desktop Right Nav */}
        <div className="hidden md:flex flex-1 justify-end space-x-8 text-xs uppercase tracking-widest font-medium text-[var(--color-mocha)] items-center">
          <Link to="/#popular" className="hover:text-[#c4956a] transition-colors">Popular</Link>
          <a href="#footer" className="px-5 py-2 border border-[#5c3d2e] rounded-full hover:bg-[var(--color-mocha)] hover:text-white transition-colors">Subscribe</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--color-mocha)] focus:outline-none p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--color-warm-white)] border-b border-[rgba(196,149,106,0.15)] shadow-xl flex flex-col py-6 px-6 gap-6 items-center">
          <Link to="/#collections" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest font-medium text-[var(--color-mocha)]">Collections</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest font-medium text-[var(--color-mocha)]">Our Story</Link>
          <Link to="/#popular" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest font-medium text-[var(--color-mocha)]">Popular</Link>
          <a href="#footer" onClick={() => setIsOpen(false)} className="px-6 py-3 border border-[#5c3d2e] rounded-full text-sm uppercase tracking-widest font-medium text-[var(--color-mocha)] hover:bg-[var(--color-mocha)] hover:text-white transition-colors">Subscribe</a>
        </div>
      )}
    </nav>
  );
}
