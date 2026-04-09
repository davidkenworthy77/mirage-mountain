import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/Badge";
import { WavyDivider } from "@/components/WavyDivider";
import { Button } from "@/components/Button";
import { StatBlock } from "@/components/StatBlock";
import { JsonLd, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Plans & Vision | Mirage Mountain Resort -- Palomar Mountain, CA",
  description:
    "From Phase 1 opening Winter 2026/27 with 4 lifts and 22 runs, through a slopeside hotel and year-round mountain experiences. See the full vision for Southern California's first ski resort.",
};

/* ------------------------------------------------------------------ */
/*  Phase bullet list                                                  */
/* ------------------------------------------------------------------ */
function PhaseBullet({
  children,
  variant = "light",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
}) {
  const dot =
    variant === "dark"
      ? "bg-gold"
      : "bg-burnt-orange";
  const text =
    variant === "dark"
      ? "text-cream/90"
      : "text-warm-gray";

  return (
    <li className={`flex items-start gap-3 ${text} font-body text-base md:text-lg leading-relaxed`}>
      <span
        className={`mt-2 w-2 h-2 rounded-full shrink-0 ${dot}`}
        aria-hidden="true"
      />
      <span>{children}</span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function PlansPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Plans & Vision | Mirage Mountain Resort",
          description:
            "The phased development plan for Mirage Mountain Resort on Palomar Mountain, from opening day through full build-out.",
          url: "https://miragemountainresort.com/plans",
          isPartOf: {
            "@type": "WebSite",
            name: "Mirage Mountain Resort",
            url: "https://miragemountainresort.com",
          },
        }}
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://miragemountainresort.com" },
        { name: "Plans", url: "https://miragemountainresort.com/plans" },
      ])} />

      <Navigation />

      <main>
        {/* ============================================================ */}
        {/*  HERO                                                        */}
        {/* ============================================================ */}
        <PageHero
          headline="The Mountain That Shouldn't Exist. And Everything We're Building On It."
          highlightedWord="Shouldn't Exist."
          backgroundImage="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1920&q=80"
        />

        {/* ============================================================ */}
        {/*  THE VISION                                                  */}
        {/* ============================================================ */}
        <SectionWrapper variant="light" id="vision">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-condensed text-sm md:text-base tracking-[0.2em] text-burnt-orange uppercase mb-4">
                The Vision
              </h2>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-8 leading-[1.15]">
                Why Palomar Mountain
              </h3>

              <WavyDivider className="mb-10" color="#C4693B" />

              <div className="space-y-6 font-body text-base md:text-lg text-warm-gray leading-relaxed">
                <p>
                  Palomar Mountain is an anomaly. At 6,100 feet, it holds Sierra
                  Nevada-like forests of white fir, incense cedar, and black oak --
                  the kind of terrain you'd expect four hours north, not ninety
                  minutes from three million San Diegans. The north-facing slopes
                  hold snow longer than anything else in the county. The Palomar
                  Observatory has been drawing visitors to this peak since 1948. The
                  bones are already here.
                </p>
                <p>
                  There's a reason no one has built a ski resort in San Diego before.
                  The elevation is modest, the snowfall inconsistent, and the
                  permitting is an exercise in creative suffering. But modern
                  snowmaking changes the math entirely. With energy-efficient fan
                  guns covering 60% of terrain from day one, we don't need to wait
                  for December storms -- we make our own winter.
                </p>
                <p>
                  The mountain also sits in one of the most underserved ski markets
                  in North America. The nearest resort is Big Bear, two and a half
                  hours away on a road that turns every weekend into a parking lot.
                  Palomar is closer to more people, on better roads, with zero
                  competition.
                </p>
                <p>
                  We looked at this mountain and said: why hasn't anyone done this
                  yet? Then we realized that was either a very good sign or a very
                  bad sign. We went with good.{" "}
                  <a
                    href="https://tiascapital.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-burnt-orange hover:text-burnt-orange/80 underline underline-offset-2 transition-colors"
                  >
                    Tias Capital
                  </a>{" "}
                  agreed.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        {/* ============================================================ */}
        {/*  PHASE 1 -- OPENING WINTER 2026/27                           */}
        {/* ============================================================ */}
        <SectionWrapper variant="dark" id="phase-1">
          <ScrollReveal>
            <div className="relative max-w-4xl mx-auto">
              <div className="relative p-8 md:p-12 lg:p-16 shadow-[6px_6px_0px_rgba(212,168,75,0.25)]">

                <div className="flex flex-col items-center text-center mb-10">
                  <Badge rotate={-4} size="md" variant="gold">
                    HAPPENING
                    <br />
                    NOW
                  </Badge>
                  <h2 className="font-condensed text-sm md:text-base tracking-[0.2em] text-gold uppercase mt-6 mb-3">
                    Phase 1
                  </h2>
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.15]">
                    Opening Winter 2026/27
                  </h3>
                </div>

                <WavyDivider className="mb-10" color="#D4A84B" />

                <ul className="space-y-5 max-w-2xl mx-auto">
                  <PhaseBullet variant="dark">
                    <strong className="text-gold">4 lifts, 22 runs, 280 acres</strong> of skiable terrain across
                    north-facing slopes from summit to base
                  </PhaseBullet>
                  <PhaseBullet variant="dark">
                    <strong className="text-gold">The Warming Hut</strong> -- a 12,000 sq ft timber-frame base
                    lodge with stone fireplace, full-service restaurant, bar, rental
                    shop, and ski school headquarters
                  </PhaseBullet>
                  <PhaseBullet variant="dark">
                    <strong className="text-gold">Snowmaking on 60% of terrain</strong> -- energy-efficient fan
                    guns ensuring a reliable season from late November through March
                  </PhaseBullet>
                  <PhaseBullet variant="dark">
                    <strong className="text-gold">200-space parking</strong> and a shuttle service from
                    Escondido, keeping cars off the mountain road
                  </PhaseBullet>
                </ul>

                <div className="mt-12 text-center">
                  <Button href="/passes" variant="primary" size="lg">
                    Get Your Founding Pass
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        {/* ============================================================ */}
        {/*  PHASE 2 -- 2027/28                                          */}
        {/* ============================================================ */}
        <SectionWrapper variant="light" id="phase-2">
          <ScrollReveal>
            <div className="relative max-w-4xl mx-auto">
              <div className="relative p-8 md:p-12 lg:p-16 shadow-[6px_6px_0px_rgba(196,105,59,0.25)]">

                <div className="flex flex-col items-center text-center mb-10">
                  <Badge rotate={3} size="md" variant="navy">
                    COMING
                    <br />
                    NEXT
                  </Badge>
                  <h2 className="font-condensed text-sm md:text-base tracking-[0.2em] text-burnt-orange uppercase mt-6 mb-3">
                    Phase 2
                  </h2>
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy leading-[1.15]">
                    Expanding the Experience
                  </h3>
                  <p className="font-body text-warm-gray/70 mt-2 text-lg">2027/28 Season</p>
                </div>

                <WavyDivider className="mb-10" color="#C4693B" />

                {/* Slightly lighter visual treatment -- dashed border, softer framing */}
                <div className="border border-dashed border-navy/20 rounded-sm p-6 md:p-8 bg-cream/50">
                  <ul className="space-y-5 max-w-2xl mx-auto">
                    <PhaseBullet variant="light">
                      <strong className="text-navy">The Observatory Lounge</strong> -- a mid-mountain lodge with
                      panoramic views, craft cocktails, and après-ski that rivals
                      the skiing itself
                    </PhaseBullet>
                    <PhaseBullet variant="light">
                      <strong className="text-navy">2 more lifts</strong>, expanding to 350 acres and 30+ runs
                      including dedicated beginner terrain
                    </PhaseBullet>
                    <PhaseBullet variant="light">
                      <strong className="text-navy">Night skiing on 8 runs</strong> with dark-sky-preserving LED
                      lighting -- because we don't mess with the Observatory's view
                    </PhaseBullet>
                    <PhaseBullet variant="light">
                      <strong className="text-navy">The Onesie Park</strong> -- a terrain park with progressive
                      features including "The Reagan," a feature we legally cannot
                      describe further
                    </PhaseBullet>
                    <PhaseBullet variant="light">
                      <strong className="text-navy">Tubing hill</strong> -- because some people just want to
                      spin downhill screaming, and we respect that
                    </PhaseBullet>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        {/* ============================================================ */}
        {/*  PHASE 3 -- 2028/29+                                         */}
        {/* ============================================================ */}
        <SectionWrapper variant="dark" id="phase-3">
          <ScrollReveal>
            <div className="relative max-w-4xl mx-auto">
              <div className="relative p-8 md:p-12 lg:p-16 shadow-[6px_6px_0px_rgba(212,168,75,0.25)]">

                <div className="flex flex-col items-center text-center mb-10">
                  <Badge rotate={-2} size="lg" variant="cream">
                    THE
                    <br />
                    DREAM
                  </Badge>
                  <h2 className="font-condensed text-sm md:text-base tracking-[0.2em] text-gold uppercase mt-6 mb-3">
                    Phase 3
                  </h2>
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.15]">
                    The Full Mountain
                  </h3>
                  <p className="font-body text-cream/50 mt-2 text-lg italic">2028/29 and beyond</p>
                </div>

                <WavyDivider className="mb-10" color="#D4A84B" />

                {/* Aspirational/dreamy treatment -- blurred background glow, softer opacity */}
                <div className="relative">
                  <div
                    className="absolute -inset-4 bg-gold/5 rounded-lg blur-xl"
                    aria-hidden="true"
                  />
                  <div className="relative border border-cream/10 rounded-sm p-6 md:p-8 bg-navy/30 backdrop-blur-sm">
                    <ul className="space-y-5 max-w-2xl mx-auto">
                      <PhaseBullet variant="dark">
                        <strong className="text-gold">80-room slopeside hotel</strong> -- ski-in, ski-out, with a
                        rooftop hot tub that faces the Milky Way
                      </PhaseBullet>
                      <PhaseBullet variant="dark">
                        <strong className="text-gold">10 rental cabins</strong> tucked into the forest for the
                        people who want to wake up on the mountain
                      </PhaseBullet>
                      <PhaseBullet variant="dark">
                        <strong className="text-gold">Exclusive Observatory stargazing</strong> -- private evening
                        sessions at Palomar Observatory, because your lift ticket
                        should come with constellations
                      </PhaseBullet>
                      <PhaseBullet variant="dark">
                        <strong className="text-gold">Nordic trails, summer mountain biking, concerts</strong> --
                        making Palomar Mountain a year-round destination, not a
                        seasonal bet
                      </PhaseBullet>
                      <PhaseBullet variant="dark">
                        <strong className="text-gold">Wedding venue at mid-mountain</strong> -- say "I do" at
                        6,000 feet with the Pacific on the horizon, then ski your
                        reception
                      </PhaseBullet>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        {/* ============================================================ */}
        {/*  THE NUMBERS                                                 */}
        {/* ============================================================ */}
        <SectionWrapper variant="dark" id="numbers" className="border-t border-cream/10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-condensed text-sm md:text-base tracking-[0.2em] text-gold uppercase mb-4">
                The Numbers
              </h2>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.15]">
                What It Takes
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto mb-16">
            <ScrollReveal delay={0}>
              <StatBlock value={85} suffix="M" label="Total Investment" />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <StatBlock value={38} suffix="M" label="Phase 1 Budget" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <StatBlock value={200} suffix="+" label="Phase 1 Jobs" />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <StatBlock value={500} suffix="+" label="Full Build Jobs" />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-block bg-cream/5 border border-cream/10 rounded-sm px-8 py-6 mb-8">
                <p className="font-display text-4xl md:text-5xl text-gold mb-2">
                  $45M
                </p>
                <p className="font-condensed text-sm tracking-widest text-cream/70 uppercase">
                  Projected Annual Economic Impact
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="max-w-xl mx-auto text-center mt-8">
              <p className="font-handwritten text-xl md:text-2xl text-gold/80 leading-relaxed mb-8" style={{ transform: "rotate(-1deg)" }}>
                &ldquo;Funded by investors who believe skiing in San Diego is
                either visionary or delusional, and are comfortable with
                both.&rdquo;
              </p>
              <p className="font-body text-cream/60 text-sm">
                Backed by{" "}
                <a
                  href="https://tiascapital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold/80 underline underline-offset-2 transition-colors"
                >
                  Tias Capital
                </a>
              </p>
            </div>
          </ScrollReveal>
        </SectionWrapper>
      </main>

      <Footer />
    </>
  );
}
