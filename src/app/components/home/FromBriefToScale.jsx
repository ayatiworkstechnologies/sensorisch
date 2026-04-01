"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function FromBriefToScale() {
  const steps = [
    {
      key: "discover",
      icon: "/icons/1.svg",
      title: "Discover",
      desc: "Market scan & sensory mapping",
    },
    {
      key: "design",
      icon: "/icons/2.svg",
      title: "Design",
      desc: "Iterative creation with constraints",
    },
    {
      key: "validate",
      icon: "/icons/3.svg",
      title: "Validate",
      desc: "Testing & consumer validation",
    },
    {
      key: "scale",
      icon: "/icons/4.svg",
      title: "Scale",
      desc: "QA/QC sign-off & production-ready documentation",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className=" bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="section-title text-black font-bold tracking-tight">
            From Brief to Shelf - Our Structured Process
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-4 h-[3px] bg-primary rounded-full"
          />
          <p className="mt-8 text-lg font-secondary text-black/70 leading-relaxed">
            We align on your brief, prototype rapidly, and validate with your
            target market, delivering complete production-ready documentation so
            your team can scale with confidence.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Dotted Line (Desktop only) - Animated */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
            className="hidden md:block absolute left-20 right-20 top-[45px] origin-left"
          >
            <div className="w-full border-t-2 border-dashed border-primary/20" />
          </motion.div>

          {/* Step Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.key}
                variants={itemVariants}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Icon circle */}
                <div className="z-10 bg-white rounded-3xl w-24 h-24 flex items-center justify-center border-2 border-black/5 shadow-xl group-hover:border-primary/30 group-hover:shadow-primary/10 transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={s.icon}
                      alt={s.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Counter hint */}
                <div className="absolute -top-4 -right-4 size-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-lg border-4 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {i + 1}
                </div>

                {/* Text */}
                <div className="mt-8 px-4">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base font-secondary text-black/60 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
