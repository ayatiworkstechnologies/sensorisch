"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import VideoLoader from "./VideoLoader";

export default function SplashLoader({ ms = 1600 }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), ms);
    return () => clearTimeout(t);
  }, [ms]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <VideoLoader />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
