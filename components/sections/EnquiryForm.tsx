"use client";

import { useEffect, useId, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";

import { enquirySchema, type EnquiryInput } from "@/lib/validation/enquiry";
import { submitEnquiry } from "@/lib/actions/submitEnquiry";

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

type FormValues = {
  name: string;
  email: string;
  eventDate: string;
  venue: string;
  message?: string;
  fbclid?: string;
  gclid?: string;
  website?: string;
};

function todayIso() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

type EnquiryFormProps = {
  onSuccess?: () => void;
  variant?: "dark" | "light";
};

export function EnquiryForm({ onSuccess, variant = "dark" }: EnquiryFormProps) {
  const uid = useId();
  const id = (key: string) => `${uid}${key}`;
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const labelColor =
    variant === "dark" ? "text-white/55" : "text-zinc-500";
  const helpColor = variant === "dark" ? "text-white/50" : "text-zinc-500";

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(enquirySchema) as never,
    defaultValues: {
      name: "",
      email: "",
      eventDate: "",
      venue: "",
      message: "",
      fbclid: "",
      gclid: "",
      website: "",
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fbclid = params.get("fbclid");
    const gclid = params.get("gclid");
    if (fbclid) setValue("fbclid", fbclid);
    if (gclid) setValue("gclid", gclid);
  }, [setValue]);

  const onSubmit = handleSubmit((values) => {
    setFormError(null);
    const payload: EnquiryInput = {
      ...values,
      eventDate: new Date(values.eventDate),
      message: values.message ?? "",
      fbclid: values.fbclid ?? "",
      gclid: values.gclid ?? "",
      website: values.website ?? "",
    };
    startTransition(async () => {
      const result = await submitEnquiry(payload);
      if (result.status === "success") {
        setSubmitted(true);
        window.dataLayer?.push({
          event: "generate_lead",
          form_name: "enquiry",
          value: 1900,
          currency: "GBP",
        });
        window.fbq?.("track", "Lead", {
          content_category: "wedding_band_enquiry",
          currency: "GBP",
          value: 1900,
        });
        onSuccess?.();
        return;
      }
      if (result.status === "invalid") {
        for (const [key, message] of Object.entries(result.fieldErrors)) {
          setError(key as keyof FormValues, { type: "server", message });
        }
        setFormError("Please fix the highlighted fields.");
        return;
      }
      setFormError(result.message);
    });
  });

  if (submitted) {
    const successBg =
      variant === "dark"
        ? "bg-white/5 ring-white/10 text-white"
        : "bg-zinc-50 ring-zinc-200 text-zinc-800";
    return (
      <div
        role="status"
        className={`rounded-sm p-10 text-center ring-1 ${successBg}`}
      >
        <CheckCircle2
          className="mx-auto h-10 w-10 text-accent"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <h3 className="mt-6 font-display text-3xl leading-none">
          Message received
        </h3>
        <p className="mx-auto mt-4 max-w-sm text-sm opacity-75">
          Thanks — we&apos;ll come back to you shortly with availability and a
          tailored quote.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-2 text-left"
    >
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </label>
      </div>

      <Field
        label="Your name"
        error={errors.name?.message}
        htmlFor={id("name")}
        labelColor={labelColor}
      >
        <input
          id={id("name")}
          type="text"
          autoComplete="name"
          required
          className={`field-input field-input--${variant}`}
          aria-invalid={!!errors.name}
          {...register("name")}
        />
      </Field>

      <Field
        label="Email address"
        error={errors.email?.message}
        htmlFor={id("email")}
        labelColor={labelColor}
      >
        <input
          id={id("email")}
          type="email"
          autoComplete="email"
          required
          className={`field-input field-input--${variant}`}
          aria-invalid={!!errors.email}
          {...register("email")}
        />
      </Field>

      <div className="grid gap-2 sm:grid-cols-2 sm:gap-6">
        <Field
          label="Event date"
          error={errors.eventDate?.message}
          htmlFor={id("date")}
          labelColor={labelColor}
        >
          <input
            id={id("date")}
            type="date"
            min={todayIso()}
            required
            className={`field-input field-input--${variant}`}
            aria-invalid={!!errors.eventDate}
            {...register("eventDate")}
          />
        </Field>

        <Field
          label="Venue or town"
          error={errors.venue?.message}
          htmlFor={id("venue")}
          labelColor={labelColor}
        >
          <input
            id={id("venue")}
            type="text"
            autoComplete="off"
            required
            className={`field-input field-input--${variant}`}
            aria-invalid={!!errors.venue}
            {...register("venue")}
          />
        </Field>
      </div>

      <Field
        label="Message (optional)"
        error={errors.message?.message}
        htmlFor={id("message")}
        labelColor={labelColor}
      >
        <textarea
          id={id("message")}
          rows={4}
          className={`field-input field-input--${variant} resize-y`}
          {...register("message")}
        />
      </Field>

      <input type="hidden" {...register("fbclid")} />
      <input type="hidden" {...register("gclid")} />

      {formError ? (
        <p role="alert" className="text-sm text-red-400">
          {formError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Sending…" : "Check availability"}
      </button>
      <p className={`mt-1 text-center text-xs ${helpColor}`}>
        Live music packages from £1,900 &middot; fast reply &middot; no
        obligation.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  htmlFor,
  labelColor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  labelColor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span
        className={`block text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${labelColor}`}
      >
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs text-red-400">{error}</span>
      ) : null}
    </label>
  );
}
