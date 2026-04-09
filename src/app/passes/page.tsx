import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/Badge";
import { WavyDivider } from "@/components/WavyDivider";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { EmailSignup } from "@/components/EmailSignup";
import { JsonLd, productSchema, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Passes | Mirage Mountain Resort",
  description:
    "Secure your Eternal Snow Founding Member Pass at Mirage Mountain Resort. $449 for unlimited skiing on Palomar Mountain. Limited to 1,000 members.",
};

export default function PassesPage() {
  return (
    <>
      <JsonLd data={productSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://miragemountainresort.com" },
        { name: "Passes", url: "https://miragemountainresort.com/passes" },
      ])} />
      <Navigation />
      <main>
        <PageHero
          headline="Unlimited Access to a Mountain That Gets Snow Sometimes."
          highlightedWord="Sometimes"
          backgroundImage="https://images.unsplash.com/photo-1565992441121-4367c2967103?w=1920&q=80"
          badgeText="NOW SELLING"
        />

        {/* Eternal Snow Founding Member Pass */}
        <SectionWrapper variant="light" id="founding-pass">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl mx-auto">
              {/* Giant Vintage Lift Ticket Card */}
              <div className="relative bg-cream border-4 border-dashed border-gold p-1 shadow-[6px_6px_0px_rgba(0,0,0,0.12)]">
                {/* Inner border */}
                <div className="border-2 border-navy/20 p-8 md:p-12 relative overflow-hidden">
                  {/* Perforated edge */}
                  <div className="absolute top-0 right-20 bottom-0 w-px border-l-2 border-dotted border-warm-gray/30 hidden md:block" />

                  {/* Header */}
                  <div className="text-center mb-8">
                    <p className="font-condensed text-burnt-orange tracking-[0.3em] text-xs mb-2">
                      MIRAGE MOUNTAIN RESORT PRESENTS
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl text-navy leading-tight mb-3">
                      Eternal Snow<br />
                      <span className="text-gold italic">Founding Member</span> Pass
                    </h2>
                    <WavyDivider color="#C17828" className="my-4" />
                    <p className="font-condensed text-warm-gray tracking-[0.2em] text-sm">
                      SEASON 2026/27 &mdash; INAUGURAL YEAR
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="inline-block relative">
                      <span className="font-display text-7xl md:text-8xl text-navy">$449</span>
                      <span className="absolute -top-2 -right-8 font-handwritten text-burnt-orange text-lg rotate-12">
                        wow
                      </span>
                    </div>
                    <p className="font-condensed text-warm-gray tracking-[0.15em] text-sm mt-2">
                      LIMITED TO 1,000 MEMBERS &mdash; NO EXCEPTIONS
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                    {[
                      "Unlimited skiing all season",
                      "Priority lift access",
                      "15% off food, beverage & retail",
                      "Free rental day for a friend",
                      "Founding Member patch (sewn, not ironed)",
                      "Your name on the Founders Wall",
                      "Early Phase 2 renewal at locked pricing",
                      "Pre-opening First Tracks event Dec 16\u201317, 2026",
                    ].map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2">
                        <span className="text-pine mt-0.5 shrink-0">&#9650;</span>
                        <span className="text-warm-gray text-sm leading-relaxed">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Ikon dig */}
                  <div className="text-center mb-8">
                    <p className="font-handwritten text-burnt-orange text-xl rotate-[-1deg]">
                      Your Ikon Pass could never.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <Button href="#" variant="primary" size="lg">
                      Claim Your Founding Member Pass
                    </Button>
                  </div>

                  {/* Serial number vibe */}
                  <div className="mt-8 pt-4 border-t border-warm-gray/20 flex justify-between items-center text-warm-gray/40">
                    <span className="font-condensed text-[10px] tracking-[0.3em]">
                      NO. 0001 &ndash; 1000
                    </span>
                    <span className="font-condensed text-[10px] tracking-[0.3em]">
                      PALOMAR MOUNTAIN, CA &bull; 6,100 FT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        <WavyDivider className="my-0" />

        {/* Day Passes - Coming Soon */}
        <SectionWrapper variant="dark" id="day-passes">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-10">
              <Badge rotate={3} size="sm" variant="gold" className="mx-auto mb-6">
                COMING SOON
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl text-cream mb-4">
                Day Passes
              </h2>
              <p className="text-cream/60 max-w-lg mx-auto">
                Individual day passes go on sale closer to opening day. Here is what we are estimating.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                {/* Grayed out overlay */}
                <div className="absolute inset-0 bg-navy/40 backdrop-blur-[1px] z-10 flex items-center justify-center">
                  <span className="font-condensed text-gold tracking-[0.3em] text-lg border border-gold/40 px-6 py-3">
                    PRICING NOT YET FINAL
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 opacity-60">
                  {[
                    { label: "Adult (18\u201364)", price: "$79" },
                    { label: "Youth (7\u201317)", price: "$49" },
                    { label: "Senior (65+)", price: "$59" },
                    { label: "Under 6", price: "Free" },
                  ].map((pass) => (
                    <div
                      key={pass.label}
                      className="border border-cream/20 p-6 text-center"
                    >
                      <p className="font-condensed text-cream/60 tracking-[0.15em] text-sm mb-2">
                        {pass.label}
                      </p>
                      <p className="font-display text-3xl text-cream">
                        {pass.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        {/* Onesie Rule */}
        <SectionWrapper variant="light" id="onesie-rule">
          <ScrollReveal animation="scale-in">
            <div className="max-w-2xl mx-auto text-center">
              <div className="relative inline-block">
                <div
                  className="bg-burnt-orange text-cream px-10 py-8 md:px-16 md:py-12 shadow-[6px_6px_0px_rgba(0,0,0,0.2)]"
                  style={{ transform: "rotate(-2deg)" }}
                >
                  <p className="font-condensed text-gold tracking-[0.3em] text-xs mb-3">
                    OFFICIAL RESORT POLICY
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl text-cream mb-4 leading-tight">
                    The Onesie Rule
                  </h3>
                  <WavyDivider color="#F5F0E8" className="my-4" />
                  <p className="text-cream/90 text-lg leading-relaxed mb-2">
                    Wear a vintage one-piece ski suit and receive a{" "}
                    <span className="font-handwritten text-gold text-2xl">
                      free hot chocolate
                    </span>{" "}
                    at any lodge location.
                  </p>
                  <p className="text-cream/70 text-sm">
                    Every visit. No expiration. We are extremely serious about this.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        {/* Email Signup */}
        <SectionWrapper variant="dark">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl text-cream mb-3">
                Stay in the Loop
              </h2>
              <p className="text-cream/60 max-w-md mx-auto text-sm">
                Get pass updates, snow reports, and the occasional existential question about skiing in San Diego.
              </p>
            </div>
            <EmailSignup />
          </ScrollReveal>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
