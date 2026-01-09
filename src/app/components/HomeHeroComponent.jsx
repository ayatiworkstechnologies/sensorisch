"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

/* ================= ANIMATION VARIANTS ================= */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40, // bottom → top
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/* ================= COMPONENT ================= */

export default function HomeHeroComponent({ data = {} }) {
  const controls = useAnimation();

  const {
    imageMobile,
    imageDesktop,
    video,
    title,
    title1,
    subtitle,
    primary,
    secondary,
    floatingButton,
  } = data;

  /* ================= DELAY ANIMATION (5s) ================= */
  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start("show");
    }, 3000); // ⏱️ 5 seconds

    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <section className="relative min-h-[650px] flex items-center overflow-hidden">
      {/* ================= BACKGROUND VIDEO ================= */}
      {video?.src && (
        <video
          className="absolute inset-0 -z-10 w-full h-full object-cover"
          src={video.src}
          poster={video.poster}
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* ================= FALLBACK IMAGE (MOBILE) ================= */}
      {!video?.src && imageMobile?.src && (
        <div className="absolute inset-0 -z-10 md:hidden">
          <Image
            src={imageMobile.src}
            alt={imageMobile.alt || "Hero banner"}
            fill
            priority
            unoptimized
            className="object-cover object-center"
          />
        </div>
      )}

      {/* ================= FALLBACK IMAGE (DESKTOP) ================= */}
      {!video?.src && imageDesktop?.src && (
        <div className="absolute inset-0 -z-10 hidden md:block">
          <Image
            src={imageDesktop.src}
            alt={imageDesktop.alt || "Hero banner"}
            fill
            priority
            unoptimized
            className="object-cover object-center"
          />
        </div>
      )}

      {/* ================= CONTENT ================= */}
      <div className="section-container w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-xl flex flex-col gap-4"
        >
          {title && (
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            >
              {title}
            </motion.h1>
          )}

          {title1 && (
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            >
              {title1}
            </motion.h1>
          )}

          {subtitle && (
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg font-secondary font-semibold text-white/90 max-w-md drop-shadow"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-wrap gap-4"
          >
            {primary?.href && (
              <Link
                href={primary.href}
                className="px-10 py-3 bg-primary font-secondary text-xl text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition"
              >
                {primary.label}
              </Link>
            )}

            {secondary?.href && (
              <Link
                href={secondary.href}
                className="px-10 py-3 border border-white/60 font-secondary text-xl bg-white/20 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/30 transition"
              >
                {secondary.label}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* ================= FLOATING BUTTON ================= */}
      {floatingButton?.href && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 5.4 }}
          className="fixed bottom-6 right-6 z-20"
        >
          <Link
            href={floatingButton.href}
            className="px-5 py-3 bg-secondary text-white font-semibold rounded-full shadow-xl hover:bg-secondary/90 transition"
          >
            {floatingButton.label}
          </Link>
        </motion.div>
      )}
    </section>
  );
}
