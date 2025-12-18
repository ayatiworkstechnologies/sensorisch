// components/QualityResponsibility.jsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const pills = [
  { label: "International Standards" },
  { label: "FSSAI Compliant" },
  { label: "Clean Label" },
  { label: "Sustainable Sourcing" },
];

// animations
const container = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};
const word = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function QualityResponsibility() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 20%"],
  });
  useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 }); // kept for potential use

  return (
    <section ref={sectionRef} className="py-20 md: mt-10 relative overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="section-container text-center"
      >
        {/* Title */}
        <motion.h2 className="section-title text-black flex items-center justify-center gap-2 flex-wrap">
          
          <motion.span variants={word} className="text-black">
            Quality & Responsibility
          </motion.span>
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 112 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-6 h-[2px] bg-primary"
        />

        <p className="section-paragraph text-lg max-w-3xl mx-auto">
          Clean-label guidance, regional compliance, batch consistency, and
          responsible sourcing built into every solution we deliver.
        </p>

        {/* Pills */}
        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {pills.map((p) => (
            <motion.li key={p.label} variants={item}>
              <motion.span
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  inline-flex items-center font-secondary rounded-lg 
                  px-4 py-2 text-lg sm:text-base
                  bg-white text-black ring-1 ring-primary/50 
                  transition-transform
                `}
              >
                {p.label}
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
