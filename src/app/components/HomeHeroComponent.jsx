"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./ui/Button";

/* ================= ANIMATION VARIANTS ================= */

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier
    },
  },
};

/* ================= COMPONENT ================= */

export default function HomeHeroComponent({ data = {} }) {
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

  return (
    <section className="relative min-h-[700px] pt-32 pb-20 flex items-center overflow-hidden">
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

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 -z-10 bg-black/20" />

      {/* ================= CONTENT ================= */}
      <div className="section-container w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-2xl flex flex-col gap-6"
        >
          <div className="space-y-4">
            {title && (
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl leading-[1.1]"
              >
                {title}
              </motion.h1>
            )}

            {title1 && (
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl leading-[1.1]"
              >
                {title1}
              </motion.h1>
            )}
          </div>

          {subtitle && (
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-secondary font-medium text-white/90 max-w-lg drop-shadow"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-wrap gap-4"
          >
            {primary?.href && (
              <Button href={primary.href} className="px-10 py-4 text-lg uppercase tracking-wider">
                {primary.label}
              </Button>
            )}

            {secondary?.href && (
              <Button
                variant="outline"
                href={secondary.href}
                className="px-10 py-4 text-lg uppercase tracking-wider !text-white border-white/40 bg-white/10 hover:bg-white hover:!text-primary transition-all backdrop-blur-sm"
              >
                {secondary.label}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* ================= FLOATING BUTTON ================= */}
      {floatingButton?.href && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            href={floatingButton.href}
            className="rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-black hover:bg-primary text-white border-none py-4 px-8"
          >
            {floatingButton.label}
          </Button>
        </motion.div>
      )}

      {/* Decorative Gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
