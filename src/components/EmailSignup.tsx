"use client";

import { useState } from "react";
import { Button } from "./Button";

export function EmailSignup({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className={`text-center ${className}`}>
        <p className="font-handwritten text-2xl text-pine mb-2">
          You&apos;re on the list!
        </p>
        <p className="text-warm-gray text-sm">
          We&apos;ll send you snow reports and existential questions about skiing in San Diego.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col sm:flex-row gap-3 max-w-lg mx-auto ${className}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-5 py-3.5 bg-powder border border-light-gray text-warm-gray placeholder:text-warm-gray/50 focus:outline-none focus:border-frost focus:ring-2 focus:ring-frost/20 font-body text-base transition-all duration-200"
      />
      <Button type="submit" variant="primary" size="md">
        Join the Waitlist
      </Button>
    </form>
  );
}
