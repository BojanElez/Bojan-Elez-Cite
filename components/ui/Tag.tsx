import type { HTMLAttributes } from "react";

export type TagVariant = "blue" | "green" | "purple" | "orange" | "pink" | "gray";
type TagSize = "xs" | "sm";

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  label: string;
  variant?: TagVariant;
  size?: TagSize;
};

const variantClasses: Record<TagVariant, string> = {
  blue: "ui-tag-blue",
  green: "ui-tag-green",
  purple: "ui-tag-purple",
  orange: "ui-tag-orange",
  pink: "ui-tag-pink",
  gray: "ui-tag-gray",
};

const sizeClasses: Record<TagSize, string> = {
  xs: "ui-tag-xs",
  sm: "ui-tag-sm",
};

export default function Tag({
  label,
  variant = "gray",
  size = "xs",
  className = "",
  ...props
}: TagProps) {
  return (
    <span
      className={`ui-tag ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {label}
    </span>
  );
}
