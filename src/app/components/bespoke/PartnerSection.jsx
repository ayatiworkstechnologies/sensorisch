"use client";

import { motion } from "framer-motion";
import { Sparkles, Factory, Globe2, Leaf, ArrowRight } from "lucide-react";

const fadeUpText = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function PartnerSection() {
  return (
    <section
      id="bespoke"
      className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50/50"
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUpText}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Why Partner with US{" "}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We go beyond supplying flavors. We build collaborative ecosystems
            designed to scale your operations, protect your IP, and conquer
            global markets.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-2"
        >
          <FeatureCard
            icon={<Sparkles className="h-7 w-7" />}
            title="Exclusive Flavour Development"
            blurb="Develop proprietary flavour architectures that are unique to your brand - protected by NDAs, owned entirely by you, and built to deepen consumer loyalty with every purchase."
            accent="from-amber-500 to-rose-500"
            bgGlow="bg-rose-500/5"
            iconBg="bg-rose-100/80 text-rose-600"
          />

          <FeatureCard
            icon={<Factory className="h-7 w-7" />}
            title="Manufacturing Flexibility"
            blurb="Choose from liquid, powder, water-soluble, or oil-soluble delivery formats; each engineered to integrate seamlessly into your existing manufacturing process, with no line modifications required."
            accent="from-blue-500 to-cyan-500"
            bgGlow="bg-cyan-500/5"
            iconBg="bg-blue-100/80 text-blue-600"
          />

          <FeatureCard
            icon={<Globe2 className="h-7 w-7" />}
            title="Global Compliance"
            blurb="Navigate FSSAI and international regulations with confidence across all markets. We ensure your products meet the strictest global standards without compromising on taste."
            accent="from-emerald-500 to-teal-500"
            bgGlow="bg-teal-500/5"
            iconBg="bg-teal-100/80 text-teal-600"
          />

          <FeatureCard
            icon={<Leaf className="h-7 w-7" />}
            title="Clean-Label Integration"
            blurb="Meet conscious consumer demand with natural, clean-label ingredient solutions. Transparent sourcing and minimalist formulations that resonate with modern buyers."
            accent="from-violet-500 to-fuchsia-500"
            bgGlow="bg-fuchsia-500/5"
            iconBg="bg-violet-100/80 text-violet-600"
          />
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, blurb, accent, bgGlow, iconBg }) {
  return (
    <motion.div
      variants={cardVariant}
      whileHover="hover"
      className="group relative h-full"
    >
      {/* Animated gradient border container */}
      <div
        className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${accent} opacity-0 blur-md transition duration-500 group-hover:opacity-20`}
      />

      {/* Card Content */}
      <div className="relative flex flex-col h-full bg-white rounded-3xl border border-gray-100/80 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden p-8 md:p-10">
        {/* Decorative corner glow */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full ${bgGlow} transition-transform duration-500 group-hover:scale-150`}
        />

        {/* Header w/ Icon */}
        <div className="relative flex items-start justify-between mb-8">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${iconBg} shadow-sm ring-1 ring-white/50 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
          >
            {icon}
          </div>

          <div className="opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBg} ring-1 ring-white/50`}
            >
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Text Body */}
        <div className="relative z-10 flex-grow">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            {blurb}
          </p>
        </div>

        {/* Bottom subtle line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}
