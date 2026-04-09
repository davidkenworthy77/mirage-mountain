import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { BlogGrid } from "./BlogGrid";
import { JsonLd, collectionPageSchema, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The Blog | Mirage Mountain Resort",
  description:
    "Stories from 6,100 feet on Palomar Mountain. Behind the scenes, mountain life, and everything in between at Southern California's first ski resort.",
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={collectionPageSchema({
        name: "The Blog | Mirage Mountain Resort",
        description: "Stories from 6,100 feet on Palomar Mountain. Behind the scenes, mountain life, and everything in between.",
        url: "https://miragemountainresort.com/blog",
      })} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://miragemountainresort.com" },
        { name: "Blog", url: "https://miragemountainresort.com/blog" },
      ])} />
      <Navigation />

      <PageHero
        headline="The Blog"
        backgroundImage="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1600&q=80"
        subhead="Stories from 6,100 feet. Written at altitude. Credibility varies."
      />

      <section className="bg-cream paper-texture py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <BlogGrid />
        </div>
      </section>

      <Footer />
    </>
  );
}
