import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WavyDivider } from "@/components/WavyDivider";
import { Footer } from "@/components/Footer";
import { AccordionGroup } from "@/components/Accordion";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "FAQ | Mirage Mountain Resort",
  description:
    "Frequently asked questions about Mirage Mountain Resort on Palomar Mountain. Snow, passes, terrain, the observatory, getting there, and more.",
};

const generalQuestions = [
  {
    question: "Is Mirage Mountain Resort a real place?",
    answer:
      'Yes. <span class="font-handwritten text-burnt-orange">(technically)</span> Mirage Mountain Resort is a real ski resort currently under construction on Palomar Mountain in San Diego County, California. We understand the skepticism. A ski resort in San Diego sounds like a punchline. But Palomar Mountain sits at 6,100 feet, gets real snow, and Mirage Mountain Resort is really, truly happening.',
  },
  {
    question: "Where is Mirage Mountain Resort located?",
    answer:
      "Mirage Mountain Resort is located on Palomar Mountain in San Diego County, California. The summit sits at 6,100 feet above sea level, approximately 90 minutes northeast of downtown San Diego. Yes, San Diego. The one with the beaches.",
  },
  {
    question: "When does Mirage Mountain Resort open?",
    answer:
      "Mirage Mountain Resort opens to the general public on December 18, 2026. Founding Members with the Eternal Snow Pass get exclusive early access during the First Tracks event on December 16\u201317, 2026. Mark your calendars. Tell your friends. Tell your enemies.",
  },
  {
    question: "Who is behind Mirage Mountain Resort?",
    answer:
      'Mirage Mountain Resort was founded by Jake Caldwell, a former competitive skier and outdoor hospitality entrepreneur. The project is backed by <a href="https://tiascapital.com" target="_blank" rel="noopener noreferrer">Tias Capital</a>, an investment firm with a portfolio spanning hospitality, outdoor recreation, and experiential brands.',
  },
  {
    question: "Is this a joke?",
    answer:
      "Yes and no. Mirage Mountain Resort is a real resort with real lifts, real snowmaking, and a real opening date. The comedy is intentional. We believe skiing should be fun, and that includes the way we talk about it. The mountain is serious. The vibes are not.",
  },
  {
    question: "Why the name \"Mirage\"?",
    answer:
      "Because Mirage Mountain Resort sounds like it shouldn\u2019t exist. A ski resort in San Diego, next to a world-famous observatory, with palm trees in the parking lot? It sounds like a mirage. But the snow is real. The mountain is real. And the name stuck over beers.",
  },
];

const snowQuestions = [
  {
    question: "Does it actually snow on Palomar Mountain?",
    answer:
      "Yes. Palomar Mountain receives an average of 30+ inches of natural snowfall per year, with the record topping 120 inches. Mirage Mountain Resort supplements natural snow with a state-of-the-art snowmaking system. When natural snow falls, we call it Stardust Powder, because we\u2019re like that.",
  },
  {
    question: "What about snowmaking at Mirage Mountain Resort?",
    answer:
      "Mirage Mountain Resort is equipped with 180 snow guns covering approximately 60% of skiable terrain. Our snowmaking system can operate whenever temperatures drop below 28\u00b0F, which happens more often at 6,100 feet than most people expect. The system ensures consistent coverage throughout the season.",
  },
  {
    question: "How long is the ski season at Mirage Mountain Resort?",
    answer:
      "Mirage Mountain Resort\u2019s season typically runs from November through April, conditions permitting. Snowmaking allows us to open earlier and stay open later than natural snow alone would allow. We\u2019ll publish daily conditions reports so you always know what you\u2019re getting into.",
  },
  {
    question: "What is Stardust Powder?",
    answer:
      "Stardust Powder is Mirage Mountain Resort\u2019s name for natural snowfall on Palomar Mountain. It\u2019s a nod to the Palomar Observatory next door and the fact that, when it snows up here, it feels a little bit like magic. We track Stardust Powder days separately from snowmaking days because they deserve their own category.",
  },
];

