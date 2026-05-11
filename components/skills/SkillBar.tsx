type SkillBarProps = {
  name: string;
  level: number;
  delayMs?: number;
};

export default function SkillBar({ name, level, delayMs = 0 }: SkillBarProps) {
  return (
    <div className="skill-row">
      <div className="skill-label-row">
        <span className="skill-label">
          {name}
        </span>
      </div>

      <div className="skill-meter">
        <div
          className="skill-meter-fill"
          style={{
            width: `${level}%`,
            animationDelay: `${delayMs}ms`,
          }}
        />
      </div>
    </div>
  );
}
