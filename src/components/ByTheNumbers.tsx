"use client";

import { SectionWrapper } from "./SectionWrapper";
import { StatBlock } from "./StatBlock";
import { ScrollReveal } from "./ScrollReveal";

const stats = [
  { value: 6100, suffix: " ft", label: "Summit Elevation" },
  { value: 1200, suffix: " ft", label: "Vertical Drop" },
  { value: 90, suffix: " min", label: "From San Diego" },
  { value: 22, suffix: "", label: "Planned Runs" },
  { value: 1, suffix: "", label: "World-Famous Observatory" },
  { value: 0, suffix: "", label: "Other Resorts With Palm Trees at the Summit" },
];

export function ByTheNumbers() {
  return (
    <SectionWrapper variant="dark">
      <ScrollReveal>
        <p className="font-condensed text-sm text-gold tracking-[0.2em] text-center mb-4">
          By The Numbers
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream text-center mb-16 italic">
          The Stats Don&apos;t Lie.
          <br />
          <span className="font-handwritten text-2xl text-gold not-italic inline-block mt-2 rotate-[-2deg]">
            (okay, the &ldquo;palm trees&rdquo; one is aspirational)
          </span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-8 max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <StatBlock
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            delay={i * 150}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
