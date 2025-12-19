"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { motion } from "framer-motion";

const CARDS = [
  { title: "Bread", image: "/assets/application-1.png" },
  { title: "Beverages", image: "/assets/application-2.png" },
  { title: "Dairy", image: "/assets/application-3.png" },
  { title: "Confectionery", image: "/assets/application-4.png" },
  { title: "Naturals", image: "/assets/application-5.png" },
  { title: "Health & Wellness", image: "/assets/application-6.png" },
];

export default function ApplicationExpertiseCarousel() {
  const outerRef = useRef(null);

  const [perPage, setPerPage] = useState(4);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleWidth, setVisibleWidth] = useState(0);
  const [index, setIndex] = useState(0);

  const GAP = 12;
  const BUTTON_SIZE = 48;

  useEffect(() => {
    const compute = () => {
      if (!outerRef.current) return;

      const w = window.innerWidth;
      const nextPerPage =
        w >= 1200 ? 4 : w >= 900 ? 3 : w >= 768 ? 2 : 1;

      setPerPage(nextPerPage);

      const available =
        outerRef.current.clientWidth - BUTTON_SIZE * 2 - 32;

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
    <section className="section">
      <div className="section-container py-10">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="section-title text-black">
            Our Application Expertise
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 h-[2px] bg-primary"
          />
          <p className="mt-4 max-w-xl font-secondary text-lg text-black/80">
            Specialized solutions across industries with deep application
            knowledge and market-ready systems.
          </p>
        </div>

        {/* Carousel */}
        <div ref={outerRef} className="relative flex justify-center">
          {/* Prev */}
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2
                       grid h-12 w-12 place-items-center rounded-full
                       border border-black/10 bg-white disabled:opacity-40"
          >
            <IoChevronBack size={20} />
          </button>

          {/* Next */}
          <button
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            disabled={index === maxIndex}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2
                       grid h-12 w-12 place-items-center rounded-full
                       border border-black/10 bg-white disabled:opacity-40"
          >
            <IoChevronForward size={20} />
          </button>

          {/* Viewport */}
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
              {CARDS.map((card, i) => (
                <article
                  key={card.title}
                  className="flex flex-col rounded-md border border-black/10 bg-white overflow-hidden"
                  style={{
                    width: cardWidth,
                    minWidth: cardWidth,
                    height: 360,
                  }}
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between px-5 pt-5">
                    <div>
                      <p className="font-primary text-2xl font-semibold text-black">
                        {card.title}
                      </p>
                      <span className="mt-2 block h-[2px] w-12 bg-primary" />
                    </div>
                    <IoChevronForward
                      className="mt-1 text-primary"
                      size={18}
                    />
                  </div>

                  {/* Image */}
                  <div className="relative flex-1 p-4">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain"
                      draggable={false}
                      priority={i < perPage}
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
