type AchievementListProps = {
  achievements: string[];
};

export default function AchievementList({ achievements }: AchievementListProps) {
  return (
    <ul className="achievement-list">
      {achievements.map((achievement) => (
        <li key={achievement} className="achievement-item">
          <div className="achievement-dot" />
          <span className="achievement-text">
            {achievement}
          </span>
        </li>
      ))}
    </ul>
  );
}
