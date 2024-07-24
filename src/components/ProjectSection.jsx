// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// import Headline from './Headline';
// import HoverVideoPlay from './HoverVideoPlay';

// function ProjectSection() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1500, // Duration of the animation
//       easing: 'ease-in-out', // Easing function for the animation
//     });
//   }, []);

//   return (
//     <div className='w-full h-full p-4 mb-2'>
//       <div className='overflow-x-hidden  border-8 border-white rounded-3xl '>
//        <div className="relative min-h-screen bg-cover bg-center bg-fixed bg-no-repeat text-white font-cursive overflow-x-hidden" style={{ backgroundImage: 'url("/assets/images/black-background.jpeg")' }}>

//        <div id="projects" >
//     {/* <Headline title={"Projects"} alignment={"text-center"}/> */}
//     <h1 class="title AnimeListH1 uppercase w-fit max-w-[1170px] text-center mx-auto mb-15"> Projects </h1>
//         </div>
//       <section className="min-h-screen text-center text-2xl">
//         <div className="text-left ml-6">
//           <h3 className='text-2xl uppercase tracking-widest underline'>App Projects</h3>
//         </div>
//         <div className="relative flex justify-between w-11/12 mx-auto mb-4">
//           <div className="relative flex items-center justify-center w-full">
//             <div className="absolute w-3/4 md:w-1/2 h-64 top-4" data-aos="fade-left" data-aos-delay="50">
//               <img src="https://namratapdrjs.netlify.app/scrolling-animations/assets/dark.png" alt="dark" className="w-full h-full rounded-lg object-cover hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer" />
//             </div>
//             <div className="absolute w-3/4 md:w-1/2 h-64 top-96 right-0" data-aos="fade-right" data-aos-delay="100">
//               <img src="https://namratapdrjs.netlify.app/scrolling-animations/assets/umbrella.jpg" alt="umbrella" className="w-full h-full rounded-lg object-cover hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="min-h-screen text-center text-2xl">
//         <div className="text-left ml-6">
//           <h3 className='text-2xl uppercase tracking-widest underline'>Web Projects</h3>
//         </div>
//         <div className="relative flex flex-col items-center justify-center w-11/12 mx-auto mb-4">
//           <div className="relative flex items-center justify-center w-full">
//             <div className="absolute w-3/4 md:w-1/2 h-64 top-4" data-aos="zoom-in-left" data-aos-delay="50">
//               <img src="https://namratapdrjs.netlify.app/scrolling-animations/assets/bb.jpg" alt="breaking bad" className="w-full h-full rounded-lg object-cover hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer" />
//             </div>
//             <div className="absolute w-3/4 md:w-1/2 h-64 top-96 right-0" data-aos="zoom-in-right" data-aos-delay="100">
//               <img src="https://namratapdrjs.netlify.app/scrolling-animations/assets/mh.jpg" alt="Mind Hunter" className="w-full h-full rounded-lg object-cover hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="min-h-screen text-center text-2xl">
//         <div className="text-left ml-6">
//           <h3 className='text-2xl uppercase tracking-widest underline'>AIML Projects</h3>
//         </div>
//         <div className="relative flex flex-col items-center justify-center w-11/12 mx-auto mb-4">
//           <div className="relative flex items-center justify-center w-full">
//             <div className="absolute w-3/4 md:w-1/2 h-64 top-4" data-aos="flip-left" data-aos-delay="50">
//               <img src="https://namratapdrjs.netlify.app/scrolling-animations/assets/b99.jpg" alt="brooklyn nine nine" className="w-full h-full rounded-lg object-cover" />
//             </div>
//             <div className="absolute w-3/4 md:w-1/2 h-64 top-96 right-0" data-aos="flip-right" data-aos-delay="100">
//               <img src="https://namratapdrjs.netlify.app/scrolling-animations/assets/one-day-at-a-time.jpg" alt="one-day-at-a-time" className="w-full h-full rounded-lg object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="min-h-screen text-center text-2xl">
//         <div className="text-left ml-6">
//           <h3 className='text-2xl uppercase tracking-widest underline'>Cross Platform Projects</h3>
//         </div>
//         <div className="relative flex flex-col items-center justify-center w-11/12 mx-auto mb-4">
//           <div className="relative flex items-center justify-center w-full">
//             <div className="absolute w-3/4 md:w-1/2 h-64 top-4" data-aos="fade-left" data-aos-delay="50">
//               <img src="https://namratapdrjs.netlify.app/scrolling-animations/assets/Killing-Eve.jpg" alt="Killing eve" className="w-full h-full rounded-lg object-cover" />
//             </div>
//             <div className="absolute w-3/4 md:w-1/2 h-64 top-96 right-0" data-aos="fade-right" data-aos-delay="100">
//               <img src="https://namratapdrjs.netlify.app/scrolling-animations/assets/elite.jpg" alt="Elite" className="w-full h-full rounded-lg object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

