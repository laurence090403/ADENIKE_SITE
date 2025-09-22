// components/VideoBackground.jsx
import React from "react";

const VideoBackground = () => {
  return (
    <section className="relative h-[600px] w-full">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/section-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h2 className="text-4xl font-semibold">Construisons ensemble l’avenir</h2>
        <p className="mt-2 text-lg">Matériaux de qualité, expertise garantie</p>
      </div>
    </section>
  );
};

export default VideoBackground;
