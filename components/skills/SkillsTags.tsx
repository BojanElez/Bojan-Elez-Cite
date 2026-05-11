import Tag, { type TagVariant } from "@/components/ui/Tag";

const tags: { label: string; variant: TagVariant }[] = [
  { label: "Frontend Expert", variant: "blue" },
  { label: "Backend Specialist", variant: "green" },
  { label: "TypeScript Advocate", variant: "purple" },
  { label: "Performance Optimizer", variant: "orange" },
  { label: "UX Focused", variant: "pink" },
  { label: "Cloud Enthusiast", variant: "blue" },
];

export default function SkillsTags() {
  return (
    <div className="skills-tags">
      {tags.map((tag) => (
        <Tag
          key={tag.label}
          label={tag.label}
          variant={tag.variant}
          size="sm"
        />
      ))}
    </div>
  );
}
