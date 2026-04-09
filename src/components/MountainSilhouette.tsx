export function MountainSilhouette({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Mountain range with observatory dome */}
      <path
        d="M0 200V140L60 120L120 95L180 110L240 80L300 65L340 72L380 55L420 62L460 40L500 50L520 35L540 28L560 35L580 45L620 30L660 42L700 25L720 18L730 12L740 18L760 28L800 38L840 22L870 15L890 10L900 8L910 10L930 18L960 28L1000 42L1040 55L1060 48L1080 52L1100 45L1140 58L1180 70L1220 60L1260 75L1300 85L1340 95L1380 110L1420 125L1440 135V200Z"
        fill={color}
      />
      {/* Observatory dome on the peak */}
      <ellipse cx="900" cy="8" rx="12" ry="7" fill={color} />
      <rect x="897" y="2" width="6" height="4" rx="1" fill={color} />
    </svg>
  );
}

export function MountainLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mirage Mountain logo"
    >
      {/* Mountain peaks */}
      <path
        d="M2 26L12 6L16 14L22 4L28 14L32 8L38 26Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Observatory dome */}
      <ellipse
        cx="22"
        cy="4"
        rx="3"
        ry="2"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* Snow caps */}
      <path
        d="M12 6L14 10L10 10Z"
        fill="currentColor"
        fillOpacity="0.4"
      />
      <path
        d="M22 4L24.5 9L19.5 9Z"
        fill="currentColor"
        fillOpacity="0.4"
      />
    </svg>
  );
}
