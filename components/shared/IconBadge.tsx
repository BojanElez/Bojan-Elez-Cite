import type { ReactNode } from "react";

type IconBadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function IconBadge({ children, className = "" }: IconBadgeProps) {
  return (
    <span
      className={`icon-badge ${className}`}
    >
      {children}
    </span>
  );
}
