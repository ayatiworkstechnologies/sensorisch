"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FEATURES = [
  {
    iconSrc: "/icons/icon-1.png",
    iconAlt: "Precision flavour engineering icon",
    title: "Multi-Sensory Innovation",
    desc: "Our R&D teams blend rigorous data science with culinary expertise to create flavour systems that are not just distinctive; they are reproducible, stable, and scale-ready.",
  },
  {
    iconSrc: "/icons/icon-2.png",
    iconAlt: "Bitterness masking and palatability icon",
    title: "Nutrition & Wellness",
    desc: "Purpose-built ingredient systems for health and wellness applications; delivering effective bitterness masking, off-note reduction, and palatability that make functional products consumers actually enjoy.",
  },
  {
    iconSrc: "/icons/icon-3.png",
    iconAlt: "Sustainable ingredient sourcing icon",
    title: "Sustainability Focus",
    desc: "Our supply chain is built on responsible sourcing, waste-minimising processes, and full traceability; so you can meet clean-label demands and sustainability targets without compromise.",
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
            Built for Food & Beverage Innovation - From Lab to Launch
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
                border border-black/10
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

              {/* Description â€“ always visible */}
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