// <section className="min-h-screen text-center text-2xl mb-4">
//   <div className="text-left ml-6">
//     <h3 className='text-2xl uppercase tracking-widest underline'>Misclenaous</h3>
//   </div>
//   <div className="relative flex flex-col items-center justify-center w-11/12 mx-auto mb-4">
//     <div className="relative flex items-center justify-center w-full">
//       <div className="absolute w-3/4 md:w-1/2 h-64 top-4" data-aos="zoom-in-up" data-aos-delay="50">
//         <img src="https://namratapdrjs.netlify.app/scrolling-animations/assets/fma.jpg" alt="fma" className="w-full h-full rounded-lg object-cover hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer" />
//       </div>
//       <div className="absolute w-3/4 md:w-1/2 h-64 top-96 right-0 " data-aos="zoom-in-down" data-aos-delay="100">
//         <img src="https://namratapdrjs.netlify.app/scrolling-animations/assets/ds.png" alt="demon slayer" className="w-full h-full rounded-lg object-cover hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer" />
//       </div>
//     </div>
//   </div>
// </section>

// <section className="min-h-screen text-center text-2xl mb-4">
//   <div className="text-left ml-6">
//     <h3 className='text-2xl uppercase tracking-widest underline'>Misclenaous</h3>
//   </div>
//   <div className="relative flex flex-col items-center justify-center w-11/12 mx-auto mb-4">
//     <div className="relative flex items-center justify-center w-full">
//       <div className="absolute w-3/4 md:w-1/2 h-64 top-4" data-aos="zoom-in-up" data-aos-delay="50">
//        <HoverVideoPlay/>
//       </div>
//       <div className="absolute w-3/4 md:w-1/2 h-64 top-96 right-0 " data-aos="zoom-in-down" data-aos-delay="100">
//         <img src="https://namratapdrjs.netlify.app/scrolling-animations/assets/ds.png" alt="demon slayer" className="w-full h-full rounded-lg object-cover hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer" />
//       </div>
//     </div>
//   </div>
// </section>

//     </div>
//      </div>
//     </div>

//   );
// }

// export default ProjectSection;

import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import HoverVideoPlay from "./HoverVideoPlay";

