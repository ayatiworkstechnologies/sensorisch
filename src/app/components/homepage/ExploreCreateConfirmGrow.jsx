"use client";

import Image from "next/image";
import Link from "next/link";
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

// Cards wrapper (stagger control)
const cardsWrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Individual card animation (left → right)
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
      href: "/applications-solutions",
    },
    {
      key: "insight",
      icon: "/icons/6.svg",
      title: "Insight",
      desc: "Stay Ahead of the Curve",
      href: "/insights",
    },
    {
      key: "innovation",
      icon: "/icons/7.svg",
      title: "Innovation",
      desc: "Shaping the next wave of innovation",
      href: "/bespoke",
    },
  ];

  return (
    <>
    <div className="border-t border-t-primary" />
    <section className="py-16 bg-white">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-14 items-start">

          {/* LEFT TITLE */}
          <motion.div
            className="lg:w-1/3 w-full"
            variants={titleAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <h3 className="section-title font-semibold text-gray-900 leading-tight">
              Explore Create Confirm Grow
            </h3>

            {/* Underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 112 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="mt-5 h-[2px] bg-primary rounded"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f) => (
                <motion.div key={f.key} variants={cardAnim}>
                  <Link
                    href={f.href}
                    className="
                      group
                      flex
                      flex-col
                      items-center
                      justify-center
                      min-h-[300px]
                      rounded-2xl
                      bg-white
                      border border-gray-200
                      px-8 py-10
                      text-center
                      transition-all duration-300
                      hover:border-primary
                      hover:shadow-xl
                      hover:-translate-y-1
                    "
                  >
                    {/* Icon */}
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-50 transition group-hover:bg-primary/10">
                      <Image
                        src={f.icon}
                        alt={f.title}
                        width={44}
                        height={44}
                        className="object-contain"
                      />
                    </div>

                    <h4 className="text-2xl font-semibold text-gray-900">
                      {f.title}
                    </h4>

                    <p className="mt-3 text-lg font-secondary text-gray-600 leading-relaxed max-w-[240px]">
                      {f.desc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    <div className="border-t border-t-primary" />
    </>
  );
}
