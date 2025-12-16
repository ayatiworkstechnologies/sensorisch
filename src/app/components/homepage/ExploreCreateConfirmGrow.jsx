"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

/* ---------------- Animations ---------------- */

// Title animation
const titleAnim = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Cards wrapper (controls stagger)
const cardsWrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3, // starts after title
    },
  },
};

// Individual card: LEFT → RIGHT
const cardAnim = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function ExploreCreateConfirmGrow() {
  const features = [
    {
      key: "inspiration",
      icon: "/icons/5.svg",
      title: "Inspiration",
      desc: "Showcase Smart Innovation",
    },
    {
      key: "insight",
      icon: "/icons/6.svg",
      title: "Insight",
      desc: "Stay Ahead of the Curve",
    },
    {
      key: "innovation",
      icon: "/icons/7.svg",
      title: "Innovation",
      desc: "Shaping the next wave of innovation",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">

          {/* LEFT TITLE */}
          <motion.div
            className="lg:w-2/3 w-full"
            variants={titleAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <h3 className="section-title font-semibold text-gray-900 leading-tight">
              Explore Create Confirm Grow
            </h3>

            {/* underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 112 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="mt-4 h-[2px] bg-primary rounded"
            />
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            className="lg:w-2/3 w-full"
            variants={cardsWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <motion.article
                  key={f.key}
                  variants={cardAnim}
                  className="
                    bg-white
                    border border-gray-200
                    p-6
                    transition
                    hover:border-primary
                  "
                >
                  {/* Icon */}
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <Image
                      src={f.icon}
                      alt={f.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  <h4 className="text-lg font-semibold text-black">
                    {f.title}
                  </h4>

                  <p className="mt-2 text-sm text-black/70 leading-relaxed">
                    {f.desc}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
