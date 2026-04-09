"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { updates } from "../data/updates";

function ArrowLeft({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

const categoryColors: Record<string, string> = {
  Lifts: "bg-frost/80 text-cream",
  Lodge: "bg-burnt-orange/80 text-cream",
  Construction: "bg-warm-gray/80 text-cream",
  Mountain: "bg-pine/80 text-cream",
  Permits: "bg-gold/80 text-navy",
  Milestone: "bg-navy text-gold",
};

export function UpdatesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 304; // 280px card + 24px gap
    el.scrollBy({
      left: direction === "left" ? -cardWidth * 2 : cardWidth * 2,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-20">
      {/* Header row */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="font-condensed text-sm text-gold tracking-[0.2em] mb-2">
            CONSTRUCTION UPDATES
          </p>
          <h3 className="font-display text-2xl md:text-3xl text-cream italic">
            What We&apos;ve Been Up To
          </h3>
        </div>

        {/* Desktop arrows */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`w-10 h-10 border-2 border-cream/30 flex items-center justify-center transition-all duration-200 ${
              canScrollLeft
                ? "hover:border-gold hover:text-gold text-cream/70 cursor-pointer"
                : "text-cream/20 border-cream/10 cursor-default"
            }`}
            aria-label="Scroll left"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`w-10 h-10 border-2 border-cream/30 flex items-center justify-center transition-all duration-200 ${
              canScrollRight
                ? "hover:border-gold hover:text-gold text-cream/70 cursor-pointer"
                : "text-cream/20 border-cream/10 cursor-default"
            }`}
            aria-label="Scroll right"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Scrollable card track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {updates.map((update) => (
          <article
            key={update.date}
            className="snap-start shrink-0 w-[280px] bg-cream border border-light-gray/30 shadow-[4px_4px_0px_rgba(232,168,56,0.2)] group hover:shadow-[6px_6px_0px_rgba(232,168,56,0.3)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center vintage-photo transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${update.image}')` }}
              />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors" />
              <span
                className={`absolute top-3 left-3 font-condensed text-[10px] px-2 py-1 tracking-[0.15em] ${
                  categoryColors[update.category] || "bg-navy/70 text-cream"
                }`}
              >
                {update.category.toUpperCase()}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="font-condensed text-[11px] text-warm-gray/60 tracking-wider mb-2">
                {new Date(update.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <h4 className="font-display text-lg text-navy leading-snug mb-2">
                {update.title}
              </h4>
              <p className="text-warm-gray text-sm leading-relaxed line-clamp-3">
                {update.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Fade edges */}
      <div
        className={`absolute top-[4.5rem] bottom-4 left-0 w-8 bg-gradient-to-r from-navy to-transparent pointer-events-none transition-opacity duration-300 ${
          canScrollLeft ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute top-[4.5rem] bottom-4 right-0 w-8 bg-gradient-to-l from-navy to-transparent pointer-events-none transition-opacity duration-300 ${
          canScrollRight ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
