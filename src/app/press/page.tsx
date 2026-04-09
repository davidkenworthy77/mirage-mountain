import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { pressArticles } from "@/data/press";
import { PressGrid } from "./PressGrid";
import { JsonLd, collectionPageSchema, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Press & Updates | Mirage Mountain Resort",
  description:
    "News, press releases, and updates from Mirage Mountain Resort on Palomar Mountain in San Diego County. Follow the journey from announcement to opening day.",
};

export default function PressPage() {
  return (
    <>
      <JsonLd data={collectionPageSchema({
        name: "Press & Updates | Mirage Mountain Resort",
        description: "News, press releases, and updates from Mirage Mountain Resort on Palomar Mountain.",
        url: "https://miragemountainresort.com/press",
      })} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://miragemountainresort.com" },
        { name: "Press", url: "https://miragemountainresort.com/press" },
      ])} />
      <Navigation />

      <main>
        <PageHero
          headline="Press & Updates"
          highlightedWord="Updates"
          subhead="All the news from Southern California's most improbable ski resort. Follow along as we turn a mountain, a dream, and a lot of snowmaking equipment into something real."
          backgroundImage="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1920&q=80"
        />

        {/* Articles Section */}
        <section className="bg-cream paper-texture py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <PressGrid articles={[...pressArticles]} />
          </div>
        </section>

        {/* Media Contact */}
        <section className="bg-navy py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
            <h2 className="font-condensed text-sm md:text-base tracking-[0.2em] text-gold uppercase mb-4">
              Media Contact
            </h2>
            <h3 className="font-display text-2xl md:text-3xl text-cream mb-6">
              Writing About Us?
            </h3>
            <p className="font-body text-cream/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              We love talking to journalists, bloggers, and anyone else who
              wants to write about a ski resort in San Diego. Press kits,
              high-res images, and interviews available on request.
            </p>
            <a
              href="mailto:press@miragemountainresort.com"
              className="inline-block font-condensed text-lg tracking-wider text-gold hover:text-gold/80 underline underline-offset-4 transition-colors duration-200"
            >
              press@miragemountainresort.com
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
