"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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

    // ✅ NEW (reusable)
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

        <div className="max-w-xl flex flex-col  gap-4">
          {title && <h1 className={titleClass}>{title}</h1>}
          {title1 && <h1 className={titleClass}>{title1}</h1>}

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
          </div>
        </div>
      </div>

      {/* ================= FLOATING BUTTON ================= */}
      {floatingButton?.href && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
