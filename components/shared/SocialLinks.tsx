import type { ReactNode } from "react";
import { MailIcon } from "@/components/ui/InlineIcons";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { profile, profileHref } from "@/lib/profile";

export type SocialLink = {
  name: string;
  url: string;
  Icon: (props: { className?: string }) => ReactNode;
  external?: boolean;
};

type SocialLinksProps = {
  links?: SocialLink[];
  variant?: "hero" | "footer";
};

export const defaultSocialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: profile.links.github,
    Icon: GitHubIcon,
    external: true,
  },
  {
    name: "LinkedIn",
    url: profile.links.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    name: "Email",
    url: profileHref.email,
    Icon: MailIcon,
  },
];

const variantClasses = {
  hero: "social-link-hero",
  footer: "social-link-footer",
};

export default function SocialLinks({
  links = defaultSocialLinks,
  variant = "hero",
}: SocialLinksProps) {
  const iconClassName = variant === "footer" ? "social-icon-footer" : "social-icon-hero";

  return (
    <div className="social-links">
      {links.map(({ name, url, Icon, external }) => (
        <a
          key={name}
          href={url}
          target={external ? "_blank" : "_self"}
          rel={external ? "noopener noreferrer" : undefined}
          className={variantClasses[variant]}
          aria-label={name}
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
}
