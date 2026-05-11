import IconBadge from "@/components/shared/IconBadge";
import { AwardIcon, GraduationCapIcon } from "@/components/ui/InlineIcons";
import Reveal from "@/components/shared/Reveal";
import SectionTitle from "@/components/shared/SectionTitle";
import CertificationCard from "./CertificationCard";
import EducationCard from "./EducationCard";
import { certifications, education } from "./educationData";

const Education = () => {
  return (
    <section
      id="education"
      className="education-section"
    >
      <div className="education-container">
        <Reveal>
          <SectionTitle
            title="Education &"
            highlightedText="Certifications"
            subtitle="My educational background and continuous learning journey in technology and software development"
          />

          <div className="education-grid">
            <Reveal direction="left">
              <h3 className="education-column-title">
                <IconBadge>
                  <GraduationCapIcon size={20} />
                </IconBadge>
                Formal Education
              </h3>

              <div className="education-card-stack">
                {education.map((item) => (
                  <EducationCard key={`${item.degree}-${item.institution}`} item={item} />
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" delayMs={200}>
              <h3 className="education-column-title">
                <IconBadge>
                  <AwardIcon size={20} />
                </IconBadge>
                Certifications
              </h3>

              <div className="education-card-stack">
                {certifications.map((item) => (
                  <CertificationCard key={item.name} item={item} />
                ))}
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;
