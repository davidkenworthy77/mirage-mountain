import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/Badge";
import { WavyDivider } from "@/components/WavyDivider";
import { Button } from "@/components/Button";
import { JsonLd, sportsActivitySchema, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Experiences | Mirage Mountain Resort -- Palomar Mountain, CA",
  description:
    "Ski by day, stargaze by night, and grab a chili burger somewhere in between. Discover everything Mirage Mountain Resort has to offer on Palomar Mountain.",
};

/* ──────────────────────── Star SVG decorations ──────────────────────── */

function StarField({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Large 4-point stars */}
      <svg className="absolute top-[8%] left-[12%] w-4 h-4 text-gold/40 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
      </svg>
      <svg className="absolute top-[15%] right-[18%] w-3 h-3 text-cream/30" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: "1.2s" }}>
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
      </svg>
      <svg className="absolute top-[35%] left-[5%] w-2 h-2 text-gold/25 animate-pulse" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: "0.6s" }}>
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
      </svg>
      <svg className="absolute top-[22%] left-[45%] w-2.5 h-2.5 text-cream/20 animate-pulse" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: "2s" }}>
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
      </svg>
      <svg className="absolute top-[50%] right-[8%] w-3 h-3 text-gold/30 animate-pulse" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: "0.8s" }}>
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
      </svg>
      <svg className="absolute top-[65%] left-[22%] w-1.5 h-1.5 text-cream/25 animate-pulse" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: "1.5s" }}>
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
      </svg>
      <svg className="absolute top-[72%] right-[30%] w-2 h-2 text-gold/20 animate-pulse" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: "2.5s" }}>
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
      </svg>
      <svg className="absolute top-[85%] left-[60%] w-3.5 h-3.5 text-cream/15 animate-pulse" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: "0.3s" }}>
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
      </svg>
      {/* Tiny dot stars */}
      <div className="absolute top-[10%] left-[35%] w-1 h-1 bg-cream/20 rounded-full" />
      <div className="absolute top-[28%] right-[40%] w-1 h-1 bg-gold/30 rounded-full" />
      <div className="absolute top-[42%] left-[70%] w-1 h-1 bg-cream/15 rounded-full" />
      <div className="absolute top-[58%] left-[15%] w-1 h-1 bg-gold/20 rounded-full" />
      <div className="absolute top-[75%] right-[55%] w-1 h-1 bg-cream/25 rounded-full" />
      <div className="absolute top-[90%] left-[40%] w-1 h-1 bg-gold/15 rounded-full" />
      <div className="absolute top-[18%] right-[12%] w-0.5 h-0.5 bg-cream/30 rounded-full" />
      <div className="absolute top-[55%] left-[50%] w-0.5 h-0.5 bg-cream/20 rounded-full" />
    </div>
  );
}

/* ──────────────────────── Snowflake decoration ──────────────────────── */

function SnowflakeDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg className="absolute top-[5%] right-[10%] w-8 h-8 text-light-gray/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="5" y1="5" x2="19" y2="19" />
        <line x1="19" y1="5" x2="5" y2="19" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
      <svg className="absolute top-[40%] left-[3%] w-6 h-6 text-light-gray/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="5" y1="5" x2="19" y2="19" />
        <line x1="19" y1="5" x2="5" y2="19" />
      </svg>
      <svg className="absolute bottom-[15%] right-[6%] w-5 h-5 text-light-gray/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="5" y1="5" x2="19" y2="19" />
        <line x1="19" y1="5" x2="5" y2="19" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    </div>
  );
}

/* ──────────────────────── Page ──────────────────────── */

