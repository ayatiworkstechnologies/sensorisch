"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { motion } from "framer-motion";

const CARDS = [
  {
    title: "Bread",
    image: "/assets/application-1.png",
    hoverImage: "/assets/application-1-h.png",
  },
  {
    title: "Beverages",
    image: "/assets/application-2.png",
    hoverImage: "/assets/application-2-h.png",
  },
  {
    title: "Dairy",
    image: "/assets/application-3.png",
    hoverImage: "/assets/application-3-h.png",
  },
  {
    title: "Confectionery",
    image: "/assets/application-4.png",
    hoverImage: "/assets/application-4-h.png",
  },
  {
    title: "Naturals",
    image: "/assets/application-5.png",
    hoverImage: "/assets/application-5-h.png",
  },
  {
    title: "Health & Wellness",
    image: "/assets/application-6.png",
    hoverImage: "/assets/application-6-h.png",
  },
];

export default function ApplicationExpertiseCarousel() {
  const outerRef = useRef(null); // container used to center viewport
  const viewportRef = useRef(null); // viewport (visible area)
  const [perPage, setPerPage] = useState(4);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleWidth, setVisibleWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(null); // index of hovered card (desktop)

  // layout tuning
  const DESKTOP_BUTTON = 48;
  const DESKTOP_BUTTON_GAP = 12;
  const RIGHT_RESERVE = DESKTOP_BUTTON + DESKTOP_BUTTON_GAP + 8;
  const GAP = 12; // gap-3
  const MOBILE_PADDING = 24;

  // compute sizes and perPage
  useEffect(() => {
    function compute() {
      const el = outerRef.current;
      if (!el) return;

      const w = window.innerWidth;
      const nextPerPage =
        w >= 1200 ? 4 : w >= 900 ? 4 : w >= 768 ? 3 : w >= 640 ? 2 : 1;
      setPerPage(nextPerPage);

      // available: container width minus right reserve (so next button won't hide last card)
      let available = Math.max(0, el.clientWidth - RIGHT_RESERVE);

      // mobile single card: give breathing space
      if (nextPerPage === 1)
        available = Math.max(
          0,
          el.clientWidth - RIGHT_RESERVE - MOBILE_PADDING
        );

      // subtract gaps and divide
      const rawCard = Math.floor(
        (available - GAP * (nextPerPage - 1)) / nextPerPage
      );
      const finalCard = Math.max(1, rawCard);
      setCardWidth(finalCard);

      // exact visible width for viewport
      const vw = finalCard * nextPerPage + GAP * (nextPerPage - 1);
      setVisibleWidth(vw);

      // clamp index
      const maxIndex = Math.max(0, CARDS.length - nextPerPage);
      setIndex((i) => Math.min(i, maxIndex));
    }

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // keep sizes updated when perPage changes
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const onResize = () => {
      let available = Math.max(0, el.clientWidth - RIGHT_RESERVE);
      if (perPage === 1)
        available = Math.max(
          0,
          el.clientWidth - RIGHT_RESERVE - MOBILE_PADDING
        );
      const rawCard = Math.floor((available - GAP * (perPage - 1)) / perPage);
      const finalCard = Math.max(1, rawCard);
      setCardWidth(finalCard);
      setVisibleWidth(finalCard * perPage + GAP * (perPage - 1));
      const maxIndex = Math.max(0, CARDS.length - perPage);
      setIndex((i) => Math.min(i, maxIndex));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [perPage]);

  const maxIndex = Math.max(0, CARDS.length - perPage);
  const goNext = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const goPrev = () => setIndex((i) => Math.max(i - 1, 0));

  // translate for current index
  const step = cardWidth ? cardWidth + GAP : 0;
  const x = -(index * step);

  // responsive helpers
  const isMobile = perPage === 1;

  // drag handling: snap to closest card on drag end (mobile only)
  function handleDragEnd(_event, info) {
    if (!cardWidth) return;
    const dx = info.offset.x; // positive = dragged right (we should go prev)
    const threshold = cardWidth / 3;
    if (dx > threshold) {
      // swiped right -> show previous
      setIndex((i) => Math.max(0, i - 1));
    } else if (dx < -threshold) {
      // swiped left -> show next
      setIndex((i) => Math.min(maxIndex, i + 1));
    } else {
      // small drag -> snap back (do nothing)
      setIndex((i) => i);
    }
  }

  // compute desktop button positions so they sit just outside centered viewport
  const leftButtonStyle = visibleWidth
    ? {
        left: `calc(50% - ${visibleWidth / 2}px - ${
          DESKTOP_BUTTON + DESKTOP_BUTTON_GAP
        }px)`,
      }
    : { left: `- ${DESKTOP_BUTTON + DESKTOP_BUTTON_GAP}px` };
  const rightButtonStyle = visibleWidth
    ? {
        right: `calc(50% - ${visibleWidth / 2}px - ${
          DESKTOP_BUTTON + DESKTOP_BUTTON_GAP
        }px)`,
      }
    : { right: `- ${DESKTOP_BUTTON + DESKTOP_BUTTON_GAP}px` };

  return (
    <section className="section">
      <div className="section-container" style={{ padding: "0 20px" }}>
        {/* heading */}
        <div className="text-left mb-6">
          <h2 className="section-title text-black" style={{ margin: 0 }}>
            Our Application Expertise
          </h2>
          
          {/* Underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 112 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className=" mt-6 h-[2px] bg-primary"
                    
                  />
          <p
            className="section-paragraph text-black/80"
            style={{ maxWidth: 720 }}
          >
            Specialized solutions across industries with deep application
            knowledge and market-ready systems
          </p>
        </div>

        {/* outer wrapper — centers viewport */}
        <div
          ref={outerRef}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            overflow: "visible",
            padding: "18px 0",
          }}
        >
          {/* desktop buttons (outside centered viewport) */}
          {!isMobile && (
            <>
              <button
                onClick={goPrev}
                disabled={index <= 0}
                aria-label="Previous"
                type="button"
                className="z-30"
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: DESKTOP_BUTTON,
                  height: DESKTOP_BUTTON,
                  borderRadius: "999px",
                  background: "white",
                  
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "grid",
                  placeItems: "center",
                  ...leftButtonStyle,
                }}
              >
                <IoChevronBack size={20} />
              </button>

              <button
                onClick={goNext}
                disabled={index >= maxIndex}
                aria-label="Next"
                type="button"
                className="z-30"
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: DESKTOP_BUTTON,
                  height: DESKTOP_BUTTON,
                  borderRadius: "999px",
                  background: "white",
                  
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "grid",
                  placeItems: "center",
                  ...rightButtonStyle,
                }}
              >
                <IoChevronForward size={20} />
              </button>
            </>
          )}

          {/* viewport (centered) */}
          <div
            ref={viewportRef}
            style={{
              width: visibleWidth ? `${visibleWidth}px` : "100%",
              overflow: "hidden",
            }}
          >
            <motion.div
              className="flex"
              style={{ gap: GAP, paddingBottom: 8 }}
              animate={{ x }}
              transition={{ type: "spring", stiffness: 160, damping: 26 }}
              // enable drag on mobile for the inner row
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={isMobile ? handleDragEnd : undefined}
            >
              {CARDS.map((c, i) => (
                <article
                  key={i}
                  className="group"
                  onMouseEnter={() => !isMobile && setHovered(i)}
                  onMouseLeave={() => !isMobile && setHovered(null)}
                  style={{
                    width: cardWidth ? `${cardWidth}px` : "100%",
                    minWidth: cardWidth ? `${cardWidth}px` : "100%",
                    boxSizing: "border-box",
                    border: "1px solid rgba(0,0,0,0.06)",
                    background: "white",
                    height: 380,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    borderRadius: 6,
                    
                    transition: "transform .18s ease, box-shadow .18s ease",
                  }}
                >
                  <div style={{ padding: 20 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <div>
                        <p style={{ margin: 0, fontWeight: 700 }}>{c.title}</p>
                        <div
                          style={{
                            marginTop: 8,
                            width: 40,
                            height: 3,
                            background: "#e11d48",
                            borderRadius: 2,
                          }}
                        />
                      </div>
                      <div
                        style={{
                          color: "#e11d48",
                          fontSize: 18,
                          lineHeight: 1,
                        }}
                      >
                        <IoChevronForward size={20} />
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        width: isMobile ? Math.min(cardWidth, 220) : 240,
                        height: isMobile ? Math.min(cardWidth, 220) : 240,
                        position: "relative",
                      }}
                    >
                      {/* Base image */}
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        style={{
                          objectFit: "contain",
                          transition: "opacity .22s ease",
                          opacity: isMobile ? 1 : hovered === i ? 0 : 1,
                        }}
                        draggable={false}
                        priority={i < perPage ? true : false}
                      />

                      {/* Hover image (desktop only): fades in on hover */}
                      {!isMobile && (
                        <Image
                          src={c.hoverImage}
                          alt={`${c.title} hover`}
                          fill
                          style={{
                            objectFit: "contain",
                            transition: "opacity .22s ease",
                            opacity: hovered === i ? 1 : 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                          }}
                          draggable={false}
                        />
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>

          {/* mobile overlay buttons */}
          {isMobile && (
            <>
              <button
                onClick={goPrev}
                disabled={index <= 0}
                aria-label="Previous"
                type="button"
                style={{
                  position: "absolute",
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.92)",
                  display: "grid",
                  placeItems: "center",
                  
                  border: "1px solid rgba(0,0,0,0.06)",
                  zIndex: 40,
                }}
              >
                <IoChevronBack size={18} />
              </button>

              <button
                onClick={goNext}
                disabled={index >= maxIndex}
                aria-label="Next"
                type="button"
                style={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.92)",
                  display: "grid",
                  placeItems: "center",
                  
                  border: "1px solid rgba(0,0,0,0.06)",
                  zIndex: 40,
                }}
              >
                <IoChevronForward size={18} />
              </button>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        /* keep nice focus outline for accessibility */
        button:focus {
          outline: 3px solid rgba(59, 130, 246, 0.25);
          outline-offset: 3px;
        }
      `}</style>
    </section>
  );
}
