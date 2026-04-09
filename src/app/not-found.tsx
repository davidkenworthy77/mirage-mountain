import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-navy flex items-center justify-center px-6 pt-24 pb-16">
        <div className="text-center max-w-2xl mx-auto">
          {/* Confused Skier SVG */}
          <div className="mb-10 flex justify-center">
            <svg
              viewBox="0 0 320 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-64 h-72 md:w-80 md:h-[360px]"
              aria-label="Confused skier illustration"
            >
              {/* Snow ground */}
              <ellipse cx="160" cy="340" rx="140" ry="12" fill="#E8F4F8" opacity="0.3" />

              {/* Skis */}
              <line x1="100" y1="330" x2="180" y2="330" stroke="#C17828" strokeWidth="4" strokeLinecap="round" />
              <line x1="130" y1="335" x2="210" y2="335" stroke="#C17828" strokeWidth="4" strokeLinecap="round" />

              {/* Legs */}
              <line x1="150" y1="265" x2="135" y2="328" stroke="#F5F0E8" strokeWidth="3" strokeLinecap="round" />
              <line x1="160" y1="265" x2="170" y2="330" stroke="#F5F0E8" strokeWidth="3" strokeLinecap="round" />

              {/* Body - vintage onesie */}
              <rect x="138" y="200" width="34" height="70" rx="8" fill="#C17828" />
              {/* Onesie stripe */}
              <line x1="138" y1="230" x2="172" y2="230" stroke="#D4A84B" strokeWidth="2" />

              {/* Arms - shrugging */}
              <line x1="138" y1="215" x2="100" y2="195" stroke="#F5F0E8" strokeWidth="3" strokeLinecap="round" />
              <line x1="172" y1="215" x2="210" y2="195" stroke="#F5F0E8" strokeWidth="3" strokeLinecap="round" />
              {/* Hands up (shrug) */}
              <line x1="100" y1="195" x2="95" y2="180" stroke="#F5F0E8" strokeWidth="3" strokeLinecap="round" />
              <line x1="210" y1="195" x2="215" y2="180" stroke="#F5F0E8" strokeWidth="3" strokeLinecap="round" />

              {/* Ski poles */}
              <line x1="93" y1="178" x2="88" y2="330" stroke="#D4CFC8" strokeWidth="2" strokeLinecap="round" />
              <line x1="217" y1="178" x2="222" y2="330" stroke="#D4CFC8" strokeWidth="2" strokeLinecap="round" />
              {/* Pole baskets */}
              <circle cx="88" cy="325" r="5" stroke="#D4CFC8" strokeWidth="1.5" fill="none" />
              <circle cx="222" cy="325" r="5" stroke="#D4CFC8" strokeWidth="1.5" fill="none" />

              {/* Head */}
              <circle cx="155" cy="185" r="22" fill="#F5F0E8" />

              {/* Goggles */}
              <ellipse cx="148" cy="183" rx="9" ry="6" fill="#1B2A4A" stroke="#D4A84B" strokeWidth="1.5" />
              <ellipse cx="164" cy="183" rx="9" ry="6" fill="#1B2A4A" stroke="#D4A84B" strokeWidth="1.5" />
              <line x1="157" y1="183" x2="155" y2="183" stroke="#D4A84B" strokeWidth="1.5" />
              {/* Goggle strap */}
              <path d="M139 183 Q135 175 140 168" stroke="#D4A84B" strokeWidth="1" fill="none" />
              <path d="M173 183 Q177 175 172 168" stroke="#D4A84B" strokeWidth="1" fill="none" />

              {/* Beanie */}
              <path d="M133 178 Q133 158 155 155 Q177 158 177 178" fill="#C17828" />
              <rect x="133" y="175" width="44" height="6" rx="3" fill="#D4A84B" />
              {/* Pom pom */}
              <circle cx="155" cy="152" r="6" fill="#D4A84B" />

              {/* Confused mouth */}
              <path d="M148 194 Q155 190 162 194" stroke="#1B2A4A" strokeWidth="1.5" fill="none" strokeLinecap="round" />

              {/* Question marks */}
              <text x="75" y="160" fill="#D4A84B" fontFamily="serif" fontSize="28" opacity="0.9">?</text>
              <text x="220" y="150" fill="#D4A84B" fontFamily="serif" fontSize="22" opacity="0.7">?</text>
              <text x="240" y="185" fill="#D4A84B" fontFamily="serif" fontSize="32" opacity="0.8">?</text>
              <text x="60" y="130" fill="#D4A84B" fontFamily="serif" fontSize="18" opacity="0.5">?</text>

              {/* Snowflakes */}
              <text x="50" y="100" fill="#E8F4F8" fontSize="12" opacity="0.4">*</text>
              <text x="250" y="120" fill="#E8F4F8" fontSize="10" opacity="0.3">*</text>
              <text x="190" y="80" fill="#E8F4F8" fontSize="14" opacity="0.35">*</text>
              <text x="100" y="70" fill="#E8F4F8" fontSize="8" opacity="0.25">*</text>
            </svg>
          </div>

          {/* 404 Number */}
          <p className="font-condensed text-gold tracking-[0.4em] text-sm mb-4">
            ERROR 404
          </p>

          <h1 className="font-display text-3xl md:text-5xl text-cream leading-tight mb-4">
            This run doesn&apos;t exist.
          </h1>

          <p className="text-cream/50 text-lg mb-2 max-w-md mx-auto">
            Kind of like us, according to most people.
          </p>

          <p className="font-handwritten text-burnt-orange text-xl rotate-[-2deg] mb-10">
            You&apos;ve gone off-piste in the worst way.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button href="/" variant="primary" size="lg">
              Back to Base Lodge
            </Button>
            <Button href="/faq" variant="outline" size="md">
              Check the Trail Map (FAQ)
            </Button>
          </div>

          <div className="border-t border-cream/10 pt-8 max-w-sm mx-auto">
            <p className="text-cream/30 text-xs">
              If you think this page should exist, email{" "}
              <a
                href="mailto:info@miragemountainresort.com"
                className="text-cream/50 hover:text-frost transition-colors"
              >
                info@miragemountainresort.com
              </a>{" "}
              and we&apos;ll look into it. Or not. We&apos;re busy building a ski resort.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
