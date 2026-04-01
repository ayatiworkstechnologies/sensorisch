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
      const nextPerPage = w >= 1200 ? 4 : w >= 900 ? 3 : w >= 768 ? 2 : 1;

      setPerPage(nextPerPage);

      const available = outerRef.current.clientWidth - BUTTON_SIZE * 2 - 32;

      const width = Math.floor(
        (available - GAP * (nextPerPage - 1)) / nextPerPage,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="section bg-white overflow-hidden">
      <div className="section-container py-12 md:py-18">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="section-title text-black font-bold tracking-tight">
            Our Application Expertise
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-3 h-[2px] bg-primary mx-auto md:mx-0"
          />
          <p className="mt-6 max-w-2xl font-secondary text-lg text-black/70 leading-relaxed mx-auto md:mx-0">
            Precision-engineered solutions across key industries, backed by
            rigorous technical data and deep global application experience.
          </p>
        </motion.div>

        {/* Carousel */}
        <div ref={outerRef} className="relative flex justify-center mt-12">
          {/* Controls - Premium Styling */}
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="absolute -left-4 md:-left-12 top-1/2 z-30 -translate-y-1/2
                       grid h-14 w-14 place-items-center rounded-full
                       bg-white border border-black/5 shadow-xl hover:bg-primary hover:text-white transition-all
                       disabled:opacity-20 disabled:cursor-not-allowed group"
            aria-label="Previous application"
          >
            <IoChevronBack
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
          </button>

          <button
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            disabled={index === maxIndex}
            className="absolute -right-4 md:-right-12 top-1/2 z-30 -translate-y-1/2
                       grid h-14 w-14 place-items-center rounded-full
                       bg-white border border-black/5 shadow-xl hover:bg-primary hover:text-white transition-all
                       disabled:opacity-20 disabled:cursor-not-allowed group"
            aria-label="Next application"
          >
            <IoChevronForward
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
          </button>

          {/* Viewport */}
          <div
            className="overflow-hidden"
            style={{ width: visibleWidth || "100%" }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="flex"
              style={{ gap: GAP }}
              animate={{ x }}
              transition={{ type: "spring", stiffness: 120, damping: 24 }}
            >
              {CARDS.map((card, i) => (
                <motion.article
                  key={card.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="flex flex-col rounded-3xl border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
                  style={{
                    width: cardWidth,
                    minWidth: cardWidth,
                    height: 420,
                  }}
                >
                  {/* Card Header */}
                  <div className="px-6 pt-8 pb-4">
                    <p className="font-primary text-2xl font-bold text-gray-900 tracking-tight">
                      {card.title}
                    </p>
                    <span className="mt-3 block h-[3px] w-12 bg-primary rounded-full" />
                  </div>

                  {/* Image Container */}
                  <div className="relative flex-1 p-6 group">
                    <div className="relative w-full h-full overflow-hidden rounded-2xl">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                        draggable={false}
                        priority={i < perPage}
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
