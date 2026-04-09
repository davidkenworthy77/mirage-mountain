import type { Metadata } from "next";
import {
  Playfair_Display,
  Barlow_Condensed,
  Source_Sans_3,
  Permanent_Marker,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-condensed",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-handwritten",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mirage Mountain Resort | Southern California's Ski Resort",
  description:
    "Mirage Mountain Resort is rising on Palomar Mountain, 6,100 feet above San Diego County. Ski by day. Stargaze by night. Opening Winter 2026/27.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${barlow.variable} ${sourceSans.variable} ${permanentMarker.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
