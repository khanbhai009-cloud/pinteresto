/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { PageTransition } from './components/PageTransition';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import AffiliateDisclosure from './pages/AffiliateDisclosure';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NichePage from './pages/NichePage';
import CollectionPage from './pages/CollectionPage';
import BlogPostPage from './pages/BlogPostPage';
import LatestPage from './pages/LatestPage';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/latest" element={<PageTransition className="pt-[88px]"><LatestPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition className="pt-[88px]"><About /></PageTransition>} />
        <Route path="/affiliate-disclosure" element={<PageTransition className="pt-[88px]"><AffiliateDisclosure /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition className="pt-[88px]"><PrivacyPolicy /></PageTransition>} />
        <Route path="/:niche" element={<PageTransition className="pt-[88px]"><NichePage /></PageTransition>} />
        <Route path="/:niche/:sub_niche" element={<PageTransition className="pt-[88px]"><CollectionPage /></PageTransition>} />
        <Route path="/:niche/:sub_niche/:slug" element={<PageTransition className="pt-[88px]"><BlogPostPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <Router>
          <div className="min-h-screen flex flex-col bg-[var(--color-warm-white)]">
            <Navbar />
            <main className="flex-1">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </Router>
      </MotionConfig>
    </HelmetProvider>
  );
}

