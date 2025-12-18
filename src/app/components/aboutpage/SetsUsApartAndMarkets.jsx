// components/SetsUsApartAndMarkets.jsx
"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const list = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// swap with your real assets if needed
const ICONS = {
  labs: "/icons/icon-20.png",
  hand: "/icons/icon-19.png",
  shield: "/icons/icon-18.png",
};

export default function SetsUsApartAndMarkets() {
  return (
    <section className="bg-background text-black">
      <div className="section-container mb-15">
        {/* ===== WHAT SETS US APART ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="text-center"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h3 className="section-title font-semibold text-gray-900 leading-tight">
              What Sets Us Apart
            </h3>

            {/* Underline animation – centered */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 112 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mt-2 mx-auto h-[2px] bg-primary rounded"
            />
          </motion.div>

          <p className="mt-3 section-paragraph text-xl max-w-2xl mx-auto">
            Science-led development, pre-validated systems, and rigorous quality
            – built for scale.
          </p>
        </motion.div>

        {/* Features + dotted connectors */}
        <div className="relative mt-10 md:mt-14">
          {/* ========== DESKTOP ONLY: horizontal dotted line ========== */}
          <div
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-8 mx-10 border-t border-dashed border-primary/30"
          />

          {/* Feature Boxes */}
          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative grid gap-10 md:grid-cols-3"
          >
            <Feature
              iconSrc={ICONS.labs}
              title="Deep Application Labs"
              blurb="Specialized testing environments that replicate real-world manufacturing conditions."
            />
            <Feature
              iconSrc={ICONS.hand}
              title="Senso Ready Systems"
              blurb="Pre-validated application ranges that reduce development time and risk."
            />
            <Feature
              iconSrc={ICONS.shield}
              title="Robust QA/QC"
              blurb="Comprehensive quality assurance with complete documentation and compliance."
            />
          </motion.ul>
        </div>

        {/* ===== OUR MARKETS ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-20 md:mt-28 text-center"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h3 className="section-title font-semibold text-gray-900 leading-tight">
              Our Markets
            </h3>

            {/* Underline animation – centered */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 112 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mt-2 mx-auto h-[2px] bg-primary rounded"
            />
          </motion.div>

          <p className="mt-3 section-paragraph  text-xl max-w-2xl mx-auto">
            Serving India with GCC support today - positioned to expand with
            regulatory readiness.
          </p>
        </motion.div>

        {/* Market Cards */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          <MarketCard
            heading="India 🇮🇳"
            highlightWidth="w-14"
            blurb="Primary market with comprehensive local supply chain, regulatory expertise, and deep understanding of regional taste preferences."
          />
          <MarketCard
            heading="GCC Region 🇸🇦 🇦🇪"
            highlightWidth="w-20"
            blurb="Growing presence with specialized support for Gulf markets, including halal certification and regional compliance."
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ================== Subcomponents ================== */

function Feature({ iconSrc, title, blurb }) {
  return (
    <motion.li
      variants={fadeUp}
      className="relative flex flex-col items-center text-center"
    >
      {/* icon pill */}
      <div className="relative">
        <div className="h-18 w-18 rounded-full bg-white ring-1 ring-black/5 grid place-items-center ">
          <img src={iconSrc} alt="" className="h-10 w-10" />
        </div>
        <div className="absolute inset-0 -z-10 rounded-full bg-black/5 blur-xl" />
      </div>

      <h3 className="mt-4 text-lg md:text-2xl font-semibold text-primary">
        {title}
      </h3>
      <p className="mt-2 section-paragraph max-w-[26rem]">{blurb}</p>
    </motion.li>
  );
}

function MarketCard({ heading, blurb }) {
  return (
    <motion.article
      variants={fadeUp}
      
      className="rounded-2xl bg-white/80 backdrop-blur-md ring-1 ring-black/5 p-6 md:p-8"
    >
      <h3 className="text-lg md:text-2xl font-semibold">{heading}</h3>
      <p className="section-paragraph text-lg mt-2">{blurb}</p>
    </motion.article>
  );
}
