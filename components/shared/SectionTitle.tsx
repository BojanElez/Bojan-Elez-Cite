type SectionTitleProps = {
  title: string;
  highlightedText?: string;
  subtitle: string;
  className?: string;
};

export default function SectionTitle({
  title,
  highlightedText,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`section-title ${className}`}>
      <h2 className="section-heading">
        {title}
        {highlightedText && (
          <>
            {" "}
            <span className="gradient-text">{highlightedText}</span>
          </>
        )}
      </h2>
      <p className="section-subtitle">
        {subtitle}
      </p>
    </div>
  );
}
