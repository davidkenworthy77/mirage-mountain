"use client";

import { SectionWrapper } from "./SectionWrapper";
import { ScrollReveal } from "./ScrollReveal";
import { WavyDivider } from "./WavyDivider";
import { Button } from "./Button";

export function ElevatorPitch() {
  return (
    <SectionWrapper variant="light">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-condensed text-sm text-burnt-orange tracking-[0.2em] mb-6">
            Welcome to the Impossible
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-8">
            A ski resort where palm trees meet powder.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-lg md:text-xl text-warm-gray leading-relaxed mb-8">
            Mirage Mountain Resort is rising on the north-facing slopes of
            Palomar Mountain, 6,100 feet above San Diego County. Ski by day.
            Stargaze by night. Question everything you thought you knew about
            Southern California.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <WavyDivider className="my-8" />
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <div className="flex justify-center">
            <Button href="/passes" variant="primary" size="lg">
              Buy Your Founders Pass
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
