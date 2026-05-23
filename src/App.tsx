/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import AffiliateDisclosure from './pages/AffiliateDisclosure';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NichePage from './pages/NichePage';
import CollectionPage from './pages/CollectionPage';
import BlogPostPage from './pages/BlogPostPage';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[var(--color-warm-white)]">
          <Navbar />
          <main className="flex-1 mt-[76px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/:niche" element={<NichePage />} />
              <Route path="/:niche/:sub_niche" element={<CollectionPage />} />
              <Route path="/:niche/:sub_niche/:slug" element={<BlogPostPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

