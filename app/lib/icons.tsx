type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function FlaskIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 3h6" />
      <path d="M10 3v6.5L4.8 16.9A2 2 0 0 0 6.4 20h11.2a2 2 0 0 0 1.6-3.1L14 9.5V3" />
      <path d="M7.5 14.5h9" />
    </svg>
  );
}

export function WaveformIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2 12h4l2-7 4 14 2-7h8" />
    </svg>
  );
}

export function DropletIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3c3.5 4.5 6 8.1 6 11a6 6 0 1 1-12 0c0-2.9 2.5-6.5 6-11z" />
    </svg>
  );
}

export function ParticleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 12 5 7m7 5 7-5m-7 5-7 5m7-5 7 5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="5" cy="7" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="19" cy="7" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="5" cy="17" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="19" cy="17" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" />
      <path d="M4 12.5l8 4.5 8-4.5" />
      <path d="M4 16.5l8 4.5 8-4.5" />
    </svg>
  );
}

export function FilterIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 4h16l-6.5 8.5V19l-3 2v-8.5L4 4z" />
    </svg>
  );
}

export function BookIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5v-15z" />
      <path d="M19 18H6.5a2.5 2.5 0 0 0-2.5 2.5" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 5l14 14" />
      <path d="M19 5L5 19" />
    </svg>
  );
}

export function AwardIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8.5" r="4.5" />
      <path d="M8.5 12.5 7 21l5-2.5 5 2.5-1.5-8.5" />
    </svg>
  );
}
