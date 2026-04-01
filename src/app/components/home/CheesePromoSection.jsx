"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function PromoSection() {
  return (
    <main className="w-full bg-background text-black">
      {/* SECTION 1  -  VIDEO HERO */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/home-banner-1.jpg"
        >
          <source src="/videos/food-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/5" />
      </section>

      {/* SECTION 2  -  OVERLAPPING CARD */}
      <section className="relative w-full bg-gray-50 pb-20 sm:pb-32">
        <div className="section-container relative">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="
              mt-6 sm:mt-0 w-full flex justify-center px-0
              sm:absolute sm:-top-40 sm:left-1/2 sm:-translate-x-1/2
              z-20
            "
          >
            <div
              className="
                grid grid-cols-1 sm:grid-cols-12 items-stretch
                max-w-5xl w-full
                rounded-3xl bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]
                overflow-hidden border border-black/5
              "
            >
              {/* LEFT: IMAGE */}
              <div className="sm:col-span-5 relative h-full group overflow-hidden">
                <div className="relative w-full h-full min-h-[300px]">
                  <Image
                    src="/assets/home-banner-2.jpg"
                    alt="Artisan flavour ingredients"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>

              {/* RIGHT: CONTENT */}
              <div className="sm:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h3 className="section-title text-left font-bold text-gray-900 tracking-tight mb-6">
                    Explore the Senso Ranges
                  </h3>
                  
                  <p className="text-lg font-secondary text-black/70 leading-relaxed mb-8">
                    Behind every great flavour is great science. The Senso
                    portfolio brings together deep application knowledge, rapid
                    sampling, and validated formulations; so your team spends less
                    time developing and more time launching.
                  </p>

                  <div className="flex justify-start">
                    <Button
                      href="/applications-solutions"
                      className="px-8 py-4 uppercase tracking-widest text-sm"
                    >
                      Explore Senso Ranges
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
