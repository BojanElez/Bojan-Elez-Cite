import Card from "@/components/ui/Card";
import { CalendarDaysIcon, ExternalLinkIcon } from "@/components/ui/InlineIcons";
import type { CertificationItem } from "./educationData";

type CertificationCardProps = {
  item: CertificationItem;
};

export default function CertificationCard({ item }: CertificationCardProps) {
  return (
    <Card variant="glassSmall" className="education-card">
      <div className="cert-card-header">
        <h4 className="cert-name">
          {item.name}
        </h4>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View certification"
            className="cert-link"
          >
            <ExternalLinkIcon size={16} />
          </a>
        )}
      </div>

      <p className="cert-issuer">
        {item.issuer}
      </p>

      <p className="cert-description">
        {item.description}
      </p>

      <div className="cert-meta">
        <span className="cert-date">
          <CalendarDaysIcon size={13} />
          Issued: {item.date}
        </span>
        {item.credentialId && <span>ID: {item.credentialId}</span>}
      </div>
    </Card>
  );
}
