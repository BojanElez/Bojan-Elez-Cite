import type { NavItem } from "./navItems";

type NavLinkProps = {
  item: NavItem;
  variant?: "desktop" | "mobile";
  onClick?: () => void;
};

const variantClasses = {
  desktop: "nav-link-desktop",
  mobile: "nav-link-mobile",
};

export default function NavLink({
  item,
  variant = "desktop",
  onClick,
}: NavLinkProps) {
  return (
    <a
      href={item.href}
      className={`nav-link ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {item.name}
    </a>
  );
}
