"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FEATURES = [
  {
    iconSrc: "/icons/icon-1.png",
    iconAlt: "Innovation icon",
    title: "Multi-Sensory Innovation",
    desc: "Science-led creativity combining data-driven R&D with culinary craft for distinctive taste experiences.",
  },
  {
    iconSrc: "/icons/icon-2.png",
    iconAlt: "Nutrition & Wellness icon",
    title: "Nutrition & Wellness",
    desc: "Specialized solutions for health-focused applications with effective masking and enhanced palatability.",
  },
  {
    iconSrc: "/icons/icon-3.png",
    iconAlt: "Sustainability icon",
    title: "Sustainability Focus",
    desc: "Responsible sourcing and waste-aware processes for clean-label and environmentally conscious solutions.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function WhyChooseSection() {
  return (
    <section id="why-sensorisch" className="bg-background">
      <div className="section-container py-12">
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h3 className="section-title font-semibold text-black">
            Why Choose Sensorisch
          </h3>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-2 mx-auto h-[2px] bg-primary rounded"
          />
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="
                border border-black/30
                rounded
                p-6
                text-center
              "
            >
              {/* Icon */}
              <div className="flex justify-center">
                <Image
                  src={f.iconSrc}
                  alt={f.iconAlt}
                  width={36}
                  height={36}
                  className="object-contain"
                  priority={i === 0}
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-2xl font-semibold text-black">
                {f.title}
              </h3>

              {/* Description – always visible */}
              <p className="mt-5 text-lg font-secondary text-black/70 leading-relaxed">
                {f.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
