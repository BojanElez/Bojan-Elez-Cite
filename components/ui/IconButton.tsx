import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonVariant = "plain" | "circle" | "gradientCircle";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  label: string;
  variant?: IconButtonVariant;
};

const variantClasses: Record<IconButtonVariant, string> = {
  plain: "icon-button-plain",
  circle: "icon-button-circle",
  gradientCircle: "icon-button-gradient-circle",
};

export default function IconButton({
  children,
  label,
  variant = "plain",
  className = "",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={`icon-button ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
