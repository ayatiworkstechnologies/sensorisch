"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const pills = [
  { label: "International Standards" },
  { label: "FSSAI Compliant" },
  { label: "Clean Label" },
  { label: "Sustainable Sourcing" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const pillItem = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function QualityResponsibility() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-gray-50/50"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="section-container text-center"
      >
        {/* Title */}
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="section-title text-black font-bold tracking-tight">
            Quality & Responsibility
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mx-auto mt-4 h-[3px] bg-primary rounded-full"
          />
        </motion.div>

        <motion.p 
          variants={fadeUp}
          className="text-xl font-secondary text-black/70 max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Validated clean-label guidance, multi-region regulatory compliance,
          and responsibly sourced ingredients — engineered into every solution we architect.
        </motion.p>

        {/* Pills */}
        <motion.ul
          variants={container}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {pills.map((p) => (
            <motion.li key={p.label} variants={pillItem}>
              <motion.span
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex items-center font-secondary font-semibold rounded-2xl 
                  px-8 py-4 text-sm sm:text-base tracking-wide
                  bg-white text-gray-900 shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                  border border-black/5 hover:border-primary/20 hover:text-primary
                  transition-colors duration-300
                "
              >
                {p.label}
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10 opacity-50" />
    </section>
  );
}
