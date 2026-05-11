"use client";

import { useActionState, useRef, useState, type ChangeEventHandler } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { LoaderCircleIcon } from "@/components/ui/InlineIcons";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import FileInput from "./FileInput";
import FormStatus, { type SubmitStatus } from "./FormStatus";
import { FormState, submitContactForm } from "./action";

export default function ContactForm() {
  const [currentState, formAction, isPending] = useActionState<
    FormState,
    FormData
  >(submitContactForm, {});
  const [attachment, setAttachment] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0] ?? null;
    if (file && file.size > 5 * 1024 * 1024) {
      alert("File size must be under 5 MB.");
      event.target.value = "";
      return;
    }
    setAttachment(file);
  };

  const removeAttachment = () => {
    setAttachment(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const submitStatus: SubmitStatus =
    currentState.success === true
      ? "success"
      : currentState.success === false
        ? "error"
        : "idle";

  return (
    <Card variant="glass" className="contact-form-card">
      <form action={formAction} className="contact-form">
        <div className="contact-form-grid">
          <Input
            type="text"
            id="name"
            name="name"
            label="Your Name *"
            required
            placeholder="John Doe"
          />

          <Input
            type="email"
            id="email"
            name="email"
            label="Email Address *"
            required
            placeholder="john@example.com"
          />
        </div>

        <Input
          type="text"
          id="subject"
          name="subject"
          label="Subject *"
          required
          placeholder="Project Inquiry"
        />

        <Textarea
          id="message"
          name="message"
          label="Message *"
          required
          rows={6}
          placeholder="Tell me about your project, timeline, and how I can help..."
        />

        <FileInput
          attachment={attachment}
          fileInputRef={fileInputRef}
          onChange={handleFileChange}
          onRemove={removeAttachment}
        />

        <FormStatus status={submitStatus} />

        <Button
          type="submit"
          fullWidth
          disabled={isPending}
          className="contact-submit"
        >
          {isPending ? (
            <span className="contact-submit-pending">
              <LoaderCircleIcon className="contact-submit-spinner" />
              Sending Message...
            </span>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Card>
  );
}
