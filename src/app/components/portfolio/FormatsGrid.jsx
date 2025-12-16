// app/components/FormatsGrid.jsx
"use client";

import { motion } from "framer-motion";
import {
  Droplet,
  Beaker,
  FlaskConical,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const DEFAULT_FORMATS = [
  { k: "Liquids", blurb: "Easy dosing & mixing", icon: Droplet },
  { k: "Powders", blurb: "Extended shelf-life", icon: Beaker },
  { k: "Emulsions", blurb: "Superior stability", icon: FlaskConical },
  { k: "Encapsulated", blurb: "Controlled release", icon: BadgeCheck },
  { k: "Heat-Stable", blurb: "Process resilient", icon: Sparkles },
];

export default function FormatsGrid({ formats = DEFAULT_FORMATS }) {
  return (
    <section className="section-container py-12">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h3 className="section-title font-semibold text-black">
          Available Formats
        </h3>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 112 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-2 mx-auto h-[2px] bg-primary rounded"
        />
      </motion.div>

      {/* Grid */}
      <motion.ul
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        role="list"
        aria-label="Available formats"
      >
        {formats.map((f, i) => {
          const Icon = f.icon ?? Droplet;

          return (
            <motion.li
              key={f.k}
              variants={fadeUp}
              className="
                h-full
                border border-black/10
                rounded-xl
                bg-white
              "
            >
              {/* Card content */}
              <div className="flex h-full items-center p-5">
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <span className="inline-flex h-10 w-10 items-center justify-center text-primary">
                    <Icon className="h-7 w-7" />
                  </span>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="font-semibold text-black leading-tight">
                      {f.k}
                    </h3>
                    <p className="mt-1 text-sm text-black/70">
                      {f.blurb}
                    </p>
                  </div>
                </div>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
