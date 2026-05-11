import { ArrowUpIcon, LocateIcon } from "@/components/ui/InlineIcons";
import FooterLinks from "./FooterLinks";
import FooterSocialLinks from "./FooterSocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand-column">
            <div className="footer-brand-block">
              <a
                href="#home"
                className="footer-brand-link gradient-text"
              >
                Bojan Elez
              </a>
              <p className="footer-role">Fullstack Engineer</p>
            </div>
            <p className="footer-copy">
              Passionate about creating exceptional user experiences through clean,
              efficient code and innovative design. Always eager to take on new
              challenges and collaborate with talented teams.
            </p>

            <FooterSocialLinks />
          </div>

          <div>
            <h3 className="footer-title">Quick Links</h3>
            <FooterLinks />
          </div>

          <div>
            <h3 className="footer-title">Get In Touch</h3>
            <div className="footer-contact-list">
              <div>
                <p className="footer-label">Email</p>
                <a
                  href="mailto:belez911@gmail.com"
                  className="footer-link"
                >
                  belez911@gmail.com
                </a>
              </div>

              <div>
                <p className="footer-label">Location</p>
                <p className="footer-location">
                  <a
                    className="footer-location-icon"
                    href="https://www.google.com/maps/@44.0261436,20.8969743,16z?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LocateIcon size={20} />
                  </a>
                  Kragujevac, Serbia
                </p>
              </div>

              <div>
                <p className="footer-label">Status</p>
                <div className="footer-status-row">
                  <div className="footer-status-dot" />
                  <span className="footer-status-text">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                (c) {currentYear} Bojan Elez. All rights reserved. Built with
                <span className="footer-next"> Next.js</span> and
                <span className="footer-tailwind"> Tailwind CSS</span>.
              </p>
            </div>

            <div className="footer-made">
              <span>Made with modern technologies</span>
              <div className="footer-tech-list">
                <span className="footer-tech-pill">
                  Next.js
                </span>
                <span className="footer-tech-pill">
                  TypeScript
                </span>
                <span className="footer-tech-pill">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#home"
          aria-label="Scroll to top"
          title="Scroll to top"
          className="scroll-top"
        >
          <ArrowUpIcon size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
