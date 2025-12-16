"use client";

export default function VideoLoader({
  src = "/loader.mp4", // your loader video
  poster = "/loader-poster.jpg", // optional
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-[260px] h-[260px] rounded-full object-contain"
      />
    </div>
  );
}
