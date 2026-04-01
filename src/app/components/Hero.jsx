"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./ui/Button";

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
    y: 40, // bottom â†’ top
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

export default function HeroComponent({ data = {} }) {
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

    // reusable
    titleColor = "text-white",
  } = data;

  const titleClass = `text-5xl md:text-6xl font-extrabold ${titleColor}`;

  return (
    <section className="relative min-h-[650px] flex items-start md:items-center overflow-hidden">
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

      {/* ================= FALLBACK IMAGES ================= */}
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
      <div className="section-container w-full relative z-10 pt-30 md:pt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-xl flex flex-col gap-4"
        >
          {/* Titles */}
          {title && (
            <motion.h1 variants={itemVariants} className={titleClass}>
              {title}
            </motion.h1>
          )}

          {title1 && (
            <motion.h1 variants={itemVariants} className={titleClass}>
              {title1}
            </motion.h1>
          )}

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg font-secondary font-semibold text-white/90 max-w-md drop-shadow"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-wrap gap-4"
          >
            {primary?.href && (
              <Button href={primary.href} className="px-10 py-3 text-xl">
                {primary.label}
              </Button>
            )}

            {secondary?.href && (
              <Button variant="outline" href={secondary.href} className="px-10 py-3 text-xl !text-white border-white/60 bg-white/20 hover:bg-white hover:!text-primary">
                {secondary.label}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* ================= FLOATING BUTTON ================= */}
      {floatingButton?.href && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="fixed bottom-6 right-6 z-20"
        >
          <Button href={floatingButton.href} className="rounded-full shadow-xl bg-black hover:bg-primary text-white border-none">
            {floatingButton.label}
          </Button>
        </motion.div>
      )}
    </section>
  );
}
