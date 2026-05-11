import type { SkillCategory } from "./skillCategories";
import SkillBar from "./SkillBar";

type SkillsCardProps = {
  category: SkillCategory;
  categoryIndex: number;
};

const helperText: Record<string, string> = {
  "Languages & Frameworks": "Core technologies I use daily",
  "Tools & Technologies": "Essential tools in my workflow",
  "Other Skills": "Soft skills and methodologies",
};

export default function SkillsCard({ category, categoryIndex }: SkillsCardProps) {
  const Icon = category.icon;

  return (
    <div
      className="skills-card"
      style={{ animationDelay: `${categoryIndex * 200}ms` }}
    >
      <div className="skills-card-header">
        <div className="skills-card-icon">
          <Icon size={40} />
        </div>
        <h3 className="skills-card-title">
          {category.title}
        </h3>
      </div>

      <div className="skills-list">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delayMs={categoryIndex * 200 + skillIndex * 50}
          />
        ))}
      </div>

      <div className="skills-helper">
        <p className="skills-helper-text">
          {helperText[category.title]}
        </p>
      </div>
    </div>
  );
}
