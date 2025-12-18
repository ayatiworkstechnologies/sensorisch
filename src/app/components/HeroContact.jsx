"use client";

import Image from "next/image";
import React from "react";

export default function HeroContact({
  kicker = "",
  title = "",
  subtitle = "",
  primary ="",
  secondary = "",
  imageSrc = "/images/plant-beaker.png",
  imageAlt = "Decorative plant in beaker",
}) {
  const RenderAction = ({ action, primaryStyle = false }) => {
    if (!action) return null;

    const className = primaryStyle
      ? "inline-flex items-center justify-center font-secondary px-5 py-2.5 rounded-md bg-primary text-white text-lg font-semibold shadow hover:bg-white hover:text-primary border border-primary transition"
      : "inline-flex items-center justify-center font-secondary px-4 py-2.5 rounded-md border border-primary/60 text-lg font-semibold text-primary hover:bg-primary hover:text-white transition";

    if (action.onClick) {
      return (
        <button type="button" onClick={action.onClick} className={className}>
          {action.label}
        </button>
      );
    }

    return (
      <a href={action.href || "#"} className={className}>
        {action.label}
      </a>
    );
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* FULL WIDTH BACKGROUND IMAGE */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY FOR READABILITY */}
      <div className="absolute inset-0" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-14 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase font-secondary font-semibold tracking-wide text-black/80 mb-2">
              {kicker}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-primary font-extrabold text-black leading-tight">
              {title}
            </h1>

            <p className="mt-4 text-base font-secondary sm:text-lg text-black/90">
              {subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <RenderAction action={primary} primaryStyle />
              <RenderAction action={secondary} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
