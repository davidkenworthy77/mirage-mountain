"use client";

import { SectionWrapper } from "./SectionWrapper";
import { ScrollReveal } from "./ScrollReveal";
import { EmailSignup } from "./EmailSignup";
import { Badge } from "./Badge";
import { WavyDivider } from "./WavyDivider";

export function FoundingMembers() {
  return (
    <SectionWrapper variant="light" id="founding">
      <div className="max-w-3xl mx-auto text-center relative">
        {/* Floating stamp badge */}
        <ScrollReveal animation="scale-in" className="absolute -top-8 -right-4 md:right-0 lg:-right-20 hidden sm:block">
          <Badge rotate={-6} size="lg" variant="navy">
            <span>
              Founding
              <br />
              Member
              <br />
              <span className="text-[8px] opacity-60">Charter No. ___</span>
            </span>
          </Badge>
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-condensed text-sm text-burnt-orange tracking-[0.2em] mb-4">
            Limited Availability
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-6 italic">
            Be Here From the Beginning.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-warm-gray leading-relaxed mb-3">
            <strong className="text-navy font-display italic">
              The Eternal Snow Founding Member Pass.
            </strong>{" "}
            Unlimited skiing, priority access, your name on the wall. Limited
            to the first 1,000.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <p className="font-display text-4xl md:text-5xl text-navy mb-8">
            $449
            <span className="text-lg text-warm-gray ml-2 font-body">
              for the inaugural season
            </span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={350}>
          <WavyDivider className="mb-8" />
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <EmailSignup className="mb-6" />
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <p className="text-sm text-warm-gray/70 max-w-md mx-auto mb-4">
            No spam. Just snow reports and existential questions about skiing
            in San Diego.
          </p>
          <a href="/passes" className="font-condensed text-xs text-frost hover:text-frost-hover tracking-[0.15em] transition-colors">
            See Full Pass Details &rarr;
          </a>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
