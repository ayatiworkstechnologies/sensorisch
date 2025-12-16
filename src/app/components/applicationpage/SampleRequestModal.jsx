"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function SampleRequestModal({
  open,
  onClose,
  subject,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

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
          email: data.email,
          mobile: data.mobile,
          message: data.message,
        },
        "mCbYhCaGgh5O1Bjjy"
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
        className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-white w-full max-w-lg rounded-2xl p-6 relative"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-black"
          >
            ✕
          </button>

          <h3 className="text-2xl font-semibold mb-1">{subject}</h3>
          <p className="text-sm text-gray-500 mb-6">
            Please fill in your details
          </p>

          {/* ===== FORM ===== */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Hidden auto title */}
            <input type="hidden" value={subject} {...register("title")} />

            {/* Name */}
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="w-full border  border-black/10 rounded-md px-4 py-3"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full border  border-black/10 rounded-md px-4 py-3"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}

            {/* Mobile */}
            <input
              type="tel"
              placeholder="Mobile Number"
              {...register("mobile", {
                required: "Mobile number is required",
                minLength: {
                  value: 10,
                  message: "Enter valid mobile number",
                },
              })}
              className="w-full border  border-black/10 rounded-md px-4 py-3"
            />
            {errors.mobile && (
              <p className="text-sm text-red-500">{errors.mobile.message}</p>
            )}

            {/* Message */}
            <textarea
              rows={4}
              placeholder="Message"
              {...register("message")}
              className="w-full border  border-black/10 rounded-md px-4 py-3"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-primary py-3 text-white font-semibold hover:bg-primary/90 transition disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
