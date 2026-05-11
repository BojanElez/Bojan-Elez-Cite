import Card from "@/components/ui/Card";
import { CalendarDaysIcon, MapPinIcon } from "@/components/ui/InlineIcons";
import Tag from "@/components/ui/Tag";
import type { EducationItem } from "./educationData";

type EducationCardProps = {
  item: EducationItem;
};

export default function EducationCard({ item }: EducationCardProps) {
  return (
    <Card variant="glassSmall" className="education-card">
      <div className="education-card-header">
        <div className="education-degree-row">
          <Tag label={item.degree} variant="blue" />
        </div>
        <h4 className="education-field">
          {item.field}
        </h4>
        <p className="education-institution">
          {item.institution}
        </p>
        <div className="education-meta">
          <span className="education-meta-item">
            <CalendarDaysIcon size={13} />
            {item.period}
          </span>
          <span className="education-meta-item">
            <MapPinIcon size={13} />
            {item.location}
          </span>
        </div>
      </div>

      <p className="education-description">
        {item.description}
      </p>

      <div>
        <h5 className="education-highlights-title">
          Key Highlights
        </h5>
        <ul className="education-highlights">
          {item.highlights.map((highlight) => (
            <li
              key={highlight}
              className="education-highlight"
            >
              <span className="education-highlight-dot" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
