import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  /** Renders an <a> tag instead of <button> when provided */
  href?: string;
  download?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "gradient-bg ui-button-primary",
  secondary: "ui-button-secondary",
  ghost: "ui-button-ghost",
  danger: "ui-button-danger",
};

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  type = "button",
  href,
  download,
  ...props
}: ButtonProps) {
  const classes = `ui-button ${
    fullWidth ? "ui-button-full" : ""
  } ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} download={download} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
