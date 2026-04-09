"use client";

import { useEffect, useRef, useState } from "react";

type StatBlockProps = {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
};

export function StatBlock({ value, suffix = "", label, delay = 0 }: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const timeout = setTimeout(() => {
      const duration = 1800;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        // Ease-out curve
        const progress = step / steps;
        const eased = 1 - Math.pow(1 - progress, 3);
        current = Math.round(eased * value);
        setCount(current);

        if (step >= steps) {
          setCount(value);
          clearInterval(interval);
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [started, value, delay]);

  return (
    <div ref={ref} className="text-center group">
      <div className="font-display text-5xl md:text-6xl lg:text-7xl text-gold mb-2 transition-transform duration-300 group-hover:scale-105">
        {count.toLocaleString()}
        {suffix && (
          <span className="text-3xl md:text-4xl ml-1 text-gold/80">{suffix}</span>
        )}
      </div>
      <div className="font-condensed text-sm md:text-base text-cream/70 tracking-widest">
        {label}
      </div>
    </div>
  );
}
