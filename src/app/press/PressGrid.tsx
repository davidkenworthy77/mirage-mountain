"use client";

import { useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import type { PressArticle } from "@/data/press";

const years = ["All", "2024", "2025", "2026"] as const;

type PressGridProps = {
  articles: PressArticle[];
};

export function PressGrid({ articles }: PressGridProps) {
  const [activeYear, setActiveYear] = useState<string>("All");

  const filtered =
    activeYear === "All"
      ? articles
      : articles.filter((a) => a.date.startsWith(activeYear));

  // Sort newest first
  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Year filter tabs */}
      <div className="flex items-center justify-center gap-2 mb-12">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`font-condensed text-sm tracking-[0.15em] px-5 py-2 transition-all duration-200 ${
              activeYear === year
                ? "bg-navy text-cream"
                : "bg-transparent text-warm-gray/70 hover:text-navy border border-light-gray/50 hover:border-navy/30"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Articles grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {sorted.map((article) => (
          <ArticleCard
            key={article.slug}
            title={article.title}
            date={article.date}
            excerpt={article.excerpt}
            slug={article.slug}
            image={article.image}
            basePath="/press"
            author={article.author}
            category={article.category}
          />
        ))}
      </div>

      {sorted.length === 0 && (
        <p className="text-center text-warm-gray/60 font-body text-lg py-12">
          No articles found for {activeYear}.
        </p>
      )}
    </>
  );
}
