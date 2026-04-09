export function WavyDivider({
  className = "",
  color = "#D4CFC8",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 600 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-md mx-auto ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 6C50 2 100 10 150 6C200 2 250 10 300 6C350 2 400 10 450 6C500 2 550 10 600 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        style={{ strokeDasharray: "none" }}
      />
    </svg>
  );
}
