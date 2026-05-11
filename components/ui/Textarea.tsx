import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label: string;
};

export default function Textarea({
  id,
  label,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="ui-form-label"
      >
        {label}
      </label>
      <textarea
        id={id}
        className={`ui-textarea ${className}`}
        {...props}
      />
    </div>
  );
}
