"use client";

import { useState } from "react";
import { Button } from "./Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="font-handwritten text-2xl text-pine mb-2">Message sent!</p>
        <p className="text-warm-gray text-sm">We&apos;ll get back to you faster than a groomer at 5am.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-condensed text-xs text-navy tracking-[0.15em] mb-1.5 block">
            Name
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 bg-powder border border-light-gray text-warm-gray focus:outline-none focus:border-frost focus:ring-2 focus:ring-frost/20 text-base transition-all"
          />
        </div>
        <div>
          <label className="font-condensed text-xs text-navy tracking-[0.15em] mb-1.5 block">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 bg-powder border border-light-gray text-warm-gray focus:outline-none focus:border-frost focus:ring-2 focus:ring-frost/20 text-base transition-all"
          />
        </div>
      </div>

      <div>
        <label className="font-condensed text-xs text-navy tracking-[0.15em] mb-1.5 block">
          Subject
        </label>
        <select
          required
          defaultValue=""
          className="w-full px-4 py-3 bg-powder border border-light-gray text-warm-gray focus:outline-none focus:border-frost focus:ring-2 focus:ring-frost/20 text-base transition-all"
        >
          <option value="" disabled>Select a topic...</option>
          <option>General Inquiry</option>
          <option>Founding Member Passes</option>
          <option>Press & Media</option>
          <option>Partnerships & Investment</option>
          <option>Careers</option>
          <option>Other (I just had to email a ski resort in San Diego)</option>
        </select>
      </div>

      <div>
        <label className="font-condensed text-xs text-navy tracking-[0.15em] mb-1.5 block">
          Message
        </label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-3 bg-powder border border-light-gray text-warm-gray focus:outline-none focus:border-frost focus:ring-2 focus:ring-frost/20 text-base transition-all resize-none"
        />
      </div>

      <Button type="submit" variant="primary" size="md">
        Send Message
      </Button>
    </form>
  );
}
