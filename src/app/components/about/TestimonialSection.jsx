"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Sensorisch truly understands the technical demands of large-scale production without compromising on the sensory experience. Their flavour architecture has been foundational to our new product line's success.",
    author: "Dr. Sarah Jenkins",
    role: "Head of Product Innovation, Global Dairy Co.",
  },
  {
    id: 2,
    quote:
      "The precision in their bitterness masking systems is unmatched. We were able to launch our high-protein beverage range 3 months ahead of schedule thanks to their rapid iterative sampling.",
    author: "Elena Rossi",
    role: "Senior Flavour Technologist, PureJuice BevGroup",
  },
  {
    id: 3,
    quote:
      "Working with Sensorisch is like having an extension of our own R&D team. Their deep understanding of heat-stable bakery fillings solved a long-standing shelf-life challenge for us.",
    author: "Marcus Thornton",
    role: "R&D Director, Artisan Breads Ltd.",
  },
  {
    id: 4,
    quote:
      "Their data-driven approach to sensory mapping gave us the confidence to enter the APAC market. The regional flavour profiles they developed were spot-on for our local consumer base.",
    author: "David Chen",
    role: "Senior Formulator, FitNutrition Labs",
  },
  {
    id: 5,
    quote:
      "From clean-label requirements to complex cocoa-extension projects, Sensorisch delivers results that are both scientifically rigorous and commercially winning.",
    author: "Isabella Schmidt",
    role: "Head of Sensory, CocoaCraft Confectionery",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-primary/[0.03] py-16 md:py-24 overflow-hidden border-y border-black/5">
      <div className="mx-auto max-w-5xl px-6 text-center relative">
        {/* Decorative Quote Icon */}
        <svg
          className="mx-auto mb-10 h-12 w-12 text-primary/20"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>

        <div className="relative min-h-[220px] md:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <blockquote className="text-2xl md:text-3xl font-primary font-bold tracking-tight text-gray-900 leading-tight max-w-4xl">
                "{TESTIMONIALS[index].quote}"
              </blockquote>
              
              <figcaption className="mt-8 flex flex-col items-center">
                <div className="font-bold text-gray-900 text-lg">
                  {TESTIMONIALS[index].author}
                </div>
                <div className="mt-1 text-sm font-secondary font-medium text-primary/80 uppercase tracking-widest">
                  {TESTIMONIALS[index].role}
                </div>
              </figcaption>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Navigation */}
        <div className="mt-12 flex justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 transition-all duration-300 rounded-full ${
                i === index 
                ? "w-8 bg-primary shadow-[0_0_12px_rgba(210,36,34,0.4)]" 
                : "w-2.5 bg-gray-300 hover:bg-primary/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
