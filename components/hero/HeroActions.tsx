import Button from "@/components/ui/Button";

export default function HeroActions() {
  return (
    <div className="hero-actions">
      <Button
        href="#experience"
        className="hero-primary-action"
      >
        View Experience
      </Button>
      <Button
        variant="secondary"
        href="#contact"
        className="hero-secondary-action"
      >
        Get In Touch
      </Button>
    </div>
  );
}
