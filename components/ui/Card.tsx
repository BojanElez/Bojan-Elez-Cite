import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type CardVariant = "cyanLarge" | "cyanAnimated" | "glass" | "glassSmall" | "plain";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: CardVariant;
  delayMs?: number;
};

const variantClasses: Record<CardVariant, string> = {
  cyanLarge: "ui-card-cyan-large",
  cyanAnimated: "ui-card-cyan-animated",
  glass: "ui-card-glass",
  glassSmall: "ui-card-glass-small",
  plain: "",
};

export default function Card({
  children,
  variant = "glass",
  delayMs,
  className = "",
  style,
  ...props
}: CardProps) {
  const delayedStyle: CSSProperties | undefined =
    delayMs === undefined
      ? style
      : {
          ...style,
          animationDelay: `${delayMs}ms`,
        };

  return (
    <div
      className={`${variantClasses[variant]} ${className}`}
      style={delayedStyle}
      {...props}
    >
      {children}
    </div>
  );
}
