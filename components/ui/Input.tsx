import type { InputHTMLAttributes, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  helperText?: ReactNode;
};

export default function Input({
  id,
  label,
  helperText,
  className = "",
  ...props
}: InputProps) {
  const helperId = helperText ? `${id}-helper` : undefined;

  return (
    <div>
      <label
        htmlFor={id}
        className="ui-form-label"
      >
        {label}
      </label>
      <input
        id={id}
        aria-describedby={helperId}
        className={`ui-input ${className}`}
        {...props}
      />
      {helperText && (
        <p id={helperId} className="ui-form-helper">
          {helperText}
        </p>
      )}
    </div>
  );
}
