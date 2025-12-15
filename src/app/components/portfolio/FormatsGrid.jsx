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
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

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
        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight">
          Available Formats
        </h3>

        {/* Underline animation – centered */}
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
          const tagLabel =
            f.tag === "E"
              ? "Encapsulated"
              : f.tag === "H"
              ? "Heat-Stable"
              : f.tag;

          return (
            <motion.li
              key={f.k}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10
                         bg-white/70 dark:bg-white/[0.06] backdrop-blur"
            >
              {/* animated gradient rail on hover */}
              {/* <span
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b
                           from-primary via-primary/70 to-primary/30 opacity-0 transition-opacity duration-300
                           group-hover:opacity-100"
              /> */}

              {/* ambient glow */}
              {/* <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full
                           bg-gradient-to-br from-primary to-primary/50 blur-3xl opacity-0
                           transition-opacity duration-300 group-hover:opacity-100"
              /> */}

              <div className="relative p-4">
                <div className="flex items-center gap-3">
                  {/* icon disk with bob */}
                  <motion.span
                    aria-hidden
                    className="
    relative inline-flex items-center justify-center
    h-10 w-10 rounded-xl
    text-primary
    flex-shrink-0
  "
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.06,
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.span>

                  {/* text block */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold leading-none">{f.k}</h3>
                      {f.tag && (
                        <span className="text-[10px] px-1.5 py-0.5 border border-primary text-black rounded">
                          {f.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-black/70">{f.blurb}</p>
                  </div>
                </div>
              </div>

              {/* sheen sweep */}
              <motion.span
                aria-hidden
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-12 bg-white/25"
              />
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
