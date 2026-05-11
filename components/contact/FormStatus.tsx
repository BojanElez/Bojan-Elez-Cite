import { CheckCircleIcon, XCircleIcon } from "@/components/ui/InlineIcons";

export type SubmitStatus = "idle" | "success" | "error";

type FormStatusProps = {
  status: SubmitStatus;
};

export default function FormStatus({ status }: FormStatusProps) {
  if (status === "idle") {
    return null;
  }

  if (status === "success") {
    return (
      <div className="form-status-success">
        <p className="form-status-success-text">
          <CheckCircleIcon size={18} />
          Message sent successfully! I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="form-status-error">
      <p className="form-status-error-text">
        <XCircleIcon size={18} />
        There was an error sending your message. Please try again or contact me
        directly.
      </p>
    </div>
  );
}
