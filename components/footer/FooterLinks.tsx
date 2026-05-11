import { navItems } from "@/components/header/navItems";

export default function FooterLinks() {
  return (
    <ul className="footer-contact-list">
      {navItems.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="footer-link"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
