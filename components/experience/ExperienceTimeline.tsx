import ExperienceCard from "./ExperienceCard";
import type { ExperienceItem } from "./experienceData";

type ExperienceTimelineProps = {
  experiences: ExperienceItem[];
};

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="experience-timeline">
      <div className="experience-timeline-line" />

      <div className="experience-timeline-items">
        {experiences.map((experience, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={`${experience.company}-${experience.period}`}
              className={`experience-timeline-item ${
                isEven ? "experience-timeline-even" : "experience-timeline-odd"
              }`}
            >
              <div
                className="experience-timeline-dot"
                style={{ animationDelay: `${index * 200}ms` }}
              />

              <div
                className={`experience-card-shell ${
                  isEven ? "experience-card-shell-even" : "experience-card-shell-odd"
                }`}
              >
                <ExperienceCard
                  experience={experience}
                  index={index}
                  isEven={isEven}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
