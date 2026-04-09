type Difficulty = "green" | "blue" | "black" | "double-black";

const difficultyStyles: Record<Difficulty, { shape: string; color: string; label: string }> = {
  green: { shape: "circle", color: "#2D5F3A", label: "Beginner" },
  blue: { shape: "square", color: "#3A8C8C", label: "Intermediate" },
  black: { shape: "diamond", color: "#1B2A4A", label: "Advanced" },
  "double-black": { shape: "double-diamond", color: "#1B2A4A", label: "Expert" },
};

export function TrailMarker({
  difficulty,
  size = 20,
}: {
  difficulty: Difficulty;
  size?: number;
}) {
  const style = difficultyStyles[difficulty];

  if (style.shape === "circle") {
    return (
      <svg width={size} height={size} viewBox="0 0 20 20" aria-label={style.label}>
        <circle cx="10" cy="10" r="8" fill={style.color} />
      </svg>
    );
  }

  if (style.shape === "square") {
    return (
      <svg width={size} height={size} viewBox="0 0 20 20" aria-label={style.label}>
        <rect x="3" y="3" width="14" height="14" fill={style.color} />
      </svg>
    );
  }

  if (style.shape === "diamond") {
    return (
      <svg width={size} height={size} viewBox="0 0 20 20" aria-label={style.label}>
        <polygon points="10,1 19,10 10,19 1,10" fill={style.color} />
      </svg>
    );
  }

  // double-diamond
  return (
    <svg width={size * 1.2} height={size} viewBox="0 0 24 20" aria-label={style.label}>
      <polygon points="7,1 13,10 7,19 1,10" fill={style.color} />
      <polygon points="17,1 23,10 17,19 11,10" fill={style.color} />
    </svg>
  );
}

export function TrailRow({
  name,
  description,
  difficulty,
}: {
  name: string;
  description: string;
  difficulty: Difficulty;
}) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-light-gray/40 last:border-b-0">
      <div className="mt-1 shrink-0">
        <TrailMarker difficulty={difficulty} />
      </div>
      <div>
        <span className="font-condensed text-base text-navy font-semibold">{name}</span>
        <p className="text-warm-gray text-sm mt-0.5">{description}</p>
      </div>
    </div>
  );
}
