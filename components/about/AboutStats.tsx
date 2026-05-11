import Stats from "@/components/ui/Stats";

type AboutStatsProps = {
  yearsOfExperience: number;
};

export default function AboutStats({ yearsOfExperience }: AboutStatsProps) {
  return (
    <Stats
      columns={3}
      items={[
        { value: `${yearsOfExperience}+`, label: "Years Experience" },
        { value: "10+", label: "Projects Completed" },
        { value: "15+", label: "Technologies" },
      ]}
    />
  );
}
