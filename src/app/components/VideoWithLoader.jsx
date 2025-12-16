"use client";

import { useState } from "react";

export default function VideoWithLoader({ src, poster }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Loader */}
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20">
          <span className="h-10 w-10 rounded-full border-4 border-white/40 border-t-white animate-spin" />
        </div>
      )}

      {/* Video */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        onCanPlayThrough={() => setLoaded(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
