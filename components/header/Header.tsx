import NavLink from "./NavLink";
import { navItems } from "./navItems";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo-wrap">
            <a
              href="#home"
              className="logo-link gradient-text"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Logo.webp"
                alt="Bojan Elez logo"
                width={150}
                height={150}
                className="logo-image"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </a>
          </div>

          <div className="desktop-nav">
            <div className="desktop-nav-list">
              {navItems.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
