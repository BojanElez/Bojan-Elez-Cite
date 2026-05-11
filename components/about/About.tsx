import Button from "@/components/ui/Button";
import Reveal from "@/components/shared/Reveal";
import SectionTitle from "@/components/shared/SectionTitle";
import { getYearsOfExperience } from "@/lib/useYearsOfExperience";
import AboutStats from "./AboutStats";
import JourneyCard from "./JourneyCard";
import StrengthCard from "./StrengthCard";
import { strengths } from "./strengths";

const About = () => {
  const yearsOfExperience = getYearsOfExperience();

  return (
    <section
      id="about"
      className="about-section"
    >
      <div className="about-container">
        <Reveal>
          <SectionTitle
            title="About"
            highlightedText="Me"
            subtitle={
              "Get to know more about my background, skills, and what drives my passion for development. I'm constantly learning and refining my craft to build clean, scalable, and user-friendly interfaces."
            }
          />

          <div className="about-grid">
            <div className="about-column">
              <h3 className="about-column-title">
                My Journey
              </h3>

              <JourneyCard yearsOfExperience={yearsOfExperience} />
              <AboutStats yearsOfExperience={yearsOfExperience} />
            </div>

            <div className="about-column">
              <h3 className="about-column-title about-column-title-left">
                What I Bring
              </h3>

              <div className="about-strengths">
                {strengths.map((strength, index) => (
                  <StrengthCard
                    key={strength.title}
                    title={strength.title}
                    description={strength.description}
                    delayMs={index * 150}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="about-cta">
            <div className="about-cta-panel">
              <span className="about-cta-text">
                Want to work together?
              </span>
              <Button
                href="#contact"
                className="about-cta-button"
              >
                Let&apos;s Connect
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
