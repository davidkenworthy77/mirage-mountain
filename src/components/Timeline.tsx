"use client";

import { SectionWrapper } from "./SectionWrapper";
import { ScrollReveal } from "./ScrollReveal";
import { UpdatesCarousel } from "./UpdatesCarousel";

const milestones = [
  { date: "OCT", year: "2024", label: "Announced" },
  { date: "MAR", year: "2025", label: "Approved" },
  { date: "JUL", year: "2025", label: "Broke Ground" },
  { date: "NOW", year: "", label: "Lifts Going Up", active: true },
  { date: "DEC", year: "2026", label: "Opening Day" },
];

export function Timeline() {
  return (
    <SectionWrapper variant="dark" id="timeline">
      <ScrollReveal>
        <p className="font-condensed text-sm text-gold tracking-[0.2em] text-center mb-4">
          Our Timeline
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream text-center mb-4 italic">
          Sun-Kissed Slopes Since... Recently.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="font-handwritten text-gold text-center text-lg mb-16 rotate-[-1deg]">
          Rome wasn&apos;t built in a day. Neither was this. But we&apos;re faster than Rome.
        </p>
      </ScrollReveal>

      {/* Desktop horizontal timeline */}
      <div className="hidden md:block relative max-w-5xl mx-auto">
        {/* Timeline line */}
        <div className="absolute top-[52px] left-0 right-0 h-[2px] bg-cream/20" />

        <div className="grid grid-cols-5 gap-4">
          {milestones.map((m, i) => (
            <ScrollReveal key={m.date} delay={300 + i * 150} animation="fade-up">
              <div className="flex flex-col items-center text-center">
                {/* Badge circle */}
                <div
                  className={`w-[104px] h-[104px] rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-300 ${
                    m.active
                      ? "border-gold bg-gold shadow-[0_0_20px_rgba(232,168,56,0.3)]"
                      : "border-frost bg-frost hover:border-frost"
                  }`}
                  style={{
                    transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)`,
                  }}
                >
                  <div className="text-center">
                    <span className={`font-condensed font-bold block leading-none tracking-wider ${
                      m.active ? "text-navy text-2xl" : "text-cream text-2xl"
                    }`}>
                      {m.date}
                    </span>
                    {m.year && (
                      <span className={`font-condensed text-xs tracking-wider ${
                        m.active ? "text-navy/70" : "text-cream/70"
                      }`}>
                        {m.year}
                      </span>
                    )}
                  </div>
                </div>

                {/* Connector dot */}
                <div
                  className={`w-3 h-3 rounded-full mb-3 ${
                    m.active ? "bg-gold" : "bg-cream/40"
                  }`}
                />

                {/* Label */}
                <span
                  className={`font-condensed text-sm tracking-wider ${
                    m.active ? "text-gold" : "text-cream/70"
                  }`}
                >
                  {m.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <div className="md:hidden relative max-w-sm mx-auto">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-[52px] w-[2px] bg-cream/20" />

        <div className="space-y-8">
          {milestones.map((m, i) => (
            <ScrollReveal key={m.date} delay={200 + i * 100} animation="slide-left">
              <div className="flex items-center gap-6">
                <div
                  className={`w-[104px] h-[104px] rounded-full border-2 flex items-center justify-center shrink-0 ${
                    m.active
                      ? "border-gold bg-gold"
                      : "border-frost/60 bg-frost/20"
                  }`}
                  style={{ transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)` }}
                >
                  <div className="text-center">
                    <span className={`font-condensed font-bold block leading-none tracking-wider ${
                      m.active ? "text-gold text-xl" : "text-cream text-xl"
                    }`}>
                      {m.date}
                    </span>
                    {m.year && (
                      <span className={`font-condensed text-[10px] tracking-wider ${
                        m.active ? "text-navy/70" : "text-cream/70"
                      }`}>
                        {m.year}
                      </span>
                    )}
                  </div>
                </div>
                <span
                  className={`font-condensed text-base tracking-wider ${
                    m.active ? "text-gold" : "text-cream/70"
                  }`}
                >
                  {m.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Updates carousel */}
      <ScrollReveal delay={200} animation="fade-up">
        <UpdatesCarousel />
      </ScrollReveal>
    </SectionWrapper>
  );
}
