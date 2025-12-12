"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
      desc: "I’m shaping the next wave of innovation",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          
          {/* LEFT HEADING — 1/3 WIDTH */}
          <div className="lg:w-2/3 w-full">
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight">
              Explore <span className="text-primary">Create</span> Confirm Grow
            </h3>

            {/* Underline animation */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 112 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mt-4 h-[2px] bg-primary rounded"
            />
          </div>

          {/* RIGHT CARDS — 2/3 WIDTH */}
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {features.map((f) => (
                <article
                  key={f.key}
                  className="bg-white border border-gray-200 p-6 hover:shadow-md transition-all"
                >
                  {/* ICON BOX */}
                  <div className="w-14 h-14 mb-4 border border-gray-200 rounded-md flex items-center justify-center bg-white">
                    <Image
                      src={f.icon}
                      alt={f.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  <h4 className="text-base font-semibold text-gray-900">
                    {f.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{f.desc}</p>
                </article>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
