import NavLink from "./NavLink";
import type { NavItem } from "./navItems";

type MobileMenuProps = {
  items: NavItem[];
  onNavigate: () => void;
};

export default function MobileMenu({ items, onNavigate }: MobileMenuProps) {
  return (
    <div className="mobile-menu-shell">
      <div className="mobile-menu-panel">
        {items.map((item) => (
          <NavLink
            key={item.name}
            item={item}
            onClick={onNavigate}
            variant="mobile"
          />
        ))}
      </div>
    </div>
  );
}
