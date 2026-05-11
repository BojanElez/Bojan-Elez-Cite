import Tag, { type TagVariant } from "./Tag";

type TagListProps = {
  tags: string[];
  variant?: TagVariant;
};

export default function TagList({ tags, variant = "gray" }: TagListProps) {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <Tag key={tag} label={tag} variant={variant} />
      ))}
    </div>
  );
}
