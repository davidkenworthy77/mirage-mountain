import { MountainSilhouette } from "./MountainSilhouette";

type ArticleLayoutProps = {
  title: string;
  date: string;
  author: string;
  image: string;
  category?: string;
  backHref: string;
  backLabel: string;
  children: React.ReactNode;
};

export function ArticleLayout({
  title,
  date,
  author,
  image,
  category,
  backHref,
  backLabel,
  children,
}: ArticleLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center vintage-photo"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30" />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-12 pb-12 pt-32">
          {category && (
            <span className="font-condensed text-xs text-gold tracking-[0.2em] mb-3 block">
              {category}
            </span>
          )}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-[1.15] mb-4">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-cream/60 text-sm font-condensed tracking-wider">
            <span>{new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span>{author}</span>
          </div>
        </div>
        <div className="absolute -bottom-12 md:-bottom-20 lg:-bottom-28 xl:-bottom-36 left-0 right-0">
          <MountainSilhouette className="w-full h-auto" color="#F5F0E8" />
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-cream paper-texture">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
          {/* Back link */}
          <a
            href={backHref}
            className="inline-flex items-center gap-2 font-condensed text-sm text-frost hover:text-frost-hover tracking-wider mb-10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-180">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {backLabel}
          </a>

          {/* Article content */}
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:font-condensed prose-h3:uppercase prose-h3:tracking-widest prose-h3:text-burnt-orange prose-h3:text-base prose-p:text-warm-gray prose-p:leading-relaxed prose-a:text-frost prose-a:no-underline hover:prose-a:underline prose-strong:text-navy prose-blockquote:border-l-gold prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:font-display prose-blockquote:text-navy/80 prose-blockquote:not-italic prose-ul:text-warm-gray prose-li:text-warm-gray">
            {children}
          </div>
        </div>
      </article>
    </>
  );
}
