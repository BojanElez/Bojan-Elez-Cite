import Reveal from "@/components/shared/Reveal";
import SectionTitle from "@/components/shared/SectionTitle";
import { skillCategories } from "./skillCategories";
import SkillsCard from "./SkillsCard";
import SkillsTags from "./SkillsTags";

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills-section"
    >
      <div className="skills-container">
        <Reveal>
          <SectionTitle
            title="My"
            highlightedText="Skills"
            subtitle="A comprehensive overview of my technical skills and expertise across different areas of fullstack development"
          />

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <SkillsCard
                key={category.title}
                category={category}
                categoryIndex={categoryIndex}
              />
            ))}
          </div>

          <div className="skills-tags-slot">
            <SkillsTags />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
