"use client";

import { useEffect, useState } from "react";
import { Badge } from "./Badge";
import { MountainSilhouette } from "./MountainSilhouette";

type PageHeroProps = {
  headline: string;
  highlightedWord?: string;
  subhead?: string;
  badgeText?: string;
  backgroundImage: string;
  children?: React.ReactNode;
};

export function PageHero({
  headline,
  highlightedWord,
  subhead,
  badgeText,
  backgroundImage,
  children,
}: PageHeroProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Split headline at highlighted word if provided
  let headlineParts: { before: string; highlight: string; after: string } | null = null;
  if (highlightedWord && headline.includes(highlightedWord)) {
    const idx = headline.indexOf(highlightedWord);
    headlineParts = {
      before: headline.slice(0, idx),
      highlight: highlightedWord,
      after: headline.slice(idx + highlightedWord.length),
    };
  }

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center vintage-photo"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          transform: `translateY(${offset * 0.25}px) scale(1.1)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/90" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-44">
        {badgeText && (
          <div className="flex justify-center mb-6">
            <Badge rotate={-4} size="sm" variant="cream">
              <span dangerouslySetInnerHTML={{ __html: badgeText.replace(/\n/g, "<br/>") }} />
            </Badge>
          </div>
        )}

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-[1.1] mb-4">
          {headlineParts ? (
            <>
              {headlineParts.before}
              <span className="text-gold italic">{headlineParts.highlight}</span>
              {headlineParts.after}
            </>
          ) : (
            headline
          )}
        </h1>

        {subhead && (
          <p className="font-body text-base md:text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
            {subhead}
          </p>
        )}

        {children}
      </div>

      <div className="absolute -bottom-4 lg:-bottom-8 xl:-bottom-12 left-0 right-0">
        <MountainSilhouette className="w-full h-auto" color="#F5F0E8" />
      </div>
    </section>
  );
}

export function PageHeroDark({
  headline,
  highlightedWord,
  subhead,
  badgeText,
  backgroundImage,
  children,
}: PageHeroProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  let headlineParts: { before: string; highlight: string; after: string } | null = null;
  if (highlightedWord && headline.includes(highlightedWord)) {
    const idx = headline.indexOf(highlightedWord);
    headlineParts = {
      before: headline.slice(0, idx),
      highlight: highlightedWord,
      after: headline.slice(idx + highlightedWord.length),
    };
  }

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center vintage-photo"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          transform: `translateY(${offset * 0.25}px) scale(1.1)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/90" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-44">
        {badgeText && (
          <div className="flex justify-center mb-6">
            <Badge rotate={-4} size="sm" variant="gold">
              <span dangerouslySetInnerHTML={{ __html: badgeText.replace(/\n/g, "<br/>") }} />
            </Badge>
          </div>
        )}

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-[1.1] mb-4">
          {headlineParts ? (
            <>
              {headlineParts.before}
              <span className="text-gold italic">{headlineParts.highlight}</span>
              {headlineParts.after}
            </>
          ) : (
            headline
          )}
        </h1>

        {subhead && (
          <p className="font-body text-base md:text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
            {subhead}
          </p>
        )}

        {children}
      </div>

      <div className="absolute -bottom-4 lg:-bottom-8 xl:-bottom-12 left-0 right-0">
        <MountainSilhouette className="w-full h-auto" color="#1B2A4A" />
      </div>
    </section>
  );
}
