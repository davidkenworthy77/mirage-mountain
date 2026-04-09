"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./Button";

const navLinks = [
  { label: "The Mountain", href: "/the-mountain" },
  { label: "Experiences", href: "/experiences" },
  { label: "Plans", href: "/plans" },
  { label: "Passes", href: "/passes" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-3 text-cream group relative"
          >
            <Image src="/logo.png" alt="Mirage Mountain" width={57} height={80} className="absolute top-1/2 -translate-y-[40%] left-0 transition-transform duration-300 group-hover:scale-110" style={{ height: 80, width: 57 }} />
            <span className="font-condensed text-lg md:text-xl font-semibold tracking-widest ml-[69px]">
              Mirage Mountain
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-condensed text-sm text-cream/70 hover:text-cream transition-colors duration-200 tracking-widest relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button href="/passes" size="sm" variant="primary">
              Get Your Pass
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-cream p-2 z-60"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-cream transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-cream transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-cream transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-7">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl text-cream hover:text-gold transition-colors duration-200"
              style={{
                transitionDelay: mobileOpen ? `${i * 80 + 150}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.4s, transform 0.4s, color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col items-center gap-4 mt-4"
            style={{
              transitionDelay: mobileOpen ? "650ms" : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.4s, transform 0.4s",
            }}
          >
            <a href="/press" onClick={() => setMobileOpen(false)} className="font-condensed text-sm text-cream/50 tracking-widest hover:text-cream transition-colors">Press</a>
            <a href="/faq" onClick={() => setMobileOpen(false)} className="font-condensed text-sm text-cream/50 tracking-widest hover:text-cream transition-colors">FAQ</a>
            <a href="/contact" onClick={() => setMobileOpen(false)} className="font-condensed text-sm text-cream/50 tracking-widest hover:text-cream transition-colors">Contact</a>
            <Button
              href="/passes"
              size="lg"
              variant="primary"
              className="mt-2"
            >
              Get Your Pass
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
