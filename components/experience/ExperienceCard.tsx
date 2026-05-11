import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import TagList from "@/components/ui/TagList";
import AchievementList from "./AchievementList";
import type { ExperienceItem } from "./experienceData";

type ExperienceCardProps = {
  experience: ExperienceItem;
  index: number;
  isEven: boolean;
};

export default function ExperienceCard({ experience, index, isEven }: ExperienceCardProps) {
  return (
    <Card
      variant="glass"
      className={`experience-card-hover ${isEven ? "reveal-left" : "reveal-right"}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="experience-card-header">
        <div className="experience-card-meta">
          <Tag label={experience.type} variant="blue" />
          <span className="experience-location">
            {experience.location}
          </span>
        </div>

        <h3 className="experience-job-title">
          {experience.title}
        </h3>

        <div className="experience-company-row">
          <span className="experience-company gradient-text">
            {experience.company}
          </span>
          <span className="experience-period">
            {experience.period}
          </span>
        </div>
      </div>

      <p className="experience-description">
        {experience.description}
      </p>

      <div className="experience-detail-section">
        <h4 className="experience-detail-title">
          Key Achievements
        </h4>
        <AchievementList achievements={experience.achievements} />
      </div>

      <div>
        <h4 className="experience-detail-title">
          Technologies Used
        </h4>
        <TagList tags={experience.technologies} />
      </div>
    </Card>
  );
}
