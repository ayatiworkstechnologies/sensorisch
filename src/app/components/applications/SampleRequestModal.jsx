"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import Button from "../ui/Button";

export default function SampleRequestModal({ open, onClose, subject }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Prevents scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  /* ===== FORM SUBMIT ===== */
  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_qzvuh3m",
        "template_5u8l2vq",
        {
          title: subject,
          subject,
          name: data.name,
          company: data.company, // ✅ added
          email: data.email,
          mobile: data.mobile,
          message: data.message,
        },
        "mCbYhCaGgh5O1Bjjy",
      );

      reset();
      onClose();

      toast.success("Request submitted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center px-4"
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white w-full max-w-lg rounded-2xl p-8 relative shadow-2xl"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-black hover:text-primary transition-colors p-1 rounded-full hover:bg-primary/5"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>

          <h3 className="text-2xl  mb-1 text-primary tracking-tight">
            {subject}
          </h3>
          <p className="text-sm text-black mb-8 font-secondary">
            Provide your details below to receive product specifications.
          </p>

          {/* ===== FORM ===== */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Hidden auto title */}
            <input type="hidden" value={subject} {...register("title")} />

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-xs  text-black uppercase tracking-wider mb-1.5 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  {...register("name", { required: "Name is required" })}
                  className="w-full border border-black/10 rounded-lg px-4 py-3 font-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium ml-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs  text-black uppercase tracking-wider mb-1.5 ml-1">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full border border-black/10 rounded-lg px-4 py-3 font-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium ml-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Mobile & Company Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Mobile */}
              <div>
                <label className="block text-xs  text-black uppercase tracking-wider mb-1.5 ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 99999 99999"
                  {...register("mobile", {
                    required: "Mobile number is required",
                    minLength: {
                      value: 10,
                      message: "Enter valid mobile number",
                    },
                  })}
                  className="w-full border border-black/10 rounded-lg px-4 py-3 font-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50"
                />
                {errors.mobile && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium ml-1">
                    {errors.mobile.message}
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs  text-black uppercase tracking-wider mb-1.5 ml-1">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Organization"
                  {...register("company", {
                    required: "Company name is required",
                  })}
                  className="w-full border border-black/10 rounded-lg px-4 py-3 font-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50"
                />
                {errors.company && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium ml-1">
                    {errors.company.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs  text-black uppercase tracking-wider mb-1.5 ml-1">
                Additional Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your application or project needs..."
                {...register("message")}
                className="w-full border border-black/10 rounded-lg px-4 py-3 font-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 text-sm uppercase tracking-widest shadow-xl"
            >
              {isSubmitting ? "Processing..." : "Submit Sample Request"}
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
