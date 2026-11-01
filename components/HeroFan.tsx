"use client";

/* Hero Fan — design guide §4.1, ported from the Vite redesign step 3.
   5-slot fan geometry (0.62W steps, scale 1 / 0.88 / 0.76, ±3° / ±5°, z 5/4/3),
   3500ms auto-slide, 700ms cubic-bezier(.22,.61,.36,1), infinite loop for
   5–8 images, pause on hover/touch with 2s resume, swipe, tap-side-to-center,
   pill dot indicators, prefers-reduced-motion respected. */
import { useEffect, useRef, useState, type CSSProperties, type TouchEvent } from "react";
import Image from "next/image";

export interface HeroFanImage {
  src: string;
  alt: string;
}

interface HeroFanProps {
  images: HeroFanImage[];
  autoSlide?: boolean;
  intervalMs?: number;
  className?: string;
  /** Compact mode trims the fan viewport (homepage mobile, HOMEPAGE-SPEC). */
  compact?: boolean;
}

export function HeroFan({
  images,
  autoSlide = true,
  intervalMs = 3500,
  className = "",
  compact = false,
}: HeroFanProps) {
  const n = images.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mediaQuery.matches;
    const handler = () => {
      prefersReducedMotion.current = mediaQuery.matches;
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!autoSlide || n <= 1 || prefersReducedMotion.current) return;
    const intervalId = setInterval(() => {
      if (!paused) setActiveIndex((a) => (a + 1) % n);
    }, intervalMs);
    return () => clearInterval(intervalId);
  }, [autoSlide, n, intervalMs, paused]);

  const pause = () => {
    setPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };
  const resumeLater = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setPaused(false), 2000);
  };
  const handleManualNavigate = (newIndex: number) => {
    pause();
    setActiveIndex(newIndex);
    resumeLater();
  };

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    pause();
  };
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (deltaX < -40) handleManualNavigate((activeIndex + 1) % n);
    else if (deltaX > 40) handleManualNavigate((activeIndex - 1 + n) % n);
    else resumeLater();
  };

  const getImageStyle = (i: number): CSSProperties => {
    const d = (i - activeIndex + n) % n;
    const signedD = d > n / 2 ? d - n : d;
    const absD = Math.abs(signedD);
    let scale: number, zIndex: number, opacity: number, rotateDeg: number;
    if (absD === 0) {
      scale = 1; zIndex = 5; opacity = 1; rotateDeg = 0;
    } else if (absD === 1) {
      scale = 0.88; zIndex = 4; opacity = 1; rotateDeg = signedD * 3;
    } else if (absD === 2) {
      scale = 0.76; zIndex = 3; opacity = 0.95; rotateDeg = signedD * 2.5;
    } else {
      scale = 0.76; zIndex = 1; opacity = 0; rotateDeg = signedD * 2.5;
    }
    return {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: "min(52%, 280px)",
      aspectRatio: "2/3",
      borderRadius: "var(--r-md)",
      boxShadow: "var(--shadow-image-fan)",
      objectFit: "cover",
      zIndex,
      opacity,
      transform: `translate(calc(-50% + ${signedD * 62}%), -50%) scale(${scale}) rotate(${rotateDeg}deg)`,
      transition: "transform 700ms cubic-bezier(.22,.61,.36,1), opacity 700ms ease",
      pointerEvents: absD > 2 ? "none" : "auto",
      cursor: absD === 0 ? "default" : "pointer",
    };
  };

  if (n === 0) return null;

  return (
    <div className={className}>
      <div
        className={`relative w-full overflow-hidden ${
          compact ? "h-[290px] md:h-[440px]" : "h-[340px] md:h-[480px]"
        }`}
        onMouseEnter={pause}
        onMouseLeave={resumeLater}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-label="Image carousel"
      >
        {images.map((img, i) => (
          <Image
            key={img.src + i}
            src={img.src}
            alt={img.alt}
            width={560}
            height={840}
            sizes="(max-width: 768px) 52vw, 280px"
            draggable={false}
            priority={i === 0}
            style={getImageStyle(i)}
            onClick={() => {
              const d = (i - activeIndex + n) % n;
              const signedD = d > n / 2 ? d - n : d;
              if (signedD !== 0) handleManualNavigate(i);
            }}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-4" role="tablist" aria-label="Choose image">
        {images.map((img, i) => (
          <button
            key={img.src + i}
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Go to image ${i + 1}`}
            onClick={() => handleManualNavigate(i)}
            style={{
              width: i === activeIndex ? "24px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              border: "none",
              backgroundColor: i === activeIndex ? "var(--c-primary)" : "var(--c-ink-faint)",
              opacity: i === activeIndex ? 1 : 0.5,
              transition: "all 300ms",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
