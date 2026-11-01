"use client";

/* Card Fan — design guide §4.2, ported from the Vite redesign step 3.
   3 images, ~18% overlap, center larger and in front, radius 12px, card-soft
   shadow, one-time slide-in on view. The Vite version used the `motion`
   library; this port uses a tiny IntersectionObserver + CSS so the Next
   bundle stays free of an animation dependency. Degrades for 1–2 images. */
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface CardFanImage {
  src: string;
  alt: string;
}

interface CardFanProps {
  images: CardFanImage[];
  className?: string;
}

export function CardFan({ images, className = "" }: CardFanProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!images || images.length === 0) return null;
  const displayImages = images.slice(0, 3);
  const count = displayImages.length;

  return (
    <div ref={ref} className={`flex flex-row justify-center items-end w-full ${className}`}>
      {displayImages.map((img, i) => {
        const width = count === 1 ? "45%" : "38%";
        const marginLeft = i === 0 ? "0%" : "-7%";
        let scale = 1;
        if (count === 3) scale = i === 1 ? 1 : 0.88;
        const zIndex =
          (count === 3 && i === 1) || (count === 2 && i === 1) || (count === 1 && i === 0) ? 2 : 1;
        return (
          <div
            key={img.src + i}
            className="aspect-[2/3] overflow-hidden rounded-[12px]"
            style={{
              width,
              marginLeft,
              zIndex,
              boxShadow: "var(--shadow-card-soft)",
              opacity: inView ? 1 : 0,
              transform: inView ? `translateY(0) scale(${scale})` : `translateY(16px) scale(${scale})`,
              transition: `opacity 400ms ease-out ${i * 80}ms, transform 400ms ease-out ${i * 80}ms`,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={600}
              sizes="(max-width: 768px) 20vw, (max-width: 1024px) 13vw, 110px"
              draggable={false}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