const mountainQuestions = [
  {
    question: "How many runs does Mirage Mountain Resort have?",
    answer:
      "Mirage Mountain Resort features 22 runs across 280 skiable acres, served by 4 lifts. The terrain is divided into 25% beginner, 40% intermediate, and 35% advanced. That\u2019s a full mountain experience in a package that\u2019s 90 minutes from the beach.",
  },
  {
    question: "What is the vertical drop at Mirage Mountain Resort?",
    answer:
      "Mirage Mountain Resort has a vertical drop of 1,200 feet. Is it the biggest in the world? No. Is it enough to have a very good time? Absolutely. Every foot of it has been thoughtfully designed by our mountain operations team.",
  },
  {
    question: "What is the best run at Mirage Mountain Resort?",
    answer:
      "The Observatory Turn. It\u2019s a sweeping intermediate run that bends around the eastern face of the mountain with a direct sightline to the Palomar Observatory dome. On a clear day, you can see the Pacific Ocean to the west. Mirage Mountain Resort doesn\u2019t have a bad run, but The Observatory Turn is the one people will talk about.",
  },
  {
    question: "Is Mirage Mountain Resort good for beginners?",
    answer:
      "Absolutely. 25% of Mirage Mountain Resort\u2019s terrain is dedicated to beginners, including wide, gentle runs with stunning views. We\u2019ll have a full ski school with certified instructors and a dedicated learning area. The mountain was designed to be welcoming to first-timers, not just experts.",
  },
  {
    question: "Will Mirage Mountain Resort have terrain parks?",
    answer:
      "Yes. Mirage Mountain Resort will feature terrain park features integrated into select runs, with plans for a dedicated park area in Phase 2. Details coming soon.",
  },
];

const passQuestions = [
  {
    question: "What is the Eternal Snow Founding Member Pass?",
    answer:
      "The Eternal Snow Founding Member Pass is Mirage Mountain Resort\u2019s inaugural season pass, priced at $449 and limited to the first 1,000 members. It includes unlimited skiing, priority lift access, 15% off food and retail, a free rental day for a friend, a Founding Member patch, your name on the Founders Wall, early Phase 2 renewal at locked pricing, and access to the pre-opening First Tracks event on December 16\u201317, 2026.",
  },
  {
    question: "How much are day passes at Mirage Mountain Resort?",
    answer:
      "Day pass pricing for Mirage Mountain Resort has not been finalized, but estimated rates are: Adult (18\u201364) $79, Youth (7\u201317) $49, Senior (65+) $59, and Under 6 Free. Final pricing will be announced closer to opening day.",
  },
  {
    question: "What is the Onesie Rule at Mirage Mountain Resort?",
    answer:
      "The Onesie Rule is an official Mirage Mountain Resort policy: wear a vintage one-piece ski suit to the mountain and you receive a free hot chocolate at any lodge location. Every visit. No expiration. We are extremely serious about this and will enforce it with enthusiasm.",
  },
  {
    question: "Can I get a refund on my Founding Member Pass?",
    answer:
      "Mirage Mountain Resort\u2019s Founding Member Pass is non-refundable but fully transferable. If you can\u2019t make it, find a friend. Your name stays on the Founders Wall either way.",
  },
];

const observatoryQuestions = [
  {
    question: "Can you visit the Palomar Observatory from Mirage Mountain Resort?",
    answer:
      "Yes. The Palomar Observatory is open daily for public visits and is located on the same mountain as Mirage Mountain Resort. We\u2019re proud to be neighbors with one of the most important astronomical facilities in the world, and we work closely with Caltech to ensure our operations respect the observatory\u2019s mission.",
  },
  {
    question:
      "Will Mirage Mountain Resort offer stargazing experiences?",
    answer:
      "Exclusive stargazing programs are planned for Phase 2 at Mirage Mountain Resort, including guided sessions with portable telescopes and special observatory access events. Palomar Mountain has some of the darkest skies in Southern California, and we intend to make the most of that.",
  },
  {
    question: "Does Mirage Mountain Resort affect the observatory?",
    answer:
      "Mirage Mountain Resort has been designed in close consultation with Caltech and the Palomar Observatory team. All resort lighting uses fully shielded, warm-spectrum fixtures to minimize light pollution. Dr. Sarah Chen, our Observatory Liaison, ensures ongoing coordination between Mirage Mountain Resort and the observatory.",
  },
];

