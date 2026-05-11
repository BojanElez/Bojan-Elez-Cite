import type { ReactNode } from "react";

type StatItem = {
  value: ReactNode;
  label: string;
};

type StatsProps = {
  items: StatItem[];
  columns?: 3 | 4;
  className?: string;
};

const columnClasses: Record<3 | 4, string> = {
  3: "stats-grid-3",
  4: "stats-grid-4",
};

export default function Stats({ items, columns = 3, className = "" }: StatsProps) {
  return (
    <div className={`stats-grid ${columnClasses[columns]} ${className}`}>
      {items.map((item) => (
        <div key={item.label} className="stat-item">
          <div className="stat-value gradient-text">{item.value}</div>
          <div className="stat-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
