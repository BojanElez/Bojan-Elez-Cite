import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

type RevealDirection = "up" | "left" | "right" | "none";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  direction?: RevealDirection;
  delayMs?: number;
  /** @deprecated CSS scroll-driven animations handle visibility — no longer needed */
  isVisible?: boolean;
  /** @deprecated CSS handles duration — no longer needed */
  duration?: number;
};

export default function Reveal({
  children,
  direction = "up",
  delayMs,
  isVisible,
  duration,
  className = "",
  style,
  ...props
}: RevealProps) {
  void isVisible;
  void duration;

  const revealStyle: CSSProperties = {
    ...style,
    ...(delayMs !== undefined ? { animationDelay: `${delayMs}ms` } : {}),
  };

  return (
    <div
      className={`reveal-${direction} ${className}`}
      style={revealStyle}
      {...props}
    >
      {children}
    </div>
  );
}
