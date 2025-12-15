"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FlaskConical, Timer } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

export default function QualityComplianceSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-container py-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold text-black leading-tight">
            Quality &amp; Compliance Assurance
          </h3>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-2 mx-auto h-[2px] bg-primary rounded"
          />
        </motion.div>

        {/* Features */}
        <motion.ul
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          <Feature
            Icon={ShieldCheck}
            title="Global Standards"
            points={["FSSAI", "FDA", "EU compliance"]}
          />
          <Feature
            Icon={FlaskConical}
            title="Rigorous Testing"
            points={["Stability studies", "Shelf-life validation"]}
          />
          <Feature
            Icon={Timer}
            title="Fast Turnaround"
            points={["Rapid prototyping", "Quick sampling"]}
          />
        </motion.ul>
      </div>
    </section>
  );
}

function Feature({ Icon, title, points }) {
  return (
    <motion.li
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="
        relative rounded-2xl
        bg-white
        border border-primary/30
        p-5 md:p-6
      "
    >
      <div className="flex items-start gap-4">
        {/* ICON */}
        <span className="grid place-items-center size-10 rounded-xl">
          <Icon className="h-8 w-8 text-black" />
        </span>

        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-black">{title}</h3>

          <ul className="mt-2 space-y-1.5 text-sm text-black/75">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          {/* VIEW SOPs BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="
              mt-4 inline-flex items-center
              text-[11px] uppercase tracking-wider font-semibold
              text-black
              border border-primary
              bg-transparent
              px-4 py-1.5 rounded-full
              transition hover:bg-primary/5
            "
          >
            View SOPs &gt;
          </motion.button>
        </div>
      </div>
    </motion.li>
  );
}
