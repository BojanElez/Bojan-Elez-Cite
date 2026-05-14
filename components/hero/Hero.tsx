import SocialLinks from "@/components/shared/SocialLinks";
import { ArrowDownIcon } from "@/components/ui/InlineIcons";
import HeroActions from "./HeroActions";
import ProfileBadge from "./ProfileBadge";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section"
    >
      <div className="hero-background" />

      <div className="hero-orbit">
        <div className="hero-orbit-sky" />
        <div className="hero-orbit-indigo" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-profile-slot">
            <ProfileBadge />
          </div>

          <div>
            <h1 className="hero-title">
              Hi, I&apos;m <span className="gradient-text">Bojan Elez</span>
            </h1>

            <div className="hero-role-line">
              <span className="hero-role-prefix">I&apos;m a</span>
              <TypewriterText />
            </div>

            <p className="hero-description">
              Passionate about building scalable full-stack applications through clean, 
              efficient code and thoughtful architecture. I create seamless user experiences 
              supported by robust backend systems, delivering reliable, 
              high-performance solutions that solve real-world problems end-to-end.
            </p>
          </div>

          <HeroActions />

          <div className="hero-social-slot">
            <SocialLinks />
          </div>

          <div className="hero-scroll-indicator">
            <a
              href="#about"
              className="hero-scroll-link"
              aria-label="Scroll to about section"
            >
              <ArrowDownIcon size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
