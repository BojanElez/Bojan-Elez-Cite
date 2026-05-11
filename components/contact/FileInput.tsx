import type { ChangeEventHandler, RefObject } from "react";
import { PaperclipIcon, XIcon } from "@/components/ui/InlineIcons";

type FileInputProps = {
  attachment: File | null;
  fileInputRef: RefObject<HTMLInputElement | null>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onRemove: () => void;
};

export default function FileInput({
  attachment,
  fileInputRef,
  onChange,
  onRemove,
}: FileInputProps) {
  return (
    <div>
      <label
        htmlFor="attachment"
        className="ui-form-label"
      >
        Attachment{" "}
        <span className="file-input-note">(optional, max 5 MB)</span>
      </label>
      <div className="file-input-wrap">
        <input
          type="file"
          id="attachment"
          name="attachment"
          ref={fileInputRef}
          onChange={onChange}
          accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.zip"
          className="file-input-hidden"
        />
        {attachment ? (
          <div className="file-attached">
            <div className="file-attached-content">
              <PaperclipIcon className="file-attached-icon" />
              <span className="file-attached-name">
                {attachment.name}
              </span>
              <span className="file-attached-size">
                ({(attachment.size / 1024).toFixed(1)} KB)
              </span>
            </div>
            <button
              type="button"
              onClick={onRemove}
              className="file-remove"
              aria-label="Remove attachment"
            >
              <XIcon size={20} />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="file-picker"
          >
            <PaperclipIcon size={20} />
            <span className="file-picker-text">Attach a file</span>
          </button>
        )}
      </div>
    </div>
  );
}
