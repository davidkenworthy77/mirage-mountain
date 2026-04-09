import Image from "next/image";
import { MountainSilhouette } from "./MountainSilhouette";
import { Badge } from "./Badge";

const quickLinks = [
  { label: "The Mountain", href: "/the-mountain" },
  { label: "Experiences", href: "/experiences" },
  { label: "Plans", href: "/plans" },
  { label: "Passes", href: "/passes" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const contentLinks = [
  { label: "Press", href: "/press" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "Facebook", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-navy text-cream pt-20 pb-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-4 group">
              <Image src="/logo.png" alt="Mirage Mountain" width={32} height={32} className="transition-transform group-hover:scale-110" />
              <span className="font-condensed text-lg font-semibold tracking-widest">
                Mirage Mountain
              </span>
            </a>
            <p className="text-cream/60 text-sm leading-relaxed mb-4 max-w-xs">
              Southern California&apos;s first and only ski resort. Palomar
              Mountain, San Diego County. Opening Winter 2026/27.
            </p>
            <p className="font-handwritten text-gold text-base rotate-[-1deg]">
              The Mountain That Shouldn&apos;t Exist.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-condensed text-sm text-gold tracking-[0.2em] mb-6">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-frost text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Content & Social */}
          <div>
            <h4 className="font-condensed text-sm text-gold tracking-[0.2em] mb-6">
              Connect
            </h4>
            <ul className="space-y-2.5 mb-6">
              {contentLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-frost text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-frost text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Tias */}
          <div>
            <h4 className="font-condensed text-sm text-gold tracking-[0.2em] mb-6">
              Contact
            </h4>
            <ul className="space-y-2 text-cream/50 text-sm mb-8">
              <li>info@miragemountainresort.com</li>
              <li>press@miragemountainresort.com</li>
              <li className="pt-1">
                P.O. Box 6100<br />
                Palomar Mountain, CA 92060
              </li>
            </ul>

            {/* Tias Capital badge */}
            <div className="inline-block" style={{ transform: "rotate(-2deg)" }}>
              <a
                href="https://tiascapital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold/40 px-4 py-2 text-gold/70 hover:text-gold hover:border-gold/70 transition-colors duration-200"
              >
                <span className="font-condensed text-[10px] tracking-[0.15em]">Backed by</span>
                <span className="font-condensed text-xs font-semibold tracking-wider">TIAS CAPITAL</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-cream/30 text-xs">
          <p>&copy; 2026 Mirage Mountain Resort. All rights reserved.</p>
          <p className="font-condensed tracking-wider">
            6,100 Feet Above the Ordinary
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 opacity-[0.06]">
        <MountainSilhouette className="w-full h-auto" color="#F5F0E8" />
      </div>
    </footer>
  );
}
