// components/HeroContact.jsx
"use client";

import Image from "next/image";
import React from "react";

export default function HeroContact({
  kicker = "Get in touch",
  title = "Expert guidance, just a message away",
  subtitle = "No matter your location, our experts are within reach. Get in touch for sustainable, ingredient-driven solutions.",
  primary = { label: "Start Your Project", href: "/contact" },
  secondary = { label: "View Our Portfolio", href: "/portfolio" },
  imageSrc = "/images/plant-beaker.png",
  imageAlt = "Decorative plant in beaker",
}) {
  const RenderAction = ({ action, primaryStyle = false }) => {
    const className = primaryStyle
      ? "inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-rose-600 text-white text-sm font-semibold shadow hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-300"
      : "inline-flex items-center justify-center px-4 py-2.5 rounded-md border border-gray-200 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200";

    if (!action) return null;
    if (action.onClick) return <button type="button" onClick={action.onClick} className={className}>{action.label}</button>;
    return <a href={action.href || "#"} className={className}>{action.label}</a>;
  };

  return (
    <section className="relative overflow-visible">
      {/* Full-bleed decorative image (behind content) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 lg:w-2/5 -z-10"
        style={{ display: "block" }}
      >
        {/* gradient mask on left to blend into content and keep text readable */}
        <div className="absolute inset-y-0 left-0 w-36 z-20" style={{ background: "linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)" }} />
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{ objectFit: "cover", objectPosition: "right center" }}
            sizes="(max-width: 1024px) 50vw, 40vw"
            priority={false}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-8 py-12 lg:py-20">
          {/* Left content (text lives above background image due to z-10) */}
          <div className="w-full lg:w-2/3">
            <p className="text-sm text-gray-500 mb-2">{kicker}</p>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              {title}
            </h1>

            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl">
              {subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <RenderAction action={primary} primaryStyle />
              <RenderAction action={secondary} />
            </div>
          </div>

          {/* Mobile image (below content) — keep for small screens so image isn't background there) */}
          <div className="lg:hidden mt-6 w-full flex justify-center">
            <div className="relative w-48 h-36">
              <Image src={imageSrc} alt={imageAlt} fill style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
