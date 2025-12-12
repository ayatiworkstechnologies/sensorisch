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
      desc: "QAPQC & production ready",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-title text-black">
            From Brief to Scale
          </h2>
          {/* Underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 112 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="mx-auto mt-6 h-[2px] bg-primary"
                  />
          <p className="mt-2 text-sm sm:text-base text-gray-500">
            We align targets, prototype fast, validate in your market, then transfer SOPs for reliable production
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 relative">

          {/* Dotted Line (Desktop only) */}
          <div className="hidden md:block absolute left-0 right-0 top-[38px]">
            <div className="w-full border-t border-dashed border-gray-300"></div>
          </div>

          {/* Step Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {steps.map((s) => (
              <div
                key={s.key}
                className="flex flex-col items-center text-center relative"
              >

                {/* Icon circle */}
                <div className="z-10 bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-md border border-gray-200">
                  <Image
                    src={s.icon}
                    alt={s.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                {/* Small dashed connector for mobile */}
                <div className="md:hidden mt-4 w-full flex justify-center">
                  <div className="w-24 border-t border-dashed border-gray-300" />
                </div>

                {/* Text */}
                <div className="mt-4 px-3">
                  <h3 className="text-base font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{s.desc}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
