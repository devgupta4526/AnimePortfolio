import React, { useEffect } from 'react';
import gsap from 'gsap';

const Banner = () => {
  useEffect(() => {
    gsap.fromTo(".banner-content h2", 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" }
    );

    gsap.fromTo(".banner-content p",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.inOut", delay: 0.5 }
    );
  }, []);

  return (
    <div className="banner bg-black text-white py-20">
      <div className="container mx-auto">
        <div className="row flex flex-col md:flex-row">
          <div className="col-md-6 col-xl-7 flex flex-col">
            <div className="banner-content text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Tanjiro Kamado</h2>
              <p className="hidden md:block mt-4 text-lg">
                Tanjiro Kamado (竈門かまど 炭たん治じ郎ろう Kamado Tanjirō?) is the main
                protagonist of Demon Slayer: Kimetsu no Yaiba. He is a Demon Slayer in the Demon Slayer Corps, who joined to find a
                remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill
                demons, and later swore to defeat Muzan Kibutsuji, the King of Demons, in order to
                prevent others from suffering the same fate as him.
              </p>
              <p className="block md:hidden mt-4 text-lg">
                Tanjiro Kamado (竈門かまど 炭たん治じ郎ろう Kamado Tanjirō?) is the main
                protagonist of Demon Slayer: Kimetsu no Yaiba. He is a Demon Slayer in the Demon Slayer Corps, who joined to find a
                remedy to turn his sister.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
