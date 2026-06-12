import { useEffect, useRef, useState } from 'react';

interface AnalyticsData {
  slug: string;
  activeSeconds: number;
  drop_off_paragraph_id: number | null;
}

export function useBlogAnalytics(slug: string | null) {
  const [activeParaId, setActiveParaId] = useState<number | null>(null);
  const timeRef = useRef<number>(0);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!slug) return;

    // Start timer
    timerInterval.current = setInterval(() => {
      timeRef.current += 1;
    }, 1000);

    const handleBeforeUnload = () => {
      sendAnalytics();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      if (timerInterval.current) clearInterval(timerInterval.current);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      sendAnalytics();
    };
  }, [slug]);

  // Observer to track which paragraph is active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the visible entry with the highest intersection ratio or simply the first intersecting one
        const activeEntry = entries.find(entry => entry.isIntersecting);
        if (activeEntry) {
          const paraId = activeEntry.target.getAttribute('data-para-id');
          if (paraId) {
            setActiveParaId(parseInt(paraId, 10));
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Require 50% visibility
      }
    );

    const paragraphs = document.querySelectorAll('.paragraph-block');
    paragraphs.forEach(p => observer.observe(p));

    return () => {
      paragraphs.forEach(p => observer.unobserve(p));
      observer.disconnect();
    };
  }, [slug]); // Re-run when DOM changes or slug changes

  const sendAnalytics = () => {
    if (!slug) return;
    
    // Beacon or fetch to send data silently
    const payload: AnalyticsData = {
      slug,
      activeSeconds: timeRef.current,
      drop_off_paragraph_id: activeParaId
    };

    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/track-retention', JSON.stringify(payload));
      } else {
        fetch('/api/track-retention', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        });
      }
    } catch (e) {
      console.error('Analytics send failed', e);
    }
  };
}
