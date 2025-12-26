"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, Children, cloneElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  UploadCloud,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import emailjs from "@emailjs/browser";

/* ---------------- Schema ---------------- */
const FormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  company: z.string().optional(),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  inquiryType: z.string().optional(),
  application: z.string().optional(),
  projectDetails: z.string().optional(),
  additionalInfo: z.string().optional(),
});

export default function FormSection() {
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const totalSizeMB = useMemo(
    () =>
      (files.reduce((a, f) => a + (f.size || 0), 0) / (1024 * 1024)).toFixed(2),
    [files]
  );

  const onPickFiles = (e) => {
    setFiles(Array.from(e.target.files || []));
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
    setServerError("");
    setSent(false);

    try {
      await emailjs.send(
        "service_658qu6f",
        "template_9l9fhel",
        data,
        "3HrWnx7n23xp9zGfl"
      );
      setSent(true);
      reset();
      setFiles([]);
    } catch {
      setServerError("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="section-container font-secondary text-lg py-12"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-xl border border-black/10 bg-white p-6 md:p-8"
      >
        {/* Header */}
        <div className="text-center">
          <h3 className="section-title font-semibold text-black">
            Get in Touch
          </h3>
          <div className="mx-auto mt-2 h-[2px] w-28 bg-primary rounded" />
          <p className="mt-2 text-xl text-black/70">
            Tell us about your project and we’ll get back within 24 hours.
          </p>
        </div>

        {/* First Name + Company */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Field label="Full Name" error={errors.fullName?.message}>
            <Input
              placeholder="Enter your full name"
              {...register("fullName")}
            />
          </Field>

          <Field label="Company" icon={MapPin}>
            <Input
              placeholder="Enter your company name"
              {...register("company")}
            />
          </Field>
        </div>

        {/* Email + Phone */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Field label="Email" icon={Mail} error={errors.email?.message}>
            <Input
              placeholder="Enter your email address"
              {...register("email")}
            />
          </Field>

          <Field label="Phone" icon={Phone}>
            <Input
              placeholder="Enter your phone number"
              {...register("phone")}
            />
          </Field>
        </div>

        {/* Selects */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Field label="Inquiry Type">
            <Select
              {...register("inquiryType")}
              placeholder="Select inquiry type"
              options={[
                "General",
                "Samples",
                "Bespoke Project",
                "Technical Consultation",
              ]}
            />
          </Field>

          <Field label="Application Area">
            <Select
              {...register("application")}
              placeholder="Select application area"
              options={[
                "Bakery",
                "Beverages",
                "Dairy",
                "Confectionery",
                "Health & Wellness",
              ]}
            />
          </Field>
        </div>

        {/* Project Details */}
        <Field className="mt-4" label="Project Details" icon={HelpCircle}>
          <TextArea
            rows={5}
            placeholder="Describe your requirements, targets, timeline, or challenges"
            {...register("projectDetails")}
          />
        </Field>

        {/* Upload */}
        <div className="mt-4">
          <label className="text-lg font-medium">Attach Files</label>
          <label className="mt-2 block cursor-pointer rounded-md border border-black/10 p-4 text-lg">
            <input
              type="file"
              multiple
              className="hidden"
              onChange={onPickFiles}
            />
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-black/70">
                <UploadCloud className="h-4 w-4" />
                Upload supporting files
              </span>
              <span className="text-xs border border-primary px-2 py-1 rounded">
                Browse
              </span>
            </div>
            <p className="mt-1 text-xs text-black/60">
              {files.length
                ? `${files.length} file(s) • ${totalSizeMB} MB`
                : "Optional specifications, briefs, or references"}
            </p>
          </label>
        </div>

        {/* Additional Info */}
        <Field className="mt-4" label="Additional Information">
          <TextArea
            rows={3}
            placeholder="Any additional notes or information"
            {...register("additionalInfo")}
          />
        </Field>

        {/* Submit */}
        <div className="mt-6 flex items-center gap-3">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-5 py-2.5 text-lg font-semibold text-white hover:bg-primary/90 disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send Message"}
            <ArrowRight className="h-4 w-4" />
          </button>
          <span className="text-lg text-black/60">
            Response within 24 hours
          </span>
        </div>

        <AnimatePresence>
          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 text-xs text-emerald-600 flex items-center gap-1"
            >
              <CheckCircle2 className="h-4 w-4" />
              Message sent successfully
            </motion.p>
          )}
        </AnimatePresence>

        {serverError && (
          <p className="mt-3 text-xs text-red-600">{serverError}</p>
        )}
      </form>
    </section>
  );
}

/* ---------- UI Primitives ---------- */

function Field({ label, icon: Icon, error, className = "", children }) {
  const hasIcon = Boolean(Icon);

  const input = cloneElement(Children.only(children), {
    className: [
      "w-full rounded-md border border-black/20 bg-transparent py-2 text-lg outline-none",
      "focus:border-primary focus:ring-1 focus:ring-primary/30",
      "placeholder:text-black/40",
      hasIcon ? "pl-10 pr-3" : "px-3",
    ].join(" "),
  });

  return (
    <div className={`space-y-1 ${className}`}>
      <label className="text-lg font-medium text-black">{label}</label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40 pointer-events-none" />
        )}
        {input}
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

const Input = (props) => <input {...props} />;

const Select = ({ options, placeholder, ...props }) => (
  <select
    {...props}
    defaultValue=""
    className="w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-lg text-black"
  >
    <option value="" disabled>
      {placeholder}
    </option>
    {options.map((o) => (
      <option key={o} value={o}>
        {o}
      </option>
    ))}
  </select>
);

const TextArea = (props) => (
  <textarea
    {...props}
    className="w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-lg placeholder:text-black/40"
  />
);
