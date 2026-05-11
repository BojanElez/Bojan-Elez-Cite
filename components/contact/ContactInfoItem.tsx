import type { ReactNode } from "react";

type ContactInfoItemProps = {
  icon: ReactNode;
  label: string;
  value: string;
  link: string;
};

export default function ContactInfoItem({
  icon,
  label,
  value,
  link,
}: ContactInfoItemProps) {
  const isLinked = link !== "#";
  const isExternal = isLinked && !link.startsWith("mailto:");

  return (
    <div className="contact-info-item">
      <div className="contact-info-icon">
        {icon}
      </div>
      <div className="contact-info-body">
        <p className="contact-info-label">
          {label}
        </p>
        {isLinked ? (
          <a
            href={link}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="contact-info-link"
          >
            {value}
          </a>
        ) : (
          <span className="contact-info-value">
            {value}
          </span>
        )}
      </div>
    </div>
  );
}
