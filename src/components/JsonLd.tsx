type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Breadcrumbs                                                        */
/* ------------------------------------------------------------------ */
export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/* ------------------------------------------------------------------ */
/*  Organization                                                       */
/* ------------------------------------------------------------------ */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mirage Mountain Resort",
    url: "https://miragemountainresort.com",
    logo: "https://miragemountainresort.com/logo.svg",
    description:
      "Southern California's first ski resort on Palomar Mountain, San Diego County. Opening Winter 2026/27.",
    foundingDate: "2024",
    areaServed: {
      "@type": "State",
      name: "California",
    },
    knowsAbout: [
      "Skiing",
      "Snowboarding",
      "Ski Resort Operations",
      "Snowmaking",
      "Mountain Recreation",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "P.O. Box 6100",
      addressLocality: "Palomar Mountain",
      addressRegion: "CA",
      postalCode: "92060",
      addressCountry: "US",
    },
    funder: {
      "@type": "Organization",
      name: "Tias Capital",
      url: "https://tiascapital.com",
    },
    sameAs: [
      "https://instagram.com/miragemountain",
      "https://twitter.com/miragemountain",
      "https://facebook.com/miragemountainresort",
      "https://tiktok.com/@miragemountain",
    ],
  };
}

/* ------------------------------------------------------------------ */
/*  WebSite                                                            */
/* ------------------------------------------------------------------ */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mirage Mountain Resort",
    url: "https://miragemountainresort.com",
    description:
      "Mirage Mountain Resort -- Southern California's ski resort on Palomar Mountain.",
    publisher: {
      "@type": "Organization",
      name: "Mirage Mountain Resort",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://miragemountainresort.com/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Ski Resort (upgraded from SportsActivityLocation)                   */
/* ------------------------------------------------------------------ */
export function skiResortSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SkiResort",
    name: "Mirage Mountain Resort",
    description:
      "Southern California's first ski resort. 22 runs across 280 skiable acres with 1,200 ft vertical drop on Palomar Mountain, San Diego County.",
    url: "https://miragemountainresort.com/the-mountain",
    image: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1200&q=80",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Palomar Mountain",
      addressRegion: "CA",
      postalCode: "92060",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.3564,
      longitude: -116.862,
      elevation: {
        "@type": "QuantitativeValue",
        value: 6100,
        unitCode: "FOT",
      },
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "08:00",
      closes: "16:00",
      validFrom: "2026-11-01",
      validThrough: "2027-04-30",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "22 Ski Runs", value: true },
      { "@type": "LocationFeatureSpecification", name: "280 Skiable Acres", value: true },
      { "@type": "LocationFeatureSpecification", name: "4 Ski Lifts", value: true },
      { "@type": "LocationFeatureSpecification", name: "1,200 ft Vertical Drop", value: true },
      { "@type": "LocationFeatureSpecification", name: "Snowmaking (60% coverage)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Ski School", value: true },
      { "@type": "LocationFeatureSpecification", name: "Equipment Rental", value: true },
      { "@type": "LocationFeatureSpecification", name: "Base Lodge & Restaurant", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bar", value: true },
    ],
    tourBookingPage: "https://miragemountainresort.com/passes",
    isAccessibleForFree: false,
    publicAccess: true,
    smokingAllowed: false,
  };
}

// Keep backward compat
export function sportsActivitySchema() {
  return skiResortSchema();
}

/* ------------------------------------------------------------------ */
/*  Product (Passes)                                                   */
/* ------------------------------------------------------------------ */
export function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Eternal Snow Founding Member Pass",
    description:
      "Unlimited skiing at Mirage Mountain Resort for the inaugural 2026/27 season. Limited to the first 1,000 members.",
    sku: "ETERNAL-SNOW-FM-2026",
    category: "Ski Passes",
    brand: {
      "@type": "Brand",
      name: "Mirage Mountain Resort",
    },
    offers: {
      "@type": "Offer",
      price: "449",
      priceCurrency: "USD",
      availability: "https://schema.org/LimitedAvailability",
      validFrom: "2025-10-03",
      url: "https://miragemountainresort.com/passes",
      seller: {
        "@type": "Organization",
        name: "Mirage Mountain Resort",
      },
    },
    image: "https://miragemountainresort.com/logo.svg",
  };
}

