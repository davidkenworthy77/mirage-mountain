import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/Badge";
import { WavyDivider } from "@/components/WavyDivider";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { JsonLd, organizationSchema, aboutPageSchema, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About | Mirage Mountain Resort",
  description:
    "The story behind Mirage Mountain Resort: how Jake Caldwell and Tias Capital are building Southern California's first ski resort on Palomar Mountain.",
};

const teamMembers = [
  {
    name: "Jake Caldwell",
    title: "Founder & CEO",
    rotate: -2,
    bio: "Former competitive skier, serial entrepreneur, and the kind of person who hears \"that's impossible\" and books a site survey. Jake grew up skiing Mammoth and always wondered why Southern California didn't have its own mountain. After a decade in outdoor hospitality startups, he drove up Palomar Mountain on a whim, stood at 6,100 feet looking out at the Pacific, and called his investors before he got back to the car. He hasn't stopped talking about it since.",
  },
  {
    name: "Maria Reyes",
    title: "Director of Mountain Operations",
    rotate: 3,
    bio: "Maria spent 15 years managing operations at Telluride and Deer Valley before deciding she was tired of real winters. She's overseen the installation of Mirage Mountain Resort's snowmaking infrastructure, trail design, and lift systems. Her specialty is making a mountain feel bigger than it is. \"280 skiable acres is plenty,\" she says, \"if you design them right.\" She's also the reason the lodge serves green chile.",
  },
  {
    name: "Danny Yoon",
    title: "Head of Marketing & Vibes",
    rotate: -3,
    bio: "Danny ran social for three DTC brands you've definitely seen on Instagram before joining Mirage Mountain Resort. He's responsible for the brand voice, the retro poster aesthetic, and the Onesie Rule. He firmly believes that ski culture has gotten too serious and that a resort 90 minutes from the beach is exactly the corrective the industry needs. His business card says \"Head of Marketing & Vibes\" and he is not kidding.",
  },
  {
    name: "Dr. Sarah Chen",
    title: "Observatory Liaison",
    rotate: 2,
    bio: "Dr. Chen is an astrophysicist who has worked at Palomar Observatory for over a decade. She serves as Mirage Mountain Resort's liaison with the observatory and Caltech, ensuring the resort's operations respect the mountain's scientific heritage. She's also designing the stargazing programs for Phase 2, because she believes everyone deserves to see Saturn's rings in person. She is correct.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={aboutPageSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://miragemountainresort.com" },
        { name: "About", url: "https://miragemountainresort.com/about" },
      ])} />
      <Navigation />
      <main>
        <PageHero
          headline="The Mountain That Shouldn't Exist."
          highlightedWord="Shouldn't"
          backgroundImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
          badgeText={"EST. 2026\nPALOMAR MTN"}
        />

        {/* The Story */}
        <SectionWrapper variant="light" id="story">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl mx-auto">
              <p className="font-condensed text-burnt-orange tracking-[0.3em] text-xs mb-4 text-center">
                THE STORY
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-navy text-center mb-8">
                How We Got Here
              </h2>
              <WavyDivider color="#C17828" className="mb-10" />

              <div className="space-y-6 text-warm-gray leading-relaxed text-base md:text-lg">
                <p>
                  Palomar Mountain has been here for millions of years. It has hosted
                  one of the most important observatories in the history of astronomy.
                  It gets snow most winters. It sits at 6,100 feet above sea level,
                  90 minutes from the beach, in a county with 3.3 million people and
                  zero ski resorts.
                </p>
                <p>
                  Jake Caldwell noticed this. Or rather, he couldn&apos;t stop noticing
                  it. A former competitive skier turned outdoor hospitality entrepreneur,
                  Jake had spent years building experiences in places people already
                  went. But Palomar Mountain kept nagging at him. The elevation was
                  real. The snowfall was real (30+ inches of natural snow in a good
                  year, with records topping 120 inches). The market was very, very
                  real.
                </p>
                <p>
                  In early 2024, Jake drove up Palomar Mountain for the first time.
                  He stood at the summit, looked west toward the Pacific glinting in
                  the distance, looked east toward the desert, looked at the
                  observatory dome against the sky, and had one of those moments where
                  an idea goes from &ldquo;that would be cool&rdquo; to &ldquo;I am going
                  to do this.&rdquo; He called Tias Capital from the car on the way down.
                </p>
                <p>
                  Tias Capital, the investment firm behind several successful
                  hospitality and outdoor recreation ventures, saw what Jake saw: an
                  underserved market, a mountain with real bones, and a story too good
                  not to tell. They backed the project, and Mirage Mountain Resort was
                  born.
                </p>
                <p>
                  The name came later, over beers. &ldquo;Mirage&rdquo; because the
                  whole thing feels like it shouldn&apos;t be real. A ski resort in San
                  Diego? Next to a world-famous observatory? With palm trees in the
                  parking lot? It sounds like a mirage. But the snow is real. The
                  mountain is real. And on December 18, 2026, the lifts start turning.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        {/* The Team */}
        <SectionWrapper variant="dark" id="team">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-14">
              <p className="font-condensed text-gold tracking-[0.3em] text-xs mb-4">
                THE TEAM
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-cream mb-4">
                The People Making It Happen
              </h2>
              <p className="text-cream/60 max-w-xl mx-auto">
                A small team with big plans and a healthy disregard for conventional wisdom.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <ScrollReveal
                key={member.name}
                animation="fade-up"
                delay={i * 120}
              >
                <div
                  className="bg-cream/5 border border-cream/10 p-8 relative group hover:bg-cream/10 transition-all duration-300 shadow-[4px_4px_0px_rgba(212,168,75,0.15)] hover:shadow-[6px_6px_0px_rgba(212,168,75,0.25)]"
                  style={{ transform: `rotate(${member.rotate}deg)` }}
                >
                  <h3 className="font-display text-xl text-cream mb-1">
                    {member.name}
                  </h3>
                  <p className="font-condensed text-burnt-orange tracking-[0.15em] text-xs mb-4">
                    {member.title}
                  </p>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </SectionWrapper>

        {/* Backed By Tias Capital */}
        <SectionWrapper variant="light" id="backed-by">
          <ScrollReveal animation="fade-up">
            <div className="max-w-2xl mx-auto text-center">
              <p className="font-condensed text-warm-gray/60 tracking-[0.3em] text-xs mb-6">
                BACKED BY
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-navy mb-6">
                Tias Capital
              </h2>
              <WavyDivider color="#C17828" className="mb-8" />
              <p className="text-warm-gray leading-relaxed mb-6">
                Tias Capital is the investment firm behind Mirage Mountain Resort.
                With a portfolio spanning hospitality, outdoor recreation, and
                experiential brands, Tias Capital brings the resources, operational
                expertise, and long-term vision to turn an improbable idea into a
                real, lasting mountain resort.
              </p>
              <a
                href="https://tiascapital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-navy/20 px-8 py-4 hover:border-gold hover:bg-gold/5 transition-all duration-300 group"
              >
                <span className="font-condensed text-xs tracking-[0.15em] text-warm-gray/60 group-hover:text-warm-gray">
                  LEARN MORE AT
                </span>
                <span className="font-condensed text-sm font-semibold tracking-wider text-navy">
                  TIASCAPITAL.COM
                </span>
                <span className="text-burnt-orange group-hover:translate-x-1 transition-transform duration-200">
                  &rarr;
                </span>
              </a>
            </div>
          </ScrollReveal>
        </SectionWrapper>

        {/* Values Manifesto */}
        <SectionWrapper variant="dark" id="values">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <Badge rotate={-5} size="sm" variant="gold" className="mx-auto mb-8">
                OUR VALUES
              </Badge>
              <div className="space-y-4 md:space-y-6">
                {[
                  "We believe skiing should be fun, not a flex.",
                  "We believe a 1,200-foot vertical drop is plenty if the vibes are right.",
                  "We believe in snowmaking, because nature is unpredictable and we have bills to pay.",
                  "We believe the best ski towns are the ones that don't take themselves too seriously.",
                  "We believe you should be able to surf in the morning and ski in the afternoon.",
                  "We believe observatories and ski resorts are natural neighbors.",
                  "We believe in hot chocolate, cold beer, and vintage one-piece ski suits.",
                  "We believe Mirage Mountain Resort is the mountain Southern California didn't know it needed.",
                ].map((value) => (
                  <p
                    key={value}
                    className="font-display text-xl md:text-2xl lg:text-3xl text-cream/90 leading-snug"
                  >
                    {value}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
