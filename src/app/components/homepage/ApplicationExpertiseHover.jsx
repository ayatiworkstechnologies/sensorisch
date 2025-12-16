"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { motion } from "framer-motion";

const CARDS = [
  { title: "Bread", image: "/assets/application-1.png", hoverImage: "/assets/application-1-h.png" },
  { title: "Beverages", image: "/assets/application-2.png", hoverImage: "/assets/application-2-h.png" },
  { title: "Dairy", image: "/assets/application-3.png", hoverImage: "/assets/application-3-h.png" },
  { title: "Confectionery", image: "/assets/application-4.png", hoverImage: "/assets/application-4-h.png" },
  { title: "Naturals", image: "/assets/application-5.png", hoverImage: "/assets/application-5-h.png" },
  { title: "Health & Wellness", image: "/assets/application-6.png", hoverImage: "/assets/application-6-h.png" },
];

export default function ApplicationExpertiseCarousel() {
  const outerRef = useRef(null);
  const [perPage, setPerPage] = useState(4);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleWidth, setVisibleWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(null);

  const GAP = 12;
  const BUTTON_SIZE = 48;

  useEffect(() => {
    const compute = () => {
      const el = outerRef.current;
      if (!el) return;

      const w = window.innerWidth;
      const nextPerPage =
        w >= 1200 ? 4 : w >= 900 ? 4 : w >= 768 ? 3 : w >= 640 ? 2 : 1;

      setPerPage(nextPerPage);

      const available = el.clientWidth - BUTTON_SIZE * 2 - 32;
      const width = Math.floor(
        (available - GAP * (nextPerPage - 1)) / nextPerPage
      );

      setCardWidth(width);
      setVisibleWidth(width * nextPerPage + GAP * (nextPerPage - 1));

      setIndex((i) => Math.min(i, CARDS.length - nextPerPage));
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const maxIndex = Math.max(0, CARDS.length - perPage);
  const step = cardWidth + GAP;
  const x = -(index * step);

  return (
    <section className="section ">
      <div className="section-container px-5 py-10">
        {/* HEADING */}
        <div className="mb-8 px-15">
          <h2 className="section-title text-black">Our Application Expertise</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 h-[2px] bg-primary"
          />
          <p className="mt-4 max-w-xl text-black/80">
            Specialized solutions across industries with deep application knowledge
            and market-ready systems.
          </p>
        </div>

        {/* CAROUSEL */}
        <div ref={outerRef} className="relative flex justify-center">
          {/* DESKTOP BUTTONS */}
          {perPage > 1 && (
            <>
              <button
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                disabled={index === 0}
                className="absolute left-0 top-1/2 z-20 -translate-y-1/2
                           grid h-12 w-12 place-items-center rounded-full
                           border border-black/10 bg-white"
              >
                <IoChevronBack size={20} />
              </button>

              <button
                onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
                disabled={index === maxIndex}
                className="absolute right-0 top-1/2 z-20 -translate-y-1/2
                           grid h-12 w-12 place-items-center rounded-full
                           border border-black/10 bg-white"
              >
                <IoChevronForward size={20} />
              </button>
            </>
          )}

          {/* VIEWPORT */}
          <div
            className="overflow-hidden"
            style={{ width: visibleWidth || "100%" }}
          >
            <motion.div
              className="flex"
              style={{ gap: GAP }}
              animate={{ x }}
              transition={{ type: "spring", stiffness: 160, damping: 26 }}
            >
              {CARDS.map((c, i) => (
                <article
                  key={c.title}
                  className="group flex flex-col rounded-md border border-black/10 bg-white overflow-hidden"
                  style={{
                    width: cardWidth,
                    minWidth: cardWidth,
                    height: 380,
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* HEADER */}
                  <div className="flex items-start justify-between px-5 pt-5">
                    <div>
                      <p className="font-primary text-lg font-semibold text-black">
                        {c.title}
                      </p>
                      <span className="mt-2 block h-[2px] w-15 rounded bg-primary" />
                    </div>
                    <IoChevronForward className="mt-1 text-primary" size={18} />
                  </div>

                  {/* IMAGE (FULL AREA) */}
                  <div className="relative flex-1">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className={`object-contain transition-opacity duration-200 ${
                        hovered === i ? "opacity-0" : "opacity-100"
                      }`}
                      draggable={false}
                      priority={i < perPage}
                    />

                    <Image
                      src={c.hoverImage}
                      alt={`${c.title} hover`}
                      fill
                      className={`absolute inset-0 object-contain transition-opacity duration-200 ${
                        hovered === i ? "opacity-100" : "opacity-0"
                      }`}
                      draggable={false}
                    />
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