function ProjectSection() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Duration of the animation
      easing: "ease-in-out", // Easing function for the animation
    });
  }, []);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);
  const videoRef7 = useRef(null);
  const videoRef8 = useRef(null);

  const handleMouseEnter = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load(); // Reload the video to display the poster
    }
  };

  return (
    <div className="w-full h-full p-4 mb-2">
      <div className="overflow-x-hidden border-8 border-white rounded-3xl">
        <div
          className="relative min-h-screen bg-cover bg-center bg-fixed bg-no-repeat text-white font-cursive overflow-x-hidden"
          style={{
            backgroundImage: 'url("/assets/images/black-background.jpeg")',
          }}
        >
          <div id="projects">
            <h1 className="title AnimeListH1 uppercase w-fit max-w-[1170px] text-center mx-auto mb-15">
              Projects
            </h1>
          </div>

          <section className="min-h-screen text-center text-2xl">
            <div className="text-left ml-6">
              <h3 className="text-2xl uppercase tracking-widest underline">
                App Projects
              </h3>
            </div>
            <div className="relative flex justify-between w-11/12 mx-auto mb-4">
              <div className="relative flex items-center justify-center w-full">
                <div
                  className="absolute w-3/4 md:w-1/2 h-64 top-4"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  onMouseEnter={() => handleMouseEnter(videoRef1)}
                  onMouseLeave={() => handleMouseLeave(videoRef1)}
                >
                  <video
                    ref={videoRef1}
                    className="absolute top-0 left-0 object-cover w-full h-full rounded-lg hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer"
                    loop
                    muted
                    poster="/assets/images/itachiCrow.jpg"
                  >
                    <source
                      src="/assets/videos/SukunaVideo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div
                  className="absolute w-3/4 md:w-1/2 h-64 top-96 right-0"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  onMouseEnter={() => handleMouseEnter(videoRef2)}
                  onMouseLeave={() => handleMouseLeave(videoRef2)}
                >
                  <video
                    ref={videoRef2}
                    className="absolute top-0 left-0 object-cover w-full h-full rounded-lg hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer"
                    loop
                    muted
                    poster="/assets/images/itachiCrow.jpg"
                  >
                    <source
                      src="/assets/videos/SukunaVideo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </section>

          {/* Add other sections as needed */}
          <section className="min-h-screen text-center text-2xl">
            <div className="text-left ml-6">
              <h3 className="text-2xl uppercase tracking-widest underline">
                Web Projects
              </h3>
            </div>
            <div className="relative flex justify-between w-11/12 mx-auto mb-4">
              <div className="relative flex items-center justify-center w-full">
                <div
                  className="absolute w-3/4 md:w-1/2 h-64 top-4"
                  data-aos="zoom-in-left"
                  data-aos-delay="50"
                  onMouseEnter={() => handleMouseEnter(videoRef3)}
                  onMouseLeave={() => handleMouseLeave(videoRef3)}
                >
                  <video
                    ref={videoRef3}
                    className="absolute top-0 left-0 object-cover w-full h-full rounded-lg hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer"
                    loop
                    muted
                    poster="/assets/images/rengoku.jpg"
                  >
                    <source
                      src="/assets/videos/SukunaVideo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div
                  className="absolute w-3/4 md:w-1/2 h-64 top-96 right-0"
                  data-aos="zoom-in-right"
                  data-aos-delay="100"
                  onMouseEnter={() => handleMouseEnter(videoRef4)}
                  onMouseLeave={() => handleMouseLeave(videoRef4)}
                >
                  <video
                    ref={videoRef4}
                    className="absolute top-0 left-0 object-cover w-full h-full rounded-lg hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer"
                    loop
                    muted
                    poster="/assets/images/rengoku.jpg"
                  >
                    <source
                      src="/assets/videos/SukunaVideo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-screen text-center text-2xl">
            <div className="text-left ml-6">
              <h3 className="text-2xl uppercase tracking-widest underline">
                AIML Projects
              </h3>
            </div>
            <div className="relative flex flex-col items-center justify-center w-11/12 mx-auto mb-4">
              <div className="relative flex items-center justify-center w-full">
                <div
                  className="absolute w-3/4 md:w-1/2 h-64 top-4"
                  data-aos="flip-left"
                  data-aos-delay="50"
                  onMouseEnter={() => handleMouseEnter(videoRef5)}
                  onMouseLeave={() => handleMouseLeave(videoRef5)}
                >
                  <video
                    ref={videoRef5}
                    className="absolute top-0 left-0 object-cover w-full h-full rounded-lg hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer"
                    loop
                    muted
                    poster="/assets/images/naruto.jpg"
                  >
                    <source
                      src="/assets/videos/SukunaVideo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div
                  className="absolute w-3/4 md:w-1/2 h-64 top-96 right-0"
                  data-aos="flip-right"
                  data-aos-delay="100"
                  onMouseEnter={() => handleMouseEnter(videoRef6)}
                  onMouseLeave={() => handleMouseLeave(videoRef6)}
                >
                  <video
                    ref={videoRef6}
                    className="absolute top-0 left-0 object-cover w-full h-full rounded-lg hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer"
                    loop
                    muted
                    poster="/assets/images/naruto.jpg"
                  >
                    <source
                      src="/assets/videos/SukunaVideo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-screen text-center text-2xl mb-4">
            <div className="text-left ml-6">
              <h3 className="text-2xl uppercase tracking-widest underline">
                Misclenaous
              </h3>
            </div>
            <div className="relative flex flex-col items-center justify-center w-11/12 mx-auto mb-4">
              <div className="relative flex items-center justify-center w-full">
                <div
                  className="absolute w-3/4 md:w-1/2 h-64 top-4"
                  data-aos="zoom-in-up"
                  data-aos-delay="50"
                  onMouseEnter={() => handleMouseEnter(videoRef7)}
                  onMouseLeave={() => handleMouseLeave(videoRef7)}
                >
                  <video
                    ref={videoRef7}
                    className="absolute top-0 left-0 object-cover w-full h-full rounded-lg hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer"
                    loop
                    muted
                    poster="/assets/images/itachiCrow.jpg"
                  >
                    <source
                      src="/assets/videos/SukunaVideo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div
                  className="absolute w-3/4 md:w-1/2 h-64 top-96 right-0 "
                  data-aos="zoom-in-down"
                  data-aos-delay="100"
                  onMouseEnter={() => handleMouseEnter(videoRef8)}
                  onMouseLeave={() => handleMouseLeave(videoRef8)}
                >
                  <video
                    ref={videoRef8}
                    className="absolute top-0 left-0 object-cover w-full h-full rounded-lg hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer"
                    loop
                    muted
                    poster="/assets/images/itachiCrow.jpg"
                  >
                    <source
                      src="/assets/videos/SukunaVideo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
