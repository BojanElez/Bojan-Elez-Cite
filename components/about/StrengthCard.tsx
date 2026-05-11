import Card from "@/components/ui/Card";

type StrengthCardProps = {
  title: string;
  description: string;
  delayMs?: number;
};

export default function StrengthCard({ title, description, delayMs }: StrengthCardProps) {
  return (
    <Card variant="cyanAnimated" delayMs={delayMs}>
      <div className="about-strength-content">
        <div>
          <h4 className="about-strength-title">
            {title}
          </h4>
          <p className="about-strength-description">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
