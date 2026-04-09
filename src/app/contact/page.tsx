import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/Badge";
import { WavyDivider } from "@/components/WavyDivider";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd, localBusinessSchema, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact | Mirage Mountain Resort",
  description:
    "Get in touch with Mirage Mountain Resort. General inquiries, press, passes, careers, and partnerships. P.O. Box 6100, Palomar Mountain, CA 92060.",
};

const emailContacts = [
  {
    label: "General Inquiries",
    email: "info@miragemountainresort.com",
  },
  {
    label: "Press & Media",
    email: "press@miragemountainresort.com",
  },
  {
    label: "Passes & Memberships",
    email: "passes@miragemountainresort.com",
  },
  {
    label: "Careers",
    email: "jobs@miragemountainresort.com",
  },
  {
    label: "Partnerships",
    email: "partnerships@miragemountainresort.com",
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/miragemountain", handle: "@miragemountain" },
  { label: "TikTok", href: "https://tiktok.com/@miragemountain", handle: "@miragemountain" },
  { label: "X (Twitter)", href: "https://twitter.com/miragemountain", handle: "@miragemountain" },
  { label: "Facebook", href: "https://facebook.com/miragemountainresort", handle: "/miragemountainresort" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://miragemountainresort.com" },
        { name: "Contact", url: "https://miragemountainresort.com/contact" },
      ])} />
      <Navigation />
      <main>
        <PageHero
          headline="Say Hello."
          backgroundImage="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80"
          subhead="We're building a ski resort. We'd love to hear from you."
        />

        <SectionWrapper variant="light">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left Column - Contact Info */}
            <ScrollReveal animation="slide-left">
              <div>
                <p className="font-condensed text-burnt-orange tracking-[0.3em] text-xs mb-4">
                  GET IN TOUCH
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-navy mb-6">
                  We Read Every Email
                </h2>
                <WavyDivider color="#C17828" className="mb-8 !mx-0 !max-w-[200px]" />

                {/* Email Contacts */}
                <div className="space-y-4 mb-10">
                  {emailContacts.map((contact) => (
                    <div key={contact.label}>
                      <p className="font-condensed text-warm-gray/60 tracking-[0.15em] text-xs mb-0.5">
                        {contact.label.toUpperCase()}
                      </p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-navy hover:text-frost transition-colors duration-200 text-sm"
                      >
                        {contact.email}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Address */}
                <div className="mb-10">
                  <p className="font-condensed text-warm-gray/60 tracking-[0.15em] text-xs mb-1">
                    MAILING ADDRESS
                  </p>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    P.O. Box 6100<br />
                    Palomar Mountain, CA 92060
                  </p>
                </div>

                {/* Pull quote sticker */}
                <div
                  className="bg-gold/10 border border-gold/30 p-6 mb-10 relative"
                  style={{ transform: "rotate(-1deg)" }}
                >
                  <div className="absolute -top-2 -left-2 w-6 h-4 bg-gold/20 rotate-[-5deg]" />
                  <p className="font-handwritten text-burnt-orange text-lg mb-1">
                    We actually read these.
                  </p>
                  <p className="text-warm-gray/70 text-sm">
                    Every email gets read by a real human. Usually Danny. Sometimes
                    Jake. Response time: 24&ndash;48 hours, faster if you mention
                    the Onesie Rule.
                  </p>
                </div>

                {/* Backed by Tias Capital */}
                <div className="mb-10">
                  <p className="font-condensed text-warm-gray/40 tracking-[0.15em] text-[10px] mb-2">
                    FOR INVESTMENT & PARTNERSHIP INQUIRIES
                  </p>
                  <a
                    href="https://tiascapital.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-navy/15 px-5 py-2.5 hover:border-gold hover:bg-gold/5 transition-all duration-300 group"
                  >
                    <span className="font-condensed text-[10px] tracking-[0.15em] text-warm-gray/50">
                      Backed by
                    </span>
                    <span className="font-condensed text-xs font-semibold tracking-wider text-navy">
                      TIAS CAPITAL
                    </span>
                    <span className="text-burnt-orange text-sm group-hover:translate-x-1 transition-transform duration-200">
                      &rarr;
                    </span>
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <p className="font-condensed text-burnt-orange tracking-[0.3em] text-xs mb-4">
                    FOLLOW ALONG
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-warm-gray hover:text-frost transition-colors duration-200 group"
                      >
                        <span className="font-condensed text-xs tracking-[0.1em] text-warm-gray/50 group-hover:text-frost">
                          {social.label}
                        </span>
                        <span className="text-sm">{social.handle}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - Contact Form */}
            <ScrollReveal animation="slide-right">
              <div className="bg-white/50 border border-light-gray/40 p-8 md:p-10 relative shadow-[5px_5px_0px_rgba(0,0,0,0.1)]">

                <h3 className="font-display text-xl text-navy mb-1">
                  Send Us a Message
                </h3>
                <p className="text-warm-gray/60 text-sm mb-6">
                  Questions, ideas, compliments, gentle roasts&mdash;all welcome.
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
