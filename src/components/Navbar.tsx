import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-6 bg-[rgba(245,237,227,0.95)] md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
      <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-medium text-[var(--color-mocha)]">
        <Link to="/#collections" className="hover:text-[#c4956a]">Collections</Link>
        <Link to="/about" className="hover:text-[#c4956a]">Our Story</Link>
      </div>
      <Link to="/" className="font-serif text-3xl font-semibold tracking-tight text-[#5c3d2e] no-underline">
        Pinteresto
      </Link>
      <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-medium text-[var(--color-mocha)] items-center">
        <Link to="/#collections" className="hover:text-[#c4956a]">Shop</Link>
        <a href="#footer" className="px-4 py-2 border border-[#5c3d2e] rounded-full hover:bg-[var(--color-mocha)] hover:text-white transition-colors">Subscribe</a>
      </div>
    </nav>
  );
}
