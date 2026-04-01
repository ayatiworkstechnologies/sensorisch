"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

/* ---------------- Animations ---------------- */

const titleAnim = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardsWrap = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ExploreCreateConfirmGrow() {
  const features = [
    {
      key: "inspiration",
      icon: "/icons/5.svg",
      title: "Inspiration",
      desc: "Performance-Driven Application Systems",
      href: "/applications-solutions",
    },
    {
      key: "insight",
      icon: "/icons/6.svg",
      title: "Insight",
      desc: "Validated Trends & Market Intelligence",
      href: "/insights",
    },
    {
      key: "innovation",
      icon: "/icons/7.svg",
      title: "Innovation",
      desc: "Co-develop bespoke ingredient solutions unique to your brand",
      href: "/bespoke",
    },
  ];

  return (
    <>
      <div className="border-t border-primary/20" />
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* LEFT TITLE */}
            <motion.div
              className="lg:w-1/3 w-full"
              variants={titleAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3 className="section-title font-bold text-gray-900 leading-tight tracking-tight">
                Explore. Innovate. Validate. Grow.
              </h3>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 112 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="mt-6 h-[3px] bg-primary rounded-full"
              />
              
              <p className="mt-8 text-lg font-secondary text-black/60 leading-relaxed">
                A recursive ecosystem of specialized flavor development designed to 
                mitigate risk and maximize commercial performance.
              </p>
            </motion.div>

            {/* RIGHT CARDS */}
            <motion.div
              className="lg:w-2/3 w-full"
              variants={cardsWrap}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
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
                      min-h-[340px]
                      rounded-[2.5rem]
                      bg-white
                      border border-black/5
                      px-8 py-12
                      text-center
                      transition-all duration-500
                      hover:border-primary/30
                      hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)]
                      hover:-translate-y-2
                      shadow-[0_10px_30px_rgba(0,0,0,0.02)]
                    "
                    >
                      {/* Icon */}
                      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gray-50 transition-colors duration-500 group-hover:bg-primary/5">
                        <Image
                          src={f.icon}
                          alt={f.title}
                          width={48}
                          height={48}
                          className="object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <h4 className="text-2xl font-bold text-gray-900 tracking-tight">
                        {f.title}
                      </h4>

                      <p className="mt-4 text-base font-secondary text-black/50 leading-relaxed group-hover:text-black/70 transition-colors duration-500">
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
      <div className="border-t border-primary/20" />
    </>
  );
}
