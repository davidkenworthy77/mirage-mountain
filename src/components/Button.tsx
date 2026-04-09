"use client";

import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "font-condensed inline-flex items-center justify-center font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-burnt-orange text-cream hover:bg-burnt-orange-hover shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-navy text-cream hover:bg-navy-light shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline:
      "border-2 border-cream text-cream hover:bg-cream/10 backdrop-blur-sm",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
