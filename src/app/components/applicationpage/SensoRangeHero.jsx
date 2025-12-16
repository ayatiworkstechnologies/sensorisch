// app/components/SensoRangeHero.jsx
"use client";

import { useState } from "react";
import SampleRequestModal from "./SampleRequestModal";

import { motion } from "framer-motion";
import * as Lucide from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// Fallbacks
const DEFAULT_BENEFITS = [
  "Consistent aroma release",
  "Heat-stable formulations",
  "Wide pH tolerance",
  "Optimal baking performance",
];
const DEFAULT_TAGS = [
  { t: "Cakes & Muffins" },
  { t: "Cookies & Biscuits" },
  { t: "Pastries" },
  { t: "Artisan Breads" },
];

function BenefitIcon({ icon, iconType = "lucide", className = "" }) {
  const LucideIcon =
    typeof icon === "string" && Lucide[icon] ? Lucide[icon] : Lucide.Check;
  return <LucideIcon className={`h-7 w-7 ${className}`} aria-hidden />;
}

export default function SensoRangeHero({
  reverse = false,
  badge = "Bakery",
  title = "SensoBake",
  blurb = "Flavours that enrich cakes, cookies, pastries, and breads with oven-true performance.",
  benefits = DEFAULT_BENEFITS,
  tags = DEFAULT_TAGS,
  imageSrc = "/assets/sensobake-banner.webp",
  imageAlt = "SensoBake application visual",
  primaryLabel = "Request Sample",
  secondaryLabel = "Technical Sheet",
}) {
  /* ✅ HOOKS MUST BE HERE */
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState("");

  const contentOrder = reverse ? "order-1 lg:order-2" : "order-1 lg:order-1";
  const imageOrder = reverse ? "order-2 lg:order-1" : "order-2 lg:order-2";

  return (
    <>
      <section className="bg-background text-black">
        <div className="section-container py-16 md:py-24">
          <div className="grid items-center gap-14 md:gap-16 lg:grid-cols-2">

            {/* ==== CONTENT ==== */}
            <div className={`space-y-8 ${contentOrder}`}>
              <motion.div
                variants={list}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="space-y-4"
              >
                <motion.span
                  variants={fadeUp}
                  className="inline-flex items-center rounded-md bg-primary/10 text-primary px-3 py-1 text-lg font-semibold"
                >
                  {badge}
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-bold tracking-tight text-primary"
                >
                  {title}
                </motion.h1>

                <motion.div
                  variants={fadeUp}
                  className="h-[3px] w-28 rounded bg-primary/70"
                />
              </motion.div>

              {/* Benefits */}
              <motion.div variants={list} initial="hidden" whileInView="show">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  Key Benefits:
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  {benefits.map((item, i) => {
                    const text =
                      typeof item === "string" ? item : item.text;

                    return (
                      <motion.div
                        key={text || i}
                        variants={fadeUp}
                        className="flex items-center gap-3"
                      >
                        <div className="grid h-14 w-14 place-items-center rounded-full">
                          <BenefitIcon />
                        </div>
                        <p className="font-medium">{text}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Tags */}
              <div className="pt-2 flex flex-wrap gap-3">
                {tags.map(({ t }) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-semibold border border-primary hover:bg-primary/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* ✅ CTA → MODAL */}
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setModalSubject(`Request Sample – ${title}`);
                    setModalOpen(true);
                  }}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition"
                >
                  {primaryLabel}
                </button>

                <button
                  onClick={() => {
                    setModalSubject(`Technical Sheet – ${title}`);
                    setModalOpen(true);
                  }}
                  className="inline-flex items-center justify-center rounded-md border-2 border-primary/30 px-6 py-3 text-primary font-semibold bg-white hover:bg-primary/5 transition"
                >
                  {secondaryLabel}
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative ${imageOrder}`}
            >
              <p className="mb-4 max-w-xl">{blurb}</p>
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ MODAL COMPONENT */}
      <SampleRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        subject={modalSubject}
      />
    </>
  );
}