export default function ExperiencesPage() {
  return (
    <>
      <JsonLd data={sportsActivitySchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://miragemountainresort.com" },
        { name: "Experiences", url: "https://miragemountainresort.com/experiences" },
      ])} />
      <Navigation />
      <main>
        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <PageHero
          headline="Ski by Day. Stargaze by Night. Lodge Bar Somewhere in Between."
          highlightedWord="Stargaze"
          backgroundImage="https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1920&q=80"
          badgeText={"EST.\n2026"}
        />

        {/* ═══════════════════════ SKIING & RIDING ═══════════════════════ */}
        <SectionWrapper variant="light" id="skiing">
          <SnowflakeDecor />

          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-condensed text-burnt-orange tracking-[0.2em] text-sm mb-4">
                Winter Operations
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
                Skiing & <span className="text-burnt-orange italic">Riding</span>
              </h2>
              <WavyDivider color="#D4652A" className="mb-8" />
              <p className="font-body text-lg md:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
                Twenty-two runs. 280 skiable acres. 1,200 feet of vertical drop. And zero traffic on the 405.
                Mirage Mountain is proof that Southern California can have real skiing -- the kind where you
                actually need a jacket.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            {/* Ski School */}
            <ScrollReveal animation="slide-left" delay={100}>
              <div className="relative">
                <div className="absolute -top-6 -right-4 md:-right-8 z-10">
                  <Badge rotate={6} size="sm" variant="gold">
                    Lessons<br />Daily
                  </Badge>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-sm p-8 border border-light-gray/40">
                  <h3 className="font-display text-2xl md:text-3xl text-navy mb-4">
                    The Ski & Ride School
                  </h3>
                  <p className="font-body text-warm-gray leading-relaxed mb-4">
                    The Mirage Mountain Ski & Ride School. Where we turn skeptics into believers,
                    one pizza wedge at a time. Whether you&apos;ve never touched snow or you just want to
                    stop embarrassing yourself on the blues, our instructors will get you there.
                  </p>
                  <p className="font-body text-warm-gray leading-relaxed mb-6">
                    Group lessons, private sessions, and a dedicated learning area where the only
                    audience is other people who are also falling down. No judgment. Just progress.
                  </p>
                  <span className="font-handwritten text-burnt-orange text-lg -rotate-2 inline-block">
                    &ldquo;You WILL learn to ski here.&rdquo;
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Rentals & Gear */}
            <ScrollReveal animation="slide-right" delay={200}>
              <div className="relative">
                <div className="bg-white/60 backdrop-blur-sm rounded-sm p-8 border border-light-gray/40">
                  <h3 className="font-display text-2xl md:text-3xl text-navy mb-4">
                    Rentals & Gear
                  </h3>
                  <p className="font-body text-warm-gray leading-relaxed mb-4">
                    Full rental shop at the base lodge. Skis, boards, boots, poles, helmets -- everything
                    you need except the courage for the black diamonds. That&apos;s on you.
                  </p>
                  <p className="font-body text-warm-gray leading-relaxed mb-6">
                    Season-long rental packages for Founding Members. Demo days throughout the season
                    so you can try before you buy. We stock the good stuff -- no garage sale skis from 2004.
                  </p>
                  <div className="mt-4 p-4 bg-gold/10 border border-gold/30 rounded-sm">
                    <p className="font-condensed text-navy text-sm tracking-wider mb-1">
                      The Onesie Rule
                    </p>
                    <p className="font-body text-warm-gray text-sm leading-relaxed">
                      Show up to the rental shop in a onesie and get a free hot chocolate.
                      We&apos;re not kidding. Dinosaurs, astronauts, flamingos -- bring it.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="text-center">
              <Button href="/the-mountain" variant="primary" size="lg">
                Explore the Mountain
              </Button>
              <p className="font-handwritten text-pine text-base mt-4 rotate-1 inline-block">
                ^ trail map, stats, the whole deal
              </p>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        {/* ═══════════════════════ STARGAZING & OBSERVATORY ═══════════════════════ */}
        <SectionWrapper variant="dark" id="stargazing" className="relative">
          {/* Starry background treatment */}
          <StarField />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/20 to-transparent pointer-events-none" />

          <ScrollReveal>
            <div className="text-center mb-16 relative z-10">
              <p className="font-condensed text-gold tracking-[0.2em] text-sm mb-4">
                After Dark
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
                Stargazing & <span className="text-gold italic">The Observatory</span>
              </h2>
              <WavyDivider color="#E8A838" className="mb-8" />
            </div>
          </ScrollReveal>

          <div className="relative z-10 max-w-4xl mx-auto mb-16">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="relative">
                <div className="absolute -top-8 -left-4 md:-left-10">
                  <Badge rotate={-8} size="lg" variant="gold">
                    Since<br />1948
                  </Badge>
                </div>
                <blockquote className="text-center py-8 px-6 md:px-16">
                  <p className="font-display text-2xl md:text-3xl lg:text-4xl text-cream/90 italic leading-snug mb-6">
                    &ldquo;Palomar Observatory has been home to the 200-inch Hale Telescope since 1948.
                    For decades, it was the largest telescope on Earth. It&apos;s still one of the most
                    important. And it&apos;s right up the road.&rdquo;
                  </p>
                  <WavyDivider color="#E8A838" className="mb-6 max-w-xs" />
                </blockquote>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 relative z-10 mb-16">
            <ScrollReveal animation="slide-left" delay={200}>
              <div className="border border-gold/20 rounded-sm p-8 bg-navy-light/30 backdrop-blur-sm">
                <h3 className="font-display text-2xl md:text-3xl text-cream mb-4">
                  Visit the Observatory
                </h3>
                <p className="font-body text-cream/80 leading-relaxed mb-4">
                  Palomar Observatory is open to the public year-round. The museum and gift shop
                  offer a window into some of the most important astronomical discoveries of the
                  20th century. Step inside and look up at the Hale Telescope -- even if you know
                  nothing about astronomy, the sheer scale of it will stop you in your tracks.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-gold font-condensed text-sm whitespace-nowrap mt-0.5">HOURS</span>
                    <p className="font-body text-cream/70 text-sm">
                      Open daily 9:00 AM - 3:00 PM (winter) / 9:00 AM - 4:00 PM (summer).
                      Closed December 24-25.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold font-condensed text-sm whitespace-nowrap mt-0.5">TOURS</span>
                    <p className="font-body text-cream/70 text-sm">
                      Guided tours available on weekends, April through October.
                      Docent-led inside the dome itself.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold font-condensed text-sm whitespace-nowrap mt-0.5">COST</span>
                    <p className="font-body text-cream/70 text-sm">
                      Free admission. Donations encouraged.
                    </p>
                  </div>
                </div>
                <span className="font-handwritten text-gold text-base -rotate-1 inline-block">
                  A real telescope. Not a planetarium app.
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" delay={300}>
              <div className="border border-gold/20 rounded-sm p-8 bg-navy-light/30 backdrop-blur-sm">
                <div className="relative">
                  <div className="absolute -top-12 -right-4 md:-right-8">
                    <Badge rotate={5} size="sm" variant="cream">
                      Phase 2<br />Exclusive
                    </Badge>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-cream mb-4">
                    Resort Stargazing Program
                  </h3>
                  <p className="font-body text-cream/80 leading-relaxed mb-4">
                    Phase 2 brings dedicated stargazing experiences to Mirage Mountain. Guided night
                    sky sessions with professional astronomers. High-powered telescopes on the observation
                    deck. Dark sky programming that takes full advantage of Palomar Mountain&apos;s
                    protected night skies.
                  </p>
                  <p className="font-body text-cream/80 leading-relaxed mb-6">
                    Palomar Mountain sits inside one of the few remaining dark sky corridors in
                    Southern California. Up here, you can actually see the Milky Way. Like, with
                    your eyes. No filter.
                  </p>
                  <span className="font-handwritten text-gold text-base rotate-1 inline-block">
                    Jupiter&apos;s moons. Saturn&apos;s rings. Your jaw on the floor.
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="border-t border-b border-gold/20 py-8 px-6">
                <p className="font-display text-xl md:text-2xl text-cream/90 italic leading-relaxed">
                  How many resorts let you ski 1,200 vertical feet, eat chili, and then look at
                  Jupiter&apos;s moons? We can think of exactly one.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        {/* ═══════════════════════ THE LODGE ═══════════════════════ */}
        <SectionWrapper variant="light" id="the-lodge">
          {/* Warm gradient overlay for coziness */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(232,168,56,0.03) 0%, rgba(212,101,42,0.04) 50%, rgba(232,168,56,0.02) 100%)",
            }}
            aria-hidden="true"
          />

          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-condensed text-burnt-orange tracking-[0.2em] text-sm mb-4">
                Base Lodge
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
                The <span className="text-burnt-orange italic">Warming Hut</span>
              </h2>
              <WavyDivider color="#D4652A" className="mb-8" />
              <p className="font-body text-lg md:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
                Every ski day deserves a place to thaw out, refuel, and tell exaggerated stories about
                that one run. The Warming Hut is that place.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start mb-16">
            {/* Main description - 3 cols */}
            <ScrollReveal animation="slide-left" delay={100} className="md:col-span-3">
              <div className="relative">
                <div className="absolute -top-8 right-4 md:right-8 z-10">
                  <Badge rotate={-5} size="md" variant="navy">
                    Aprés<br />Ski<br />HQ
                  </Badge>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-sm p-8 md:p-10 border border-light-gray/40">
                  <h3 className="font-display text-2xl md:text-3xl text-navy mb-4">
                    14-Foot Stone Fireplace. Enough Said.
                  </h3>
                  <p className="font-body text-warm-gray leading-relaxed mb-4">
                    The Warming Hut is built around a 14-foot stone fireplace that you can see from
                    the parking lot. In the morning, it&apos;s coffee and breakfast burritos. By lunch, it&apos;s
                    packed with skiers arguing about who had the better line. By 3 PM, it&apos;s Irish
                    coffees and nachos and nobody wants to leave.
                  </p>
                  <p className="font-body text-warm-gray leading-relaxed mb-6">
                    Big communal tables. Views of the mountain through floor-to-ceiling windows.
                    A bar that serves local craft beers and a suspiciously good margarita.
                    This is the room where ski stories become legends.
                  </p>
                  <span className="font-handwritten text-burnt-orange text-lg -rotate-2 inline-block">
                    &ldquo;The fire is always going.&rdquo;
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Menu card - 2 cols */}
            <ScrollReveal animation="slide-right" delay={200} className="md:col-span-2">
              <div className="bg-navy rounded-sm p-8 text-cream">
                <h3 className="font-condensed text-lg tracking-[0.15em] text-gold mb-6 text-center border-b border-gold/30 pb-4">
                  The Menu
                </h3>
                <ul className="space-y-4 mb-8">
                  {[
                    { item: "The Mirage Chili", note: "Award-pending. Bean debate ongoing." },
                    { item: "Smash Burgers", note: "Two patties. American cheese. No apologies." },
                    { item: "Loaded Nachos", note: "Shareable in theory. Rarely in practice." },
                    { item: "Fish Tacos", note: "Because it's still San Diego County." },
                    { item: "Irish Coffee", note: "Tullamore Dew. Fresh whipped cream. Dangerous." },
                  ].map((menuItem) => (
                    <li key={menuItem.item} className="border-b border-cream/10 pb-3 last:border-0">
                      <p className="font-display text-lg text-cream">{menuItem.item}</p>
                      <p className="font-body text-cream/50 text-sm italic">{menuItem.note}</p>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <span className="font-handwritten text-gold text-sm rotate-2 inline-block">
                    + local craft beer on tap
                  </span>
                </div>
              </div>

              {/* Onesie Rule callout */}
              <div className="mt-6 relative">
                <div className="bg-burnt-orange/10 border-2 border-dashed border-burnt-orange/40 rounded-sm p-6 text-center">
                  <p className="font-condensed text-burnt-orange text-lg tracking-wider mb-2">
                    The Onesie Rule
                  </p>
                  <p className="font-body text-warm-gray leading-relaxed text-sm mb-3">
                    Wear a onesie -- any onesie -- to the lodge and your hot chocolate is on us.
                    Animal, superhero, holiday-themed, we don&apos;t care. Bonus points for creativity.
                    Extra bonus points if you actually skied in it.
                  </p>
                  <p className="font-handwritten text-burnt-orange text-base -rotate-1 inline-block">
                    Yes, this is a real policy.
                  </p>
                </div>
                <div className="absolute -bottom-4 -right-3">
                  <Badge rotate={8} size="sm" variant="gold">
                    Free<br />Hot<br />Cocoa
                  </Badge>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </SectionWrapper>

        {/* ═══════════════════════ SUMMER OPERATIONS ═══════════════════════ */}
        <SectionWrapper variant="dark" id="summer">
          <ScrollReveal>
            <div className="text-center mb-6">
              <p className="font-condensed text-gold tracking-[0.2em] text-sm mb-4">
                May Through October
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
                Summer <span className="text-gold italic">Operations</span>
              </h2>
              <WavyDivider color="#E8A838" className="mb-8" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="font-display text-2xl md:text-3xl text-cream/90 italic leading-relaxed mb-4">
                &ldquo;The mountain doesn&apos;t close. It just changes clothes.&rdquo;
              </p>
              <p className="font-body text-cream/70 leading-relaxed">
                When the snow melts, Palomar Mountain turns into one of Southern California&apos;s
                best-kept secrets for outdoor adventure. Cool temps, tall pines, and a whole
                mountain that most San Diegans forget exists.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Mountain Biking",
                description:
                  "Lift-served downhill and cross-country trails through old-growth forest. From flow trails to technical singletrack.",
                icon: (
                  <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="5" cy="18" r="3" /><circle cx="19" cy="18" r="3" />
                    <path d="M12 18V6l4 4-4-4-3.5 3.5" />
                  </svg>
                ),
              },
              {
                title: "Hiking Trails",
                description:
                  "Miles of trails through mixed conifer forest. Wildflower meadows in spring. Views that stretch to the ocean on clear days.",
                icon: (
                  <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 4L2 20h20L13 4z" /><path d="M7 20l5-8 3 4 2-2 3 6" />
                  </svg>
                ),
              },
              {
                title: "Scenic Chairlift",
                description:
                  "Ride the lift just for the views. Bring a camera. Bring a picnic. Ride up, walk down. Or ride both ways. We won't judge.",
                icon: (
                  <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l16 4" /><rect x="7" y="10" width="4" height="6" rx="1" /><rect x="13" y="12" width="4" height="6" rx="1" />
                    <line x1="9" y1="10" x2="8" y2="6" /><line x1="15" y1="12" x2="16" y2="6" />
                  </svg>
                ),
              },
              {
                title: "Night Sky Programs",
                description:
                  "Summer stargazing sessions on the deck. Guided constellation tours. Telescope viewing nights. Dark skies year-round.",
                icon: (
                  <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L14 8.5L21 9L15.5 13.5L17 20L12 16.5L7 20L8.5 13.5L3 9L10 8.5Z" />
                  </svg>
                ),
              },
              {
                title: "Live Music & Events",
                description:
                  "Outdoor concerts on the base lodge deck. Local bands, food trucks, craft beer. Summer Saturday sessions all season long.",
                icon: (
                  <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
                  </svg>
                ),
              },
              {
                title: "The Lodge (Year-Round)",
                description:
                  "The Warming Hut stays open. Summer menu. Cold beer. Same fireplace. Different stories.",
                icon: (
                  <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12l9-9 9 9" /><path d="M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    <path d="M9 21v-6h6v6" />
                  </svg>
                ),
              },
            ].map((activity, i) => (
              <ScrollReveal key={activity.title} animation="fade-up" delay={i * 100}>
                <div className="border border-cream/10 rounded-sm p-6 hover:border-gold/30 transition-colors duration-300 h-full bg-navy-light/20">
                  <div className="mb-4">{activity.icon}</div>
                  <h3 className="font-display text-xl text-cream mb-3">{activity.title}</h3>
                  <p className="font-body text-cream/60 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Phase 3 Preview */}
          <ScrollReveal delay={400}>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -top-6 left-4 md:left-8 z-10">
                <Badge rotate={-6} size="md" variant="gold">
                  The<br />Dream
                </Badge>
              </div>
              <div className="border border-gold/30 rounded-sm p-8 md:p-10 bg-gradient-to-br from-navy-light/40 to-transparent">
                <h3 className="font-condensed text-lg tracking-[0.15em] text-gold mb-4">
                  Phase 3 Preview
                </h3>
                <p className="font-display text-2xl md:text-3xl text-cream italic leading-snug mb-4">
                  &ldquo;The full four-season mountain.&rdquo;
                </p>
                <p className="font-body text-cream/70 leading-relaxed mb-4">
                  Zip lines through the canopy. A pump track for kids (and adults who act like kids).
                  Mountain coaster. Ropes course. Disc golf through the pines. Wedding venue with
                  views that make photographers weep. The kind of mountain that has something for
                  everyone, every month, no excuses.
                </p>
                <p className="font-body text-cream/70 leading-relaxed mb-6">
                  Phase 3 is the vision fully realized -- a year-round mountain destination
                  that makes people forget they&apos;re an hour from the beach.
                </p>
                <span className="font-handwritten text-gold text-base rotate-1 inline-block">
                  We&apos;re building ALL of this.
                </span>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
