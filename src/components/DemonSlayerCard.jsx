import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function DemonSlayerCard() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleCardClick = (card) => {
    setActiveCard(activeCard === card ? null : card);
  };

  const closeDetails = () => {
    setActiveCard(null);
  };

  return (
    <div className="DemonSlayerCard min-h-[80vh] flex justify-center items-center flex-wrap relative">
      <div className="DemonSlayerCardContainer w-full h-full flex justify-center items-center">
        <div className="Cards w-full flex flex-wrap justify-around items-center">
          {/* Tanjiro */}
          <div
            className="flex justify-center items-center flex-col relative"
            data-aos="zoom-in"
           
          >
            <div className="Card overflow-hidden text-center relative w-[270px] sm:w-[21vw] sm:h-[21vw] h-[300px] bg-[url('/assets/images/tanjiro.png')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8 cursor-pointer">
              <div className="Colour absolute w-full h-[15%] bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
              <div className="CardText opacity-0 relative top-[80px] text-[120%]">
                <h3>Android Developer Intern</h3>
                <br/>
                <p>
                Zeromile Research And Development:<br/> <b>Oct 2022 - Dec 2022</b>
                </p>
                <br/>
              
                <button className="z-40"  onClick={() => handleCardClick("tanjiro")}> Show Details</button>
              </div>
              <div className="ColorBottom absolute w-full h-[15%] bg-[rgba(97,34,28,1)] left-[150px] top-[268px] transform rotate-[-45deg] translate-y-[95px]"></div>
            </div>
            {activeCard === "tanjiro" && (
              <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-80 z-50">
                <div className="relative bg-white p-6 max-w-lg w-full rounded-3xl shadow-lg">
                  <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={closeDetails}
                  >
                    ✕
                  </button>
                  <p className="text-gray-500">Android Developer Intern</p>
                  <p className="text-gray-400 text-sm mb-4">
                    Oct 2022 - Dec 2022
                  </p>
                  <ul className="text-gray-700 list-disc pl-5 space-y-2">
                    <li>Worked with technologies JAVA, ANDROID STUDIO, and XML along with libraries like Volley, Retrofit.</li>
                    <li>Improved the responsiveness and design of the application along with animations.</li>
                    <li>Contributed in UI DESIGN, API Integration, upgradation of old libraries, and implementation of new features.</li>
                    <li>Improved the loading speed and space optimized application by 10% by optimizing the code.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Nezuko */}
          <div
            className="flex justify-center items-center flex-col relative"
            data-aos="zoom-in"
           
          >
            <div className="Card Nezuko overflow-hidden text-center relative w-[270px] sm:w-[21vw] sm:h-[21vw] h-[300px] bg-[url('/assets/images/nezuko.jpg')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8 cursor-pointer">
              <div className="Colour absolute w-full h-[15%] bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
              <div className="CardText opacity-0 relative top-[80px] text-[120%]">
              <h3>Martian Summer Intern</h3>
                <br/>
                <p>
                Persistent Systems Ltd:<br/> <b>June 2023 - Aug 2023</b>
                </p>
                <br/>
              
                <button className="z-40"   onClick={() => handleCardClick("nezuko")}> Show Details</button>
              </div>
              <div className="ColorBottom absolute w-full h-[15%] bg-[rgba(97,34,28,1)] left-[150px] top-[268px] transform rotate-[-45deg] translate-y-[95px]"></div>
            </div>
            {activeCard === "nezuko" && (
              <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-80 z-50">
                <div className="relative bg-white p-6 max-w-lg w-full rounded-3xl shadow-lg">
                  <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={closeDetails}
                  >
                    ✕
                  </button>
                  <p className="text-gray-500">Martian Summer Intern</p>
                  <p className="text-gray-400 text-sm mb-4">
                    June 2023 - Aug 2023
                  </p>
                  <ul className="text-gray-700 list-disc pl-5 space-y-2">
                    <li>Comprehensive training in Linux, DSA, Java, Python, and RDBMS.</li>
                    <li>Engaged in practical exercises and projects to apply theoretical concepts.</li>
                    <li>Fostered a deeper understanding of the subject matter.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Zenitsu */}
          <div
            className="flex justify-center items-center flex-col relative"
            data-aos="zoom-in"
           
          >
            <div className="Card Zenitsu overflow-hidden text-center relative w-[270px] sm:w-[21vw] sm:h-[21vw] h-[300px] bg-[url('/assets/images/zenitsu.jpg')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8 cursor-pointer">
              <div className="Colour absolute w-full h-[15%] bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
              <div className="CardText opacity-0 relative top-[80px] text-[120%]">
              <h3>Freelancer</h3>
                <br/>
                <p>
                :<br/> <b></b>
                </p>
                <br/>
              
                <button className="z-40"    onClick={() => handleCardClick("zenitsu")}> Show Details</button>
              </div>
              <div className="ColorBottom absolute w-full h-[15%] bg-[rgba(97,34,28,1)] left-[150px] top-[268px] transform rotate-[-45deg] translate-y-[95px]"></div>
            </div>
            {activeCard === "zenitsu" && (
              <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-80 z-50">
                <div className="relative bg-white p-6 max-w-lg w-full rounded-3xl shadow-lg">
                  <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={closeDetails}
                  >
                    ✕
                  </button>
                  <p className="text-gray-500">Freelancer</p>
                  <p className="text-gray-400 text-sm mb-4">
                    Jan 2021 - Present
                  </p>
                  <ul className="text-gray-700 list-disc pl-5 space-y-2">
                    <li>Developing and maintaining web and mobile applications.</li>
                    <li>Collaborating with cross-functional teams.</li>
                    <li>Implementing responsive design and cross-browser compatibility.</li>
                    <li>Delivering good and robust applications</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemonSlayerCard;
