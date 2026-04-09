export function MountainIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 52L24 16L32 30L40 12L52 36L56 52H8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M24 16L28 24L20 24Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M40 12L45 22L35 22Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      {/* Trees */}
      <path d="M14 52L16 44L18 52Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M46 52L48 45L50 52Z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

export function TelescopeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Dome base */}
      <ellipse
        cx="32"
        cy="38"
        rx="18"
        ry="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Dome */}
      <path
        d="M14 38C14 28 22 18 32 18C42 18 50 28 50 38"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.05"
      />
      {/* Telescope slit */}
      <line x1="32" y1="18" x2="32" y2="38" stroke="currentColor" strokeWidth="1.5" />
      {/* Telescope tube */}
      <line x1="32" y1="22" x2="22" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Stars */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" fillOpacity="0.4" />
      <circle cx="50" cy="8" r="1" fill="currentColor" fillOpacity="0.3" />
      <circle cx="54" cy="16" r="1.5" fill="currentColor" fillOpacity="0.35" />
      {/* Base */}
      <rect x="26" y="46" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      <line x1="32" y1="38" x2="32" y2="46" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function LodgeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Cabin body */}
      <rect
        x="12"
        y="30"
        width="40"
        height="24"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Roof */}
      <path
        d="M8 30L32 10L56 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.05"
      />
      {/* Door */}
      <rect x="27" y="40" width="10" height="14" rx="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      {/* Windows */}
      <rect x="16" y="35" width="7" height="7" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
      <rect x="41" y="35" width="7" height="7" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
      {/* Window crosses */}
      <line x1="19.5" y1="35" x2="19.5" y2="42" stroke="currentColor" strokeWidth="1" />
      <line x1="16" y1="38.5" x2="23" y2="38.5" stroke="currentColor" strokeWidth="1" />
      <line x1="44.5" y1="35" x2="44.5" y2="42" stroke="currentColor" strokeWidth="1" />
      <line x1="41" y1="38.5" x2="48" y2="38.5" stroke="currentColor" strokeWidth="1" />
      {/* Chimney with smoke */}
      <rect x="42" y="16" width="6" height="14" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      <path d="M45 16C45 12 47 10 45 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M47 14C47 10 49 8 47 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}
