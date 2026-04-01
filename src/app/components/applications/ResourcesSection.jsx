"use client";

import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function ResourcesSection() {
  const resources = [
    { title: "SensoBake Technical Data", type: "PDF" },
    { title: "Cleaning Label Compliance", type: "PDF" },
    { title: "Dairy Flavour Stability Report", type: "PDF" },
    { title: "Nutraceutical Masking Whitepaper", type: "PDF" },
  ];

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-primary font-black tracking-tight text-gray-900 leading-tight"
          >
            Technical Resources & <span className="text-primary">Downloads</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl text-black/60 font-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Access our library of technical data sheets, compliance roadmap guides, and performance reports to accelerate your product development.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mx-auto mt-8 h-[3px] bg-primary rounded-full shadow-[0_0_12px_rgba(210,36,34,0.3)]"
          />
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {resources.map((res, index) => (
            <motion.a 
              key={index}
              href="#"
              variants={item}
              className="group flex flex-col justify-between p-8 bg-gray-50/50 rounded-3xl border border-black/5 hover:border-primary/20 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 text-left min-h-[280px]"
            >
              <div>
                <div className="mb-8 size-14 rounded-2xl bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-black/5">
                  <FileText className="w-8 h-8" />
                </div>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
                  {res.type}
                </span>
                <h3 className="font-bold text-gray-900 text-xl md:text-2xl leading-[1.3] group-hover:text-primary transition-colors tracking-tight">
                  {res.title}
                </h3>
              </div>
              <div className="mt-10 flex items-center text-base font-bold text-black group-hover:text-primary transition-colors">
                <Download className="w-5 h-5 mr-3 transition-transform group-hover:translate-y-1" />
                Download PDF
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
