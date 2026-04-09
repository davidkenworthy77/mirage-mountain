type ArticleCardProps = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image: string;
  basePath: string;
  author?: string;
  category?: string;
};

export function ArticleCard({
  title,
  date,
  excerpt,
  slug,
  image,
  basePath,
  author,
  category,
}: ArticleCardProps) {
  return (
    <a
      href={`${basePath}/${slug}`}
      className="group block bg-powder border border-light-gray/50 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)] transition-all duration-400 hover:-translate-y-1 overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center vintage-photo transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors" />
        {category && (
          <span className="absolute top-3 left-3 font-condensed text-[10px] text-cream bg-navy/70 px-2 py-1 tracking-[0.15em]">
            {category}
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-warm-gray/60 text-xs font-condensed tracking-wider mb-3">
          <span>{new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
          {author && (
            <>
              <span className="w-1 h-1 rounded-full bg-gold" />
              <span>{author}</span>
            </>
          )}
        </div>
        <h3 className="font-display text-lg text-navy leading-snug mb-2 group-hover:text-frost transition-colors duration-200">
          {title}
        </h3>
        <p className="text-warm-gray text-sm leading-relaxed line-clamp-2">
          {excerpt}
        </p>
      </div>
    </a>
  );
}
