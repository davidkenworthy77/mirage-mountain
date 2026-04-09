"use client";

import { SectionWrapper } from "./SectionWrapper";
import { ScrollReveal } from "./ScrollReveal";
import { MountainIcon, TelescopeIcon, LodgeIcon } from "./PillarIcons";
import { WavyDivider } from "./WavyDivider";

const pillars = [
  {
    icon: MountainIcon,
    title: "The Mountain",
    description:
      '22 runs across 280 skiable acres. North-facing slopes that hold snow like a secret. Terrain from bunny hill to "why did I do that."',
    aside: "Send it.",
  },
  {
    icon: TelescopeIcon,
    title: "The Observatory",
    description:
      "Palomar Observatory has been mapping the universe since 1948. Now it's your apr\u00e8s-ski plan. Ski all day, contemplate the infinite void of space all night.",
    aside: "Whoa.",
  },
  {
    icon: LodgeIcon,
    title: "The Lodge",
    description:
      "Timber frame. Stone fireplace. Chili that will be on the stove from day one until the heat death of the universe. No velvet ropes. No dress code. Just warmth.",
    aside: "Cozy.",
  },
];

export function ThreePillars() {
  return (
    <SectionWrapper variant="light" id="mountain">
      <ScrollReveal>
        <p className="font-condensed text-sm text-burnt-orange tracking-[0.2em] text-center mb-4">
          What We&apos;re Building
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy text-center mb-6 italic">
          Three Good Reasons to Believe.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <WavyDivider className="mb-16" />
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {pillars.map((pillar, i) => (
          <ScrollReveal key={pillar.title} delay={300 + i * 150} animation="fade-up">
            <div className="bg-powder p-8 lg:p-10 shadow-[5px_5px_0px_rgba(0,0,0,0.1)] hover:shadow-[7px_7px_0px_rgba(0,0,0,0.15)] transition-all duration-500 group hover:-translate-y-1 border border-light-gray/50 relative">
              {/* Icon */}
              <div className="text-navy mb-6">
                <pillar.icon className="w-16 h-16 transition-transform duration-500 group-hover:scale-110" />
              </div>

              {/* Title */}
              <h3 className="font-condensed text-xl text-navy font-semibold mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-warm-gray leading-relaxed text-base mb-4">
                {pillar.description}
              </p>

              {/* Handwritten aside */}
              <p className="font-handwritten text-burnt-orange text-lg rotate-[-2deg] mt-4">
                {pillar.aside}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
