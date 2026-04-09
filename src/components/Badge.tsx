type BadgeProps = {
  children: React.ReactNode;
  rotate?: number;
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "cream" | "navy";
  className?: string;
};

export function Badge({
  children,
  rotate = -3,
  size = "md",
  variant = "gold",
  className = "",
}: BadgeProps) {
  const sizes = {
    sm: "w-20 h-20 text-[10px]",
    md: "w-28 h-28 text-xs",
    lg: "w-36 h-36 text-sm",
  };

  const variants = {
    gold: "border-gold text-gold",
    cream: "border-cream text-cream",
    navy: "border-navy text-navy",
  };

  return (
    <div
      className={`${sizes[size]} ${variants[variant]} rounded-full border-2 flex items-center justify-center text-center font-condensed font-semibold uppercase tracking-widest leading-tight p-3 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}
