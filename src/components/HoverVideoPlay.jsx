import React from "react";

import HoverVideoPlayer from "react-hover-video-player";

function HoverVideoPlay() {
  return (
    <div className="w-full h-full rounded-xl">
        <HoverVideoPlayer
      videoSrc="/assets/videos/SukunaVideo.mp4"
      pausedOverlay={
        <img
          src="https://namratapdrjs.netlify.app/scrolling-animations/assets/fma.jpg"
          alt="fma"
          className="w-full h-full rounded-lg object-cover hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer"
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
    </div>
  );
}

export default HoverVideoPlay;
