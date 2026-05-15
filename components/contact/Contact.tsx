import Card from "@/components/ui/Card";
import { MailIcon, MapPinIcon } from "@/components/ui/InlineIcons";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/BrandIcons";
import { profile, profileHref } from "@/lib/profile";
import Reveal from "@/components/shared/Reveal";
import SectionTitle from "@/components/shared/SectionTitle";
import ContactInfoItem from "./ContactInfoItem";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    icon: <MailIcon size={24} />,
    label: "Email",
    value: profile.email,
    link: profileHref.email,
  },
  {
    icon: <LinkedInIcon className="contact-brand-icon" />,
    label: "LinkedIn",
    value: "/in/bojan-elez",
    link: profile.links.linkedin,
  },
  {
    icon: <GitHubIcon className="contact-brand-icon" />,
    label: "GitHub",
    value: "/bojanelez",
    link: profile.links.github,
  },
  {
    icon: <MapPinIcon size={24} />,
    label: "Location",
    value: profile.location,
    link: profile.links.map,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="contact-container">
        <Reveal>
          <SectionTitle
            title="Get In"
            highlightedText="Touch"
            subtitle={
              "I'm always open to discussing new opportunities, collaborating on exciting projects, or just having a conversation about technology and development."
            }
          />

          <div className="contact-grid">
            <Reveal direction="left">
              <h3 className="contact-column-title">
                Let&apos;s Connect
              </h3>

              <div className="contact-list">
                {contactInfo.map((item) => (
                  <ContactInfoItem key={item.label} {...item} />
                ))}
              </div>

              <Card variant="glassSmall">
                <h4 className="contact-project-title">
                  Ready to Start a Project?
                </h4>
                <p className="contact-project-copy">
                  Whether you&apos;re looking to build a new application, improve an
                  existing one, or need consultation on fullstack development,
                  I&apos;d love to hear about your project.
                </p>
                <div className="contact-action-row">
                  <a
                    href={profileHref.emailProjectInquiry}
                    className="contact-action-primary gradient-bg"
                  >
                    Email Me Directly
                  </a>
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-action-secondary"
                  >
                    LinkedIn Message
                  </a>
                </div>
              </Card>
            </Reveal>

            <Reveal direction="right" delayMs={200}>
              <h3 className="contact-form-title">
                Send a Message
              </h3>
              <ContactForm />
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
