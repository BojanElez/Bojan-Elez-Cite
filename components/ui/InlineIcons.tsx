import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const iconProps = ({ size = 24, ...props }: IconProps) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export function MenuIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M20.99 12.49A9 9 0 1 1 11.51 3.01a6 6 0 0 0 8.48 9.48Z" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

export function LoaderCircleIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M21 12a9 9 0 1 1-6.22-8.56" />
    </svg>
  );
}

export function PaperclipIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="m16 6-8.41 8.59a2 2 0 0 0 2.82 2.82l8.42-8.58a4 4 0 1 0-5.66-5.66l-8.38 8.55a6 6 0 1 0 8.49 8.49l8.38-8.55" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function XCircleIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function LocateIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

export function CalendarDaysIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </svg>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export function AwardIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11" />
    </svg>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
      <path d="m14.5 4-5 16" />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-3-3 2.5-2.5Z" />
    </svg>
  );
}

export function LightbulbIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5A5 5 0 1 0 7.5 11.5C8.3 12.3 8.8 13 9 14" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M8 14h8" />
    </svg>
  );
}
