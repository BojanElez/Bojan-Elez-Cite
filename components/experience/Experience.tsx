import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Stats from "@/components/ui/Stats";
import Reveal from "@/components/shared/Reveal";
import SectionTitle from "@/components/shared/SectionTitle";
import { getYearsOfExperience } from "@/lib/useYearsOfExperience";
import { experiences } from "./experienceData";
import ExperienceTimeline from "./ExperienceTimeline";

const Experience = () => {
  const yearsOfExperience = getYearsOfExperience();

  return (
    <section
      id="experience"
      className="experience-section"
    >
      <div className="experience-container">
        <Reveal>
          <SectionTitle
            title="Work"
            highlightedText="Experience"
            subtitle="My professional journey and the impact I've made in various organizations"
          />

          <ExperienceTimeline experiences={experiences} />

          <div className="experience-note">
            <p className="experience-note-text">
              <strong>Important:</strong> Please replace all placeholder content
              above with your actual work experience from your resume. Update job
              titles, companies, dates, descriptions, and achievements.
            </p>
            <Button href="/Bojan_Elez_Resume.pdf" download="Bojan_Elez_Resume.pdf" className="resume-download">Download Full Resume</Button>
          </div>

          <div className="experience-summary">
            <Card variant="glass" className="experience-summary-card">
              <h3 className="experience-summary-title">
                Professional Summary
              </h3>
              <p className="experience-summary-text">
                Full-Stack Engineer with {yearsOfExperience}+ years of experience
                building scalable web applications across fintech, SaaS, and
                enterprise platforms. Proficient in React, Java, TypeScript, Node.js,
                and SQL, with a strong track record of delivering end-to-end
                solutions from designing REST APIs and backend services to
                crafting performant, accessible frontends. AWS Certified Cloud
                Practitioner with a background in Mechanical Engineering,
                bringing analytical rigor and systematic problem-solving to every
                project.
              </p>

              <Stats
                columns={4}
                className="experience-summary-stats"
                items={[
                  { value: `${yearsOfExperience}+`, label: "Years Experience" },
                  { value: "4", label: "Companies" },
                  { value: "10+", label: "Projects" },
                  { value: "15+", label: "Technologies" },
                ]}
              />
            </Card>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
