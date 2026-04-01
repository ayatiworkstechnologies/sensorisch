"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function HeroContact({
  kicker = "",
  title = "",
  subtitle = "",
  primary = "",
  secondary = "",
  imageSrc = "/images/plant-beaker.png",
  imageAlt = "Decorative plant in beaker",
}) {
  return (
    <section className="relative w-full overflow-hidden group">
      {/* FULL WIDTH BACKGROUND IMAGE */}
      <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="py-16 lg:py-28"
        >
          <div className="max-w-4xl">
            {kicker && (
              <p className="text-sm uppercase font-secondary font-bold tracking-[0.2em] text-primary mb-4">
                {kicker}
              </p>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-primary font-black text-gray-900 leading-[1.1] tracking-tight">
              {title}
            </h1>

            <p className="mt-6 text-lg font-secondary sm:text-xl text-black/70 leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {primary && (
                <Button 
                  variant="primary" 
                  href={primary.href} 
                  onClick={primary.onClick}
                  className="px-8 py-4 uppercase tracking-widest text-sm"
                >
                  {primary.label}
                </Button>
              )}
              {secondary && (
                <Button 
                  variant="outline" 
                  href={secondary.href} 
                  onClick={secondary.onClick}
                  className="px-8 py-4 uppercase tracking-widest text-sm bg-white/50 backdrop-blur-sm"
                >
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
