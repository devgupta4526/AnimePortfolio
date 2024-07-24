import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimeCard = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });

    tl.to(cardRef.current, {
      rotateY: 180,
      repeat: -1,
      yoyo: true,
      transformOrigin: "center center",
    });

    // Cleanup animation on component unmount
    return () => tl.kill();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-extrabold uppercase absolute z-10">
          Kimetsu no Yaiba
        </h1>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 perspective-1000 w-full h-full">
        <div ref={cardRef} className="relative w-full h-full transform-style-preserve-3d">
          {/* Main Wallpaper */}
          <div className="absolute inset-0 z-20">
            <img
              src="https://www.yudiz.com/codepen/gsap-landing-page/main-wallpaper.png"
              alt="main-wallpaper"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>

          {/* Anime Card Inner */}
          <div className="absolute inset-0 transform-style-preserve-3d">
            {/* Front Side */}
            <div className="absolute inset-0 backface-hidden">
              <img
                src=""
                alt="anime-img"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 rotate-y-180 backface-hidden">
              <img
                src=""
                alt="anime-img"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
