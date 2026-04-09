import type { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  variant?: "light" | "dark";
  className?: string;
  id?: string;
};

export function SectionWrapper({
  children,
  variant = "light",
  className = "",
  id,
}: SectionWrapperProps) {
  const bg = variant === "dark" ? "bg-navy text-cream" : "bg-cream text-warm-gray";
  const texture = variant === "light" ? "paper-texture" : "";

  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 overflow-hidden ${bg} ${texture} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">{children}</div>
    </section>
  );
}
