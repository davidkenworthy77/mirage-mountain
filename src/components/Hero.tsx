"use client";

import { useEffect, useState } from "react";

import { MountainSilhouette } from "./MountainSilhouette";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center vintage-photo"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920&q=80&auto=format')",
          transform: `translateY(${offset * 0.3}px) scale(1.1)`,
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 md:px-12 pt-20">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-cream leading-[1.1] mb-6">
          The Best Mountain
          <br />
          <span className="text-gold italic">You&apos;ve Never Seen.</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-4 leading-relaxed">
          Southern California&apos;s newest ski resort. Palomar Mountain. 6,100
          feet. Opening Winter 2026/27.
        </p>

        <p className="font-handwritten text-gold text-lg md:text-xl mb-10 rotate-[-1deg]">
          Yes, really. A ski resort. In San Diego.
        </p>
      </div>

      {/* Mountain silhouette at bottom */}
      <div className="absolute -bottom-4 lg:-bottom-8 xl:-bottom-12 left-0 right-0">
        <MountainSilhouette
          className="w-full h-auto"
          color="#F5F0E8"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-cream/50"
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
