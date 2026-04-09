"use client";

import { useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { blogPosts } from "@/data/blog";

const categories = [
  "All",
  "Mountain Life",
  "Behind the Scenes",
  "The Observatory",
  "SoCal Skiing",
  "The Lodge",
] as const;

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-condensed text-xs tracking-[0.15em] px-4 py-2 border transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? "bg-navy text-cream border-navy"
                : "bg-transparent text-warm-gray border-light-gray/60 hover:border-navy hover:text-navy"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map((post) => (
          <ArticleCard
            key={post.slug}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            slug={post.slug}
            image={post.image}
            basePath="/blog"
            author={post.author}
            category={post.category}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-warm-gray/60 font-condensed tracking-wider py-16">
          No posts in this category yet. Check back soon.
        </p>
      )}
    </>
  );
}
