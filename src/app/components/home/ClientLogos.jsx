"use client";

import { motion } from "framer-motion";

const logos = [
  { id: 1, name: "Global Bake Co." },
  { id: 2, name: "Dairy Innovations" },
  { id: 3, name: "BevTech Solutions" },
  { id: 4, name: "NutriCraft Labs" },
  { id: 5, name: "Hospitality Brands" },
  { id: 6, name: "Confectionery Arts" },
];

export default function ClientLogos() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white py-16 border-y border-black/5 overflow-hidden">
      <div className="section-container">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.25em] mb-12"
        >
          Trusted by Industry Leaders
        </motion.p>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-between items-center gap-x-12 gap-y-10 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 max-w-5xl mx-auto px-4"
        >
          {logos.map((logo) => (
            <motion.div 
              key={logo.id} 
              variants={item}
              className="text-2xl md:text-3xl font-black font-sans text-gray-900 tracking-tighter"
            >
              {logo.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