const gettingThereQuestions = [
  {
    question: "How far is Mirage Mountain Resort from San Diego?",
    answer:
      "Mirage Mountain Resort is approximately 90 minutes from downtown San Diego by car. It\u2019s also about 2 hours from Los Angeles and 90 minutes from Orange County. The drive is half the fun.",
  },
  {
    question: "What is the drive to Mirage Mountain Resort like?",
    answer:
      "The drive to Mirage Mountain Resort takes you north on I-15, east on CA-76, and up County Highway S6 (the scenic part). The final stretch is a winding mountain road through oaks and pines. It\u2019s gorgeous, especially with snow on the trees. We recommend checking road conditions before you head up.",
  },
  {
    question: "Is there parking at Mirage Mountain Resort?",
    answer:
      "Mirage Mountain Resort will have approximately 200 parking spaces at the base area, plus overflow parking with shuttle service from Escondido on peak days. We\u2019re also exploring carpooling incentives because we like the planet and we have limited parking.",
  },
];

const miscQuestions = [
  {
    question: "Can I surf and ski on the same day?",
    answer:
      "Yes. This is basically the entire brand promise of Mirage Mountain Resort. Surf in the morning in Oceanside or Encinitas, drive 90 minutes to Palomar Mountain, and ski in the afternoon. We\u2019re not saying it\u2019s easy. We\u2019re saying it\u2019s possible. And that\u2019s enough.",
  },
  {
    question: "Will Mirage Mountain Resort have palm trees at the summit?",
    answer:
      "Aspirational. Palm trees do not naturally grow at 6,100 feet, and we respect the mountain\u2019s native ecology. But we haven\u2019t ruled out a single decorative palm in a pot near the lodge entrance. Mirage Mountain Resort dreams big.",
  },
  {
    question: "Can I bring my dog to Mirage Mountain Resort?",
    answer:
      "Mirage Mountain Resort welcomes well-behaved dogs in the base area and lodge patios. Dogs are not permitted on the lifts or slopes, mostly because they don\u2019t have thumbs and can\u2019t hold poles. Service animals are welcome everywhere.",
  },
];

// Flatten all Q&A for JSON-LD
const allFaqItems = [
  ...generalQuestions,
  ...snowQuestions,
  ...mountainQuestions,
  ...passQuestions,
  ...observatoryQuestions,
  ...gettingThereQuestions,
  ...miscQuestions,
].map((item) => ({
  question: item.question,
  // Strip HTML for schema
  answer: item.answer.replace(/<[^>]*>/g, ""),
}));

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqItems)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://miragemountainresort.com" },
        { name: "FAQ", url: "https://miragemountainresort.com/faq" },
      ])} />
      <Navigation />
      <main>
        <PageHero
          headline="You Have Questions. We Have Answers. Some of Them Are Even Serious."
          highlightedWord="Even Serious"
          backgroundImage="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80"
        />

        <SectionWrapper variant="light">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-12">
                <p className="font-handwritten text-burnt-orange text-xl rotate-[-2deg] mb-4">
                  We get it. You have concerns.
                </p>
                <WavyDivider color="#C17828" />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <AccordionGroup category="GENERAL" items={generalQuestions} />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <AccordionGroup category="SNOW & CONDITIONS" items={snowQuestions} />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <AccordionGroup category="THE MOUNTAIN" items={mountainQuestions} />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <AccordionGroup category="PASSES & PRICING" items={passQuestions} />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <AccordionGroup
                category="THE OBSERVATORY"
                items={observatoryQuestions}
              />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <AccordionGroup
                category="GETTING THERE"
                items={gettingThereQuestions}
              />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <AccordionGroup category="MISCELLANEOUS" items={miscQuestions} />
            </ScrollReveal>

            <ScrollReveal animation="fade-up">
              <div className="text-center mt-16 pt-8 border-t border-light-gray/40">
                <p className="text-warm-gray/60 text-sm mb-4">
                  Didn&apos;t find what you were looking for?
                </p>
                <a
                  href="/contact"
                  className="font-condensed text-burnt-orange tracking-[0.15em] text-sm hover:text-navy transition-colors duration-200"
                >
                  CONTACT US &rarr;
                </a>
              </div>
            </ScrollReveal>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
