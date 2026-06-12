/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { PageTransition } from './components/PageTransition';
import { ScrollToTop } from './components/ScrollToTop';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import AffiliateDisclosure from './pages/AffiliateDisclosure';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NichePage from './pages/NichePage';
import CollectionPage from './pages/CollectionPage';
import BlogPostPage from './pages/BlogPostPage';
import LatestPage from './pages/LatestPage';

// Admin Pages
import AdminLayout from './pages/admin/AdminLayout';
import AdminOverview from './pages/admin/AdminOverview';
import AdminPosts from './pages/admin/AdminPosts';
import AdminAnalytics from './pages/admin/AdminAnalytics';
import AdminLogin from './pages/admin/AdminLogin';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { currentUser, isAdmin } = useAuth();
  
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (currentUser.email !== 'ksksysy540@gmail.com' || !isAdmin) {
    const requestAdmin = async () => {
       try {
         const token = await currentUser.getIdToken();
         const res = await fetch('/api/set-admin', {
           method: 'POST',
           headers: { 'Authorization': `Bearer ${token}` }
         });
         const data = await res.json();
         alert(data.message || data.error);
       } catch (e) {
         console.error(e);
       }
    };

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9fafb] p-6 text-center">
        <h1 className="text-3xl font-serif text-[var(--color-mocha)] mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-6 font-medium">Your account ({currentUser.email}) does not have administrator privileges.</p>
        <div className="flex gap-4">
          <button 
            onClick={() => window.location.href = '/'} 
            className="bg-white border border-[var(--color-mocha)] text-[var(--color-mocha)] px-6 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
          >
            Return to Home
          </button>
          
          {currentUser.email === 'ksksysy540@gmail.com' && (
            <button 
              onClick={requestAdmin}
              className="bg-[var(--color-mocha)] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-colors shadow-sm"
            >
              Verify & Refresh Admin Claim
            </button>
          )}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error `key` is valid for AnimatePresence to track route changes despite TS complaint */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/latest" element={<PageTransition className="pt-[88px]"><LatestPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition className="pt-[88px]"><About /></PageTransition>} />
        <Route path="/affiliate-disclosure" element={<PageTransition className="pt-[88px]"><AffiliateDisclosure /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition className="pt-[88px]"><PrivacyPolicy /></PageTransition>} />
        <Route path="/login" element={<PageTransition className="pt-[88px]"><AdminLogin /></PageTransition>} />
        <Route path="/:niche" element={<PageTransition className="pt-[88px]"><NichePage /></PageTransition>} />
        <Route path="/:niche/:sub_niche" element={<PageTransition className="pt-[88px]"><CollectionPage /></PageTransition>} />
        <Route path="/:niche/:sub_niche/:slug" element={<PageTransition className="pt-[88px]"><BlogPostPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-warm-white)]">
      <Navbar />
      <main className="flex-1">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}

function MainRouter() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin') && location.pathname !== '/login';

  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route index element={<AdminOverview />} />
          <Route path="posts" element={<AdminPosts />} />
          <Route path="analytics" element={<AdminAnalytics />} />
        </Route>
      </Routes>
    );
  }

  return <MainLayout />;
}

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,     // 5 min fresh
      gcTime: 1000 * 60 * 10,       // 10 min in memory
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  }
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <MotionConfig reducedMotion="user">
            <Router>
              <ScrollToTop />
              <MainRouter />
            </Router>
          </MotionConfig>
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

