"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function SensorischVideoLoader({
  videoSrc = "/loader.mp4", // 👈 your video
  poster = "/videos/loader-poster.jpg",        // optional
  width = 260,
  height = 260,
  baseDelay = 0.15,
  revealDuration = 0.6,
  loopGlow = true,
  className = "",
}) {
  const [ready, setReady] = useState(false);

  return (
    <div
      className={`grid place-items-center w-full h-screen ${className}`}
    >
      <div className="relative flex flex-col items-center">
        {/* VIDEO */}
        <motion.video
          src={videoSrc}
          poster={poster}
          muted
          autoPlay
          playsInline
          preload="auto"
          onCanPlayThrough={() => setReady(true)}
          className="select-none rounded-xl"
          style={{ width, height }}
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={
            ready
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : {}
          }
          transition={{
            duration: revealDuration,
            ease: "easeOut",
            delay: baseDelay,
          }}
        />

        {/* OPTIONAL GLOW */}
        {loopGlow && ready && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              width,
              height,
              borderRadius: 16,
            }}
            animate={{
              scale: [1, 1.08, 1],
              filter: [
                "drop-shadow(0 0 0 rgba(0,0,0,0))",
                "drop-shadow(0 12px 26px rgba(220,38,38,0.35))", // primary red glow
                "drop-shadow(0 0 0 rgba(0,0,0,0))",
              ],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "easeInOut",
              delay: baseDelay + revealDuration * 0.6,
            }}
          />
        )}

        {/* PROGRESS DASH */}
        {/* {ready && (
          <motion.div
            aria-hidden
            className="mx-auto mt-6 h-[3px] w-28 rounded-full bg-black/10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: baseDelay + revealDuration * 0.5 }}
          >
            <motion.div
              className="h-full w-10 rounded-full bg-primary"
              animate={{ x: ["-20%", "120%"] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )} */}
      </div>
    </div>
  );
}
