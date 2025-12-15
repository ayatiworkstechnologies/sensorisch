// components/HeroComponent.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import Link from "next/link";

export default function HeroComponent({ data = {} }) {
  const {
    imageMobile,   // { src, alt }
    imageDesktop,  // { src, alt }
    title,
    subtitle,
    primary,
    secondary,
    scrollToId,
  } = data;

  return (
    <section
      className="
        relative
        min-h-[620px]
        flex items-center
        pt-24           /* space for header overlay */
        overflow-hidden
      "
    >
      {/* ============================
          FULL BACKGROUND (MOBILE)
      ============================= */}
      {imageMobile?.src && (
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

      {/* ============================
          FULL BACKGROUND (DESKTOP)
      ============================= */}
      {imageDesktop?.src && (
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

      {/* ============================
          LEFT CONTENT BLOCK
      ============================= */}
      <div className="section-container w-full">
        <div className="max-w-xl flex flex-col gap-4">

          {title && (
            <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              {title}
            </h1>
          )}

          {subtitle && (
            <p className="text-base md:text-lg font-secondary font-semibold text-white/90 max-w-md drop-shadow">
              {subtitle}
            </p>
          )}

          {/* Buttons */}
          <div className="mt-4 flex flex-wrap gap-4">
            {primary?.href && (
              <Link
                href={primary.href}
                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition"
              >
                {primary.label || "Button One"}
              </Link>
            )}

            {secondary?.href && (
              <Link
                href={secondary.href}
                className="px-6 py-3 border border-white/60 bg-white/20 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/30 transition"
              >
                {secondary.label || "Button Two"}
              </Link>
            )}
          </div>

        </div>
      </div>

      {/* ============================
          SCROLL INDICATOR
      ============================= */}
      {/* {scrollToId && (
        <motion.a
          href={`#${scrollToId}`}
          aria-label="Scroll to next section"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            absolute left-1/2 -translate-x-1/2
            bottom-6
          "
        >
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="
              inline-flex items-center justify-center
              h-14 w-10 md:h-20 md:w-12
              rounded-full bg-white/80 backdrop-blur
              border-2 border-dotted border-primary/50
              shadow-sm
            "
          >
            <FaArrowDownLong className="text-primary h-6 w-4 md:h-8 md:w-5" />
          </motion.span>
        </motion.a>
      )} */}
    </section>
  );
}
