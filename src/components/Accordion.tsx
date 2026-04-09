"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionGroupProps = {
  category: string;
  items: AccordionItem[];
};

function AccordionRow({ question, answer }: AccordionItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-light-gray/60 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <span className="font-display text-lg md:text-xl text-navy group-hover:text-frost transition-colors duration-200">
          {question}
        </span>
        <span
          className={`shrink-0 mt-1.5 w-5 h-5 flex items-center justify-center text-burnt-orange font-condensed text-xl transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          open ? "max-h-[600px] pb-5" : "max-h-0"
        }`}
      >
        <div
          className="text-warm-gray leading-relaxed text-base prose prose-a:text-frost prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
}

export function AccordionGroup({ category, items }: AccordionGroupProps) {
  return (
    <div className="mb-12">
      <h3 className="font-condensed text-burnt-orange tracking-[0.2em] text-sm mb-6">
        {category}
      </h3>
      <div>
        {items.map((item) => (
          <AccordionRow key={item.question} {...item} />
        ))}
      </div>
    </div>
  );
}