/* ------------------------------------------------------------------ */
/*  Local Business (Contact)                                           */
/* ------------------------------------------------------------------ */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mirage Mountain Resort",
    description:
      "Southern California's first ski resort, located on Palomar Mountain in San Diego County.",
    url: "https://miragemountainresort.com",
    email: "info@miragemountainresort.com",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "P.O. Box 6100",
      addressLocality: "Palomar Mountain",
      addressRegion: "CA",
      postalCode: "92060",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.3564,
      longitude: -116.862,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "08:00",
      closes: "16:00",
      validFrom: "2026-11-01",
      validThrough: "2027-04-30",
    },
    sameAs: [
      "https://instagram.com/miragemountain",
      "https://twitter.com/miragemountain",
      "https://facebook.com/miragemountainresort",
      "https://tiktok.com/@miragemountain",
    ],
  };
}

/* ------------------------------------------------------------------ */
/*  News Article (Press)                                               */
/* ------------------------------------------------------------------ */
export function newsArticleSchema(article: {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "Mirage Mountain Resort",
    },
    publisher: {
      "@type": "Organization",
      name: "Mirage Mountain Resort",
      url: "https://miragemountainresort.com",
      logo: {
        "@type": "ImageObject",
        url: "https://miragemountainresort.com/logo.svg",
      },
    },
    description: article.excerpt,
    image: article.image,
    mainEntityOfPage: `https://miragemountainresort.com/press/${article.slug}`,
    articleSection: article.category || "Press",
    keywords: [
      "Mirage Mountain",
      "ski resort",
      "Palomar Mountain",
      "San Diego skiing",
      article.category,
    ].filter(Boolean),
  };
}

/* ------------------------------------------------------------------ */
/*  Blog Post                                                          */
/* ------------------------------------------------------------------ */
export function blogPostSchema(post: {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image: string;
  author: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Mirage Mountain Resort",
      url: "https://miragemountainresort.com",
      logo: {
        "@type": "ImageObject",
        url: "https://miragemountainresort.com/logo.svg",
      },
    },
    description: post.excerpt,
    image: post.image,
    mainEntityOfPage: `https://miragemountainresort.com/blog/${post.slug}`,
    articleSection: post.category || "Blog",
    keywords: [
      "Mirage Mountain",
      "ski resort",
      "Palomar Mountain",
      "Southern California skiing",
      post.category,
    ].filter(Boolean),
    inLanguage: "en-US",
  };
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */
export function faqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/* ------------------------------------------------------------------ */
/*  Collection Page (Blog/Press index)                                 */
/* ------------------------------------------------------------------ */
export function collectionPageSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    isPartOf: {
      "@type": "WebSite",
      name: "Mirage Mountain Resort",
      url: "https://miragemountainresort.com",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  About Page                                                         */
/* ------------------------------------------------------------------ */
export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Mirage Mountain Resort",
    description:
      "The story behind Southern California's first ski resort on Palomar Mountain.",
    url: "https://miragemountainresort.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "Mirage Mountain Resort",
      founder: [
        {
          "@type": "Person",
          name: "Jake Caldwell",
          jobTitle: "Founder & CEO",
        },
      ],
      employee: [
        {
          "@type": "Person",
          name: "Maria Reyes",
          jobTitle: "Director of Mountain Operations",
        },
      ],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Event (Opening Day)                                                */
/* ------------------------------------------------------------------ */
export function eventSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Mirage Mountain Resort Grand Opening",
    description:
      "Opening day of Southern California's first ski resort on Palomar Mountain, San Diego County.",
    startDate: "2026-12-01",
    endDate: "2026-12-01",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Mirage Mountain Resort",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Palomar Mountain",
        addressRegion: "CA",
        postalCode: "92060",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Mirage Mountain Resort",
      url: "https://miragemountainresort.com",
    },
    offers: {
      "@type": "Offer",
      name: "Eternal Snow Founding Member Pass",
      price: "449",
      priceCurrency: "USD",
      url: "https://miragemountainresort.com/passes",
      availability: "https://schema.org/LimitedAvailability",
    },
  };
}
