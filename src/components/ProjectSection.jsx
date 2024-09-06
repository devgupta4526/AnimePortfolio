import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

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
      videoRef.current.nextSibling.classList.remove("hidden");
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load(); // Reload the video to display the poster
      videoRef.current.nextSibling.classList.add("hidden");
    }
  };

  return (
    <div className="w-full h-full p-4 mb-2 font-electroharmonic">
      <div className="overflow-x-hidden border-8 border-white rounded-3xl">
        <div
          className="relative min-h-screen bg-cover bg-center bg-fixed bg-no-repeat text-white font-cursive overflow-x-hidden"
          style={{
            backgroundImage: 'url("/assets/images/black-background.jpeg")',
          }}
        >
          <div id="projects">
            <h1 className="title AnimeListH1 uppercase w-fit max-w-[1170px] text-center mx-auto mb-15">
             Overview
            </h1>
          </div>

          <section className="min-h-screen text-center text-2xl">
            <div className="text-left ml-6 mt-8">
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
                    // poster="/assets/images/itachiCrow.jpg"
                    poster="https://private-user-images.githubusercontent.com/78317104/345494179-0c414bde-1291-4ab6-8aae-793ee8194be1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU2MDk4MzUsIm5iZiI6MTcyNTYwOTUzNSwicGF0aCI6Ii83ODMxNzEwNC8zNDU0OTQxNzktMGM0MTRiZGUtMTI5MS00YWI2LThhYWUtNzkzZWU4MTk0YmUxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA2VDA3NTg1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg5OWI0NDdiNzUxMjJkZWU0MTIzN2ZkZDhiMTJmNGQ0NGExMzQxNGIxN2VhZWMxNDJkZDI1YWJmYjhhMjFhNDgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.2o6TUx89z6TWIg3XyKD7czdAgwyvX-fiPkgQjfrYZWU"
                  >
                    <source
                      src="/assets/videos/SukunaVideo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="hidden absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold rounded-lg">
        Coming Soon...
      </div>
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
                  <div className="hidden absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold rounded-lg">
        Coming Soon...
      </div>
                </div>
              </div>
            </div>
          </section>

          {/* Add other sections as needed */}
          <section className="min-h-screen text-center text-2xl">
            <div className="text-left ml-6 mt-8">
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
                    // poster="/assets/images/rengoku.jpg"
                    poster="https://private-user-images.githubusercontent.com/78317104/345545521-4f9cd7df-a3d0-4675-9515-196abb88b003.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU2MDk5OTQsIm5iZiI6MTcyNTYwOTY5NCwicGF0aCI6Ii83ODMxNzEwNC8zNDU1NDU1MjEtNGY5Y2Q3ZGYtYTNkMC00Njc1LTk1MTUtMTk2YWJiODhiMDAzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA2VDA4MDEzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZlODhiYzFkODk4NzI2YTMyODQ4ZmJmYTUyZTM1YjNlN2M2ODlkNjI2ZDEyMjcwMDUwMmI0NDhkNTk0ZDIyZmQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.lNlDLVTLQJdGtdlK0knvTO0UXWY1n6j4Xrqq_v19lYc"

                  >
                    <source
                      src="/assets/videos/SukunaVideo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="hidden absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold rounded-lg">
        Coming Soon...
      </div>
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
                  <div className="hidden absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold rounded-lg">
        Coming Soon...
      </div>
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-screen text-center text-2xl">
            <div className="text-left ml-6 mt-8">
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
                    // poster="/assets/images/naruto.jpg"
                    poster="https://github.com/devgupta4526/LowMed/blob/main/Copy%20of%20New%20Website%20Blue%20Mockup%20Instagram%20-%20Laptop.png?raw=true"
                  >
                    <source
                      src="/assets/videos/SukunaVideo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="hidden absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold rounded-lg">
        Coming Soon...
      </div>
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
                  <div className="hidden absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold rounded-lg">
        Coming Soon...
      </div>
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-screen text-center text-2xl mb-4">
            <div className="text-left ml-6 mt-8">
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
                    // poster="/assets/images/itachiCrow.jpg"
                    poster="https://github.com/devgupta4526/Underground-Academy/blob/main/New%20Website%20Blue%20Mockup%20Instagram%20-%20Laptop%20(1).png?raw=true"
                  >
                    <source
                      src="/assets/videos/SukunaVideo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="hidden absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold rounded-lg">
        Coming Soon...
      </div>
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
                  <div className="hidden absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold rounded-lg">
        Coming Soon...
      </div>
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
