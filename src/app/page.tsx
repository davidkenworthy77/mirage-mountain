import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ElevatorPitch } from "@/components/ElevatorPitch";
import { ByTheNumbers } from "@/components/ByTheNumbers";
import { ThreePillars } from "@/components/ThreePillars";
import { Timeline } from "@/components/Timeline";
import { FoundingMembers } from "@/components/FoundingMembers";
import { Footer } from "@/components/Footer";
import { JsonLd, organizationSchema, webSiteSchema, eventSchema, breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Mirage Mountain Resort | Southern California's Ski Resort on Palomar Mountain",
  description:
    "Mirage Mountain Resort is rising on Palomar Mountain, 6,100 feet above San Diego County. 22 runs, 280 acres, Opening Winter 2026/27. Join the Founding Members.",
  openGraph: {
    title: "Mirage Mountain Resort | Southern California's Ski Resort",
    description:
      "Mirage Mountain Resort: 22 runs, 1,200 ft vertical, and a world-famous observatory. Palomar Mountain, San Diego County. Opening Winter 2026/27.",
    url: "https://miragemountainresort.com",
    siteName: "Mirage Mountain Resort",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirage Mountain Resort",
    description:
      "Southern California's ski resort on Palomar Mountain. 6,100 feet. Opening Winter 2026/27.",
  },
  alternates: {
    canonical: "https://miragemountainresort.com",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={webSiteSchema()} />
      <JsonLd data={eventSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://miragemountainresort.com" }])} />
      <Navigation />
      <main>
        <Hero />
        <ElevatorPitch />
        <ByTheNumbers />
        <ThreePillars />
        <Timeline />
        <FoundingMembers />
      </main>
      <Footer />
    </>
  );
}
