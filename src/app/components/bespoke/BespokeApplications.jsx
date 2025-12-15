"use client";

import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const APPLICATIONS = [
  {
    title: "Premium Beverages",
    blurb:
      "Signature flavour profiles for craft sodas, artisanal teas, and specialty coffee blends",
  },
  {
    title: "Artisan Bakery",
    blurb:
      "Exclusive flavours for gourmet cakes, specialty breads, and premium pastries.",
  },
  {
    title: "Health & Wellness",
    blurb:
      "Palatable solutions for nutraceuticals, protein supplements, and functional foods.",
  },
  {
    title: "Luxury Confectionery",
    blurb:
      "Sophisticated taste experiences for premium chocolates and artisanal sweets.",
  },
  {
    title: "Dairy Innovation",
    blurb:
      "Unique profiles for premium ice creams, specialty yogurts, and craft cheeses.",
  },
  {
    title: "Personal Care",
    blurb:
      "Refreshing notes for premium oral care and personal hygiene products.",
  },
];

export default function BespokeApplicationsAlt() {
  return (
    <section className="relative overflow-hidden bg-background text-black">
      <div className="section-container py-8 md:py-12">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold text-black leading-tight">
            Bespoke Applications
          </h3>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-2 mx-auto h-[2px] bg-primary rounded"
          />
        </motion.div>

        {/* Rows */}
        <div className="relative mx-auto mt-10 md:mt-14 max-w-5xl">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-primary/30" />

          <ol className="relative z-10 space-y-8 md:space-y-12">
            {APPLICATIONS.map((a, i) => (
              <RibbonRow key={a.title} index={i} {...a} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function RibbonRow({ index, title, blurb }) {
  const left = index % 2 === 0;

  return (
    <motion.li
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.05 }}
      className="grid items-center gap-8 md:gap-12 md:grid-cols-2"
    >
      {/* TITLE */}
      <div
        className={`relative text-center ${
          left
            ? "md:order-1 md:text-right md:justify-self-end"
            : "md:order-2 md:text-left md:justify-self-start"
        }`}
      >
        {/* timeline dot */}
        <span
          aria-hidden
          className={`hidden md:block absolute top-1/2 -translate-y-1/2 size-3 rounded-full
          bg-primary ring-4 ring-white
          ${left ? "-right-[1.9rem]" : "-left-[1.9rem]"}
        `}
        />

        <h3 className="inline-block text-xl md:text-2xl font-semibold text-black">
          {title}
        </h3>
      </div>

      {/* CARD */}
      <div
        className={`relative group rounded-xl border border-primary/30
        w-full max-w-xl md:max-w-none
        text-center
        ${left ? "md:order-2" : "md:order-1"}
      `}
      >
        <p className="p-4 sm:p-5 md:p-6 text-black/75 leading-relaxed">
          {blurb}
        </p>

        <div className="mb-2 flex justify-center">
          <motion.button
            className="
      group inline-flex items-center gap-1.5
      text-[11px] uppercase tracking-wider font-semibold
      text-black
      border border-primary
      bg-transparent
      px-4 py-1.5 rounded-full
      transition hover:bg-primary/5
    "
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
          >
            <span>Custom Solutions</span>
            <FiChevronRight
              className="text-primary transition-transform duration-200 group-hover:translate-x-1"
              size={16}
            />
          </motion.button>
        </div>
      </div>
    </motion.li>
  );
}
