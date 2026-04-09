import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/Badge";
import { WavyDivider } from "@/components/WavyDivider";
import { TrailRow } from "@/components/TrailMarker";
import { Button } from "@/components/Button";
import { JsonLd, sportsActivitySchema, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The Mountain | Mirage Mountain Resort -- Palomar Mountain, CA",
  description:
    "6,100 feet of skiable terrain on Palomar Mountain with 22 runs, 280 acres, 4 lifts, and 1,200 ft of vertical drop. Southern California skiing above San Diego County.",
};

export default function TheMountainPage() {
  return (
    <>
      <JsonLd data={sportsActivitySchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://miragemountainresort.com" },
        { name: "The Mountain", url: "https://miragemountainresort.com/the-mountain" },
      ])} />
      <Navigation />
      <main>
        {/* ─── HERO ─── */}
        <PageHero
          headline="6,100 Feet of Questionable Decisions."
          highlightedWord="Questionable"
          subhead="22 runs. 280 acres. 1,200 feet of vertical. One absurdly beautiful mountain above San Diego."
          badgeText={"EST. 2026\nPALOMAR MTN"}
          backgroundImage="https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1920&q=80"
        />

        {/* ─── MOUNTAIN STATS GRID (light) ─── */}
        <SectionWrapper variant="light" id="stats">
          <ScrollReveal animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-navy mb-4">
                By the Numbers
              </h2>
              <WavyDivider />
            </div>
          </ScrollReveal>

          {/* Stats badge cluster */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6 justify-items-center mb-16">
            <ScrollReveal animation="scale-in" delay={0}>
              <Badge rotate={-5} size="lg" variant="navy">
                <span>
                  SUMMIT
                  <br />
                  <span className="text-lg font-display not-italic">6,100</span>
                  <br />
                  FT
                </span>
              </Badge>
            </ScrollReveal>
            <ScrollReveal animation="scale-in" delay={100}>
              <Badge rotate={3} size="lg" variant="navy">
                <span>
                  BASE
                  <br />
                  <span className="text-lg font-display not-italic">4,900</span>
                  <br />
                  FT
                </span>
              </Badge>
            </ScrollReveal>
            <ScrollReveal animation="scale-in" delay={200}>
              <Badge rotate={-2} size="lg" variant="gold">
                <span>
                  VERTICAL
                  <br />
                  <span className="text-lg font-display not-italic">1,200</span>
                  <br />
                  FT DROP
                </span>
              </Badge>
            </ScrollReveal>
            <ScrollReveal animation="scale-in" delay={300}>
              <Badge rotate={4} size="lg" variant="navy">
                <span>
                  SKIABLE
                  <br />
                  <span className="text-lg font-display not-italic">280</span>
                  <br />
                  ACRES
                </span>
              </Badge>
            </ScrollReveal>
            <ScrollReveal animation="scale-in" delay={400}>
              <Badge rotate={-3} size="lg" variant="navy">
                <span>
                  <span className="text-lg font-display not-italic">22</span>
                  <br />
                  NAMED
                  <br />
                  RUNS
                </span>
              </Badge>
            </ScrollReveal>
          </div>

          {/* Secondary stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="text-center p-6 border-2 border-navy/20 shadow-[4px_4px_0px_rgba(212,168,75,0.3)]">
                <p className="font-condensed text-sm tracking-widest text-warm-gray uppercase mb-1">
                  Longest Run
                </p>
                <p className="font-display text-3xl text-navy">1.4 mi</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="text-center p-6 border-2 border-navy/20 shadow-[4px_4px_0px_rgba(212,168,75,0.3)]">
                <p className="font-condensed text-sm tracking-widest text-warm-gray uppercase mb-1">
                  Lifts
                </p>
                <p className="font-display text-3xl text-navy">4</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="text-center p-6 border-2 border-navy/20 shadow-[4px_4px_0px_rgba(212,168,75,0.3)]">
                <p className="font-condensed text-sm tracking-widest text-warm-gray uppercase mb-1">
                  Natural Snow
                </p>
                <p className="font-display text-3xl text-navy">30+ in</p>
                <p className="text-xs text-warm-gray/70 mt-1">+ snowmaking 60%</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400}>
              <div className="text-center p-6 border-2 border-navy/20 shadow-[4px_4px_0px_rgba(212,168,75,0.3)]">
                <p className="font-condensed text-sm tracking-widest text-warm-gray uppercase mb-1">
                  Season
                </p>
                <p className="font-display text-3xl text-navy">Nov-Apr</p>
                <p className="text-xs text-warm-gray/70 mt-1">North-facing aspect</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Terrain breakdown bar */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-3xl mx-auto mt-14">
              <h3 className="font-condensed text-sm tracking-widest text-warm-gray uppercase text-center mb-4">
                Terrain Breakdown
              </h3>
              <div className="flex h-6 rounded-sm overflow-hidden border border-navy/20">
                <div
                  className="bg-pine flex items-center justify-center"
                  style={{ width: "25%" }}
                >
                  <span className="font-condensed text-[10px] text-cream tracking-wider">
                    25% BEG
                  </span>
                </div>
                <div
                  className="bg-frost flex items-center justify-center"
                  style={{ width: "40%" }}
                >
                  <span className="font-condensed text-[10px] text-cream tracking-wider">
                    40% INT
                  </span>
                </div>
                <div
                  className="bg-navy flex items-center justify-center"
                  style={{ width: "25%" }}
                >
                  <span className="font-condensed text-[10px] text-cream tracking-wider">
                    25% ADV
                  </span>
                </div>
                <div
                  className="bg-burnt-orange flex items-center justify-center"
                  style={{ width: "10%" }}
                >
                  <span className="font-condensed text-[10px] text-cream tracking-wider">
                    10%
                  </span>
                </div>
              </div>
              <div className="flex justify-between mt-2 font-condensed text-[10px] tracking-wider text-warm-gray uppercase">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Advanced</span>
                <span>Expert</span>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        {/* ─── LIFTS SECTION (dark) ─── */}
        <SectionWrapper variant="dark" id="lifts">
          <ScrollReveal animation="fade-in">
            <div className="text-center mb-16">
              <p className="font-handwritten text-gold text-lg md:text-xl mb-3 -rotate-2">
                four ways up
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
                The Lifts
              </h2>
              <WavyDivider color="#E8A838" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Stardust Express */}
            <ScrollReveal animation="slide-left" delay={0}>
              <div className="border-2 border-gold/60 p-8 relative group hover:border-gold transition-all duration-300 shadow-[5px_5px_0px_rgba(212,168,75,0.2)] hover:shadow-[7px_7px_0px_rgba(212,168,75,0.3)]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl text-cream">Stardust Express</h3>
                    <p className="font-condensed text-sm tracking-widest text-gold uppercase">
                      High-Speed Quad
                    </p>
                  </div>
                  <Badge rotate={5} size="sm" variant="gold">
                    <span>
                      8<br />MIN
                    </span>
                  </Badge>
                </div>
                <p className="font-body text-cream/70 text-base leading-relaxed">
                  Base to mid-mountain. 2,400 ft of cable connecting you to the heart of the
                  mountain. The flagship ride -- fast, smooth, and scenic enough to make you
                  forget you&apos;re in San Diego County.
                </p>
              </div>
            </ScrollReveal>

            {/* The Hale Lift */}
            <ScrollReveal animation="slide-right" delay={100}>
              <div className="border-2 border-frost/60 p-8 relative group hover:border-frost transition-all duration-300 shadow-[5px_5px_0px_rgba(135,206,235,0.2)] hover:shadow-[7px_7px_0px_rgba(135,206,235,0.3)]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl text-cream">The Hale Lift</h3>
                    <p className="font-condensed text-sm tracking-widest text-frost uppercase">
                      Fixed-Grip Triple
                    </p>
                  </div>
                  <Badge rotate={-4} size="sm" variant="cream">
                    <span>
                      1,800
                      <br />
                      FT
                    </span>
                  </Badge>
                </div>
                <p className="font-body text-cream/70 text-base leading-relaxed">
                  Mid-mountain to summit. Named for George Ellery Hale, the astronomer who
                  built the famous observatory up the road. This chair takes you to the top
                  of everything.
                </p>
              </div>
            </ScrollReveal>

            {/* Doane Valley Chair */}
            <ScrollReveal animation="slide-left" delay={200}>
              <div className="border-2 border-pine/60 p-8 relative group hover:border-pine transition-all duration-300 shadow-[5px_5px_0px_rgba(76,120,76,0.2)] hover:shadow-[7px_7px_0px_rgba(76,120,76,0.3)]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl text-cream">Doane Valley Chair</h3>
                    <p className="font-condensed text-sm tracking-widest text-pine uppercase">
                      Fixed-Grip Double
                    </p>
                  </div>
                </div>
                <p className="font-body text-cream/70 text-base leading-relaxed">
                  Services the western slopes -- the mellow, tree-lined side of the mountain.
                  Beginner and intermediate terrain with enough variety to keep you
                  progressing all season.
                </p>
              </div>
            </ScrollReveal>

            {/* The Boucher Platter */}
            <ScrollReveal animation="slide-right" delay={300}>
              <div className="border-2 border-burnt-orange/60 p-8 relative group hover:border-burnt-orange transition-all duration-300 shadow-[5px_5px_0px_rgba(196,105,59,0.2)] hover:shadow-[7px_7px_0px_rgba(196,105,59,0.3)]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl text-cream">The Boucher Platter</h3>
                    <p className="font-condensed text-sm tracking-widest text-burnt-orange uppercase">
                      Surface Lift
                    </p>
                  </div>
                </div>
                <p className="font-body text-cream/70 text-base leading-relaxed">
                  The learning area. Gentle grade, wide-open space, and zero judgment. Named
                  after the Boucher Hill lookout tower nearby. Everyone starts somewhere --
                  this is where.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </SectionWrapper>

        {/* ─── NAMED RUNS (light) ─── */}
        <SectionWrapper variant="light" id="runs">
          <ScrollReveal animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-navy mb-4">
                The Runs
              </h2>
              <p className="font-body text-warm-gray text-lg max-w-2xl mx-auto mb-4">
                22 named trails across 280 acres of north-facing terrain. Something for every
                skill level -- and a few things for no skill level at all.
              </p>
              <WavyDivider />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
            {/* Greens */}
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="relative">
                <h3 className="font-condensed text-lg tracking-widest text-pine uppercase mb-4 flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-pine" />
                  Beginner
                </h3>
                <div className="border-l-2 border-pine/30 pl-4">
                  <TrailRow
                    difficulty="green"
                    name="FIRST TRACKS"
                    description="Wide, groomed, gentle slope off Doane Valley Chair. The perfect first run."
                  />
                  <TrailRow
                    difficulty="green"
                    name="DOANE'S CRUISE"
                    description="Long, winding cruiser through cedar forest. Great for building confidence."
                  />
                  <TrailRow
                    difficulty="green"
                    name="STARDUST FLATS"
                    description="Mellow terrain off Stardust Express. Easy run-out to the base lodge."
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Blues */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="relative">
                <h3 className="font-condensed text-lg tracking-widest text-frost uppercase mb-4 flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-frost" />
                  Intermediate
                </h3>
                <div className="border-l-2 border-frost/30 pl-4">
                  <TrailRow
                    difficulty="blue"
                    name="THE RIDGELINE"
                    description="Panoramic ridge trail with views to the Pacific on clear days."
                  />
                  <TrailRow
                    difficulty="blue"
                    name="PINE LINE"
                    description="Fast, flowing run through old-growth ponderosa. Narrower than it looks."
                  />
                  <TrailRow
                    difficulty="blue"
                    name="PAUMA DROP"
                    description="Rolling terrain with a few steeper pitches. Named for the Pauma Valley below."
                  />
                  <TrailRow
                    difficulty="blue"
                    name="CEDAR ALLEY"
                    description="Tree-lined corridor with natural rollers. A local favorite."
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Blacks */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative">
                <h3 className="font-condensed text-lg tracking-widest text-navy uppercase mb-4 flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-navy rotate-45" />
                  Advanced
                </h3>
                <div className="border-l-2 border-navy/30 pl-4">
                  <TrailRow
                    difficulty="black"
                    name="THE OBSERVATORY TURN"
                    description="Steep, narrow chute with a hard left bend. Commitment required."
                  />
                  <TrailRow
                    difficulty="black"
                    name="BIRCH HILL FACE"
                    description="Wide-open face with moguls that form naturally. Bring your legs."
                  />
                  <TrailRow
                    difficulty="black"
                    name="NEON CHUTE"
                    description="Tight, rocky couloir on the eastern edge. Not for the faint of heart."
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Double Blacks */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="relative">
                <h3 className="font-condensed text-lg tracking-widest text-navy uppercase mb-4 flex items-center gap-2">
                  <span className="flex gap-0.5">
                    <span className="inline-block w-3 h-3 bg-navy rotate-45" />
                    <span className="inline-block w-3 h-3 bg-navy rotate-45" />
                  </span>
                  Expert Only
                </h3>
                <div className="border-l-2 border-burnt-orange/50 pl-4 relative">
                  <TrailRow
                    difficulty="double-black"
                    name="MIRAGE WALL"
                    description="Near-vertical face below the summit. If you can see it, you're already in trouble."
                  />
                  <TrailRow
                    difficulty="double-black"
                    name="STARFALL"
                    description="Exposed cliff-side line with mandatory air. Named for the meteor showers visible from the summit."
                  />
                </div>
                {/* Handwritten annotation */}
                <p className="font-handwritten text-burnt-orange text-base mt-4 -rotate-3 ml-8">
                  you were warned
                </p>
              </div>
            </ScrollReveal>
          </div>
        </SectionWrapper>

        {/* ─── SNOWMAKING (dark) ─── */}
        <SectionWrapper variant="dark" id="snowmaking">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-in">
              <div className="text-center mb-12">
                <p className="font-handwritten text-gold text-lg md:text-xl mb-3 rotate-1">
                  let&apos;s talk about the elephant in the room
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
                  Snowmaking &amp; Conditions
                </h2>
                <WavyDivider color="#E8A838" />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div className="border-2 border-cream/20 p-8 md:p-12 shadow-[6px_6px_0px_rgba(212,168,75,0.2)]">

                <p className="font-body text-cream/80 text-lg leading-relaxed mb-6">
                  Yes, this is San Diego County. Yes, it snows here. Palomar Mountain sits at
                  6,100 feet on a north-facing aspect, which means colder temps, longer
                  freeze windows, and more natural snowfall than you&apos;d expect -- roughly
                  30+ inches in a typical season.
                </p>
                <p className="font-body text-cream/80 text-lg leading-relaxed mb-6">
                  But we&apos;re not delusional. That&apos;s why we&apos;ve invested in{" "}
                  <span className="text-gold font-semibold">180 energy-efficient snow guns</span>{" "}
                  covering 60% of skiable terrain. When temperatures cooperate (and at 6,100
                  feet, they cooperate more than you think), we can lay down a full base coat
                  across primary runs in{" "}
                  <span className="text-gold font-semibold">under 48 hours</span>.
                </p>
                <p className="font-body text-cream/80 text-lg leading-relaxed">
                  The combination of natural snowfall, aggressive snowmaking, and
                  north-facing preservation means a reliable season from November through
                  April. Not Mammoth. Not Big Bear. Something entirely its own -- and a lot
                  closer to the beach.
                </p>
              </div>
            </ScrollReveal>

            {/* Snowmaking stats row */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <ScrollReveal animation="scale-in" delay={200}>
                <div className="flex justify-center">
                  <Badge rotate={-4} size="md" variant="gold">
                    <span>
                      <span className="text-base font-display">180</span>
                      <br />
                      SNOW
                      <br />
                      GUNS
                    </span>
                  </Badge>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="scale-in" delay={300}>
                <div className="flex justify-center">
                  <Badge rotate={3} size="md" variant="cream">
                    <span>
                      <span className="text-base font-display">60%</span>
                      <br />
                      TERRAIN
                      <br />
                      COVERAGE
                    </span>
                  </Badge>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="scale-in" delay={400}>
                <div className="flex justify-center">
                  <Badge rotate={-2} size="md" variant="gold">
                    <span>
                      <span className="text-base font-display">48</span>
                      <br />
                      HOUR
                      <br />
                      BASE COAT
                    </span>
                  </Badge>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </SectionWrapper>

        {/* ─── CONDITIONS PLACEHOLDER (light) ─── */}
        <SectionWrapper variant="light" id="conditions">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal animation="fade-in">
              <Badge rotate={-5} size="lg" variant="navy" className="mx-auto mb-8">
                <span>
                  LIVE
                  <br />
                  CONDITIONS
                  <br />
                  COMING
                  <br />
                  SOON
                </span>
              </Badge>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="font-display text-4xl md:text-5xl text-navy mb-6">
                Powder Forecast
              </h2>
              <p className="font-handwritten text-burnt-orange text-3xl md:text-4xl -rotate-2 mb-8">
                Optimistic.
              </p>
              <WavyDivider />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="font-body text-warm-gray text-lg mt-8 mb-10 max-w-xl mx-auto">
                Real-time snow reports, webcams, lift status, and grooming updates will go
                live before the inaugural 2026/27 season. For now, assume the vibes are
                immaculate.
              </p>
              <Button variant="primary" href="/founding-members">
                Get Notified -- Join Founding Members
              </Button>
            </ScrollReveal>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
