// import React, { useState, useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function DemonSlayerCard() {
//   const [activeCard, setActiveCard] = useState(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//     });
//   }, []);

//   const handleCardClick = (card) => {
//     setActiveCard(activeCard === card ? null : card);
//   };

//   return (
//     <div className="DemonSlayerCard min-h-[80vh] flex justify-center items-center flex-wrap relative">
//       <div className="DemonSlayerCardContainer w-full h-full flex justify-center items-center">
//         <div className="Cards w-full flex flex-wrap justify-around items-center">
//           {/* Tanjiro */}
//           <div
//             className="flex justify-center items-center flex-col relative"
//             data-aos="zoom-in"
//             onClick={() => handleCardClick("tanjiro")}
//           >
//             <div className="Card overflow-hidden text-center relative w-[270px] sm:w-[21vw]  sm:h-[21vw] h-[300px] bg-[url('/assets/images/tanjiro.png')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8 cursor-pointer">
//               <div className="Colour absolute w-full h-[15%] bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
//               <div className="CardText opacity-0 relative top-[80px] text-[120%]">
//                 <h3>Tanjiro</h3>
//                 <p>
//                   Breathing Technique: <b>Water/Sun</b>
//                 </p>
//               </div>
//               <div className="ColorBottom absolute w-full h-[15%] bg-[rgba(97,34,28,1)] left-[150px] top-[268px] transform rotate-[-45deg] translate-y-[95px]"></div>
//             </div>
//             {activeCard === "tanjiro" && (
//               <div className="p-15">
//                 <div
//                   className="DetailsExperience absolute inset-0 left-9 bottom-9 text-white text-lg bg-gray-500 w-[300px] h-[30vw] mt-2 overflow-auto mb-6 rounded-3xl scroll-container"
//                 >
//                   <div className="scroll-content flex flex-col items-center bg-white shadow-lg p-6 m-4 max-w-md rounded-3xl">
//                     <p className="text-gray-500">Tesla</p>
//                     <p className="text-gray-400 text-sm mb-4">
//                       Jan 2021 - Feb 2022
//                     </p>
//                     <ul className="text-gray-700 list-disc pl-5 space-y-2">
//                       <li>
//                         Developing and maintaining web applications using
//                         React.js.
//                       </li>
//                       <li>Collaborating with cross-functional teams.</li>
//                       <li>
//                         Implementing responsive design and cross-browser
//                         compatibility.
//                       </li>
//                       <li>
//                         Participating in code reviews and providing feedback.
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Nezuko */}
//           <div
//             className="flex justify-center items-center flex-col relative"
//             data-aos="zoom-in"
//             onClick={() => handleCardClick("nezuko")}
//           >
//             <div className="Card Nezuko overflow-hidden text-center relative w-[270px] sm:w-[21vw]  sm:h-[21vw] h-[300px] bg-[url('/assets/images/nezuko.jpg')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8 cursor-pointer">
//               <div className="Colour absolute w-full h-[15%] bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
//               <div className="CardText opacity-0 relative top-[80px] text-[120%]">
//                 <h3>Nezuko</h3>
//                 <p>
//                   Breathing Technique: <b>Blood Demon Art</b>
//                 </p>
//               </div>
//               <div className="ColorBottom absolute w-full h-[15%] bg-[rgba(97,34,28,1)] left-[150px] top-[268px] transform rotate-[-45deg] translate-y-[95px]"></div>
//             </div>
//             {activeCard === "nezuko" && (
//               <div className="p-15">
//                 <div
//                   className="DetailsExperience absolute text-white text-lg bg-gray-500 w-[50vw] h-[50vh]  mt-2 overflow-auto mb-6 rounded-3xl scroll-container flex justify-center items-center"
//                 >
//                   <div className="scroll-content flex flex-col items-center bg-white shadow-lg p-6 m-4 max-w-md rounded-3xl">
//                     <p className="text-gray-500">Tesla</p>
//                     <p className="text-gray-400 text-sm mb-4">
//                       Jan 2021 - Feb 2022
//                     </p>
//                     <ul className="text-gray-700 list-disc pl-5 space-y-2">
//                       <li>
//                         Developing and maintaining web applications using
//                         React.js.
//                       </li>
//                       <li>Collaborating with cross-functional teams.</li>
//                       <li>
//                         Implementing responsive design and cross-browser
//                         compatibility.
//                       </li>
//                       <li>
//                         Participating in code reviews and providing feedback.
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Zenitsu */}
//           <div
//             className="flex justify-center items-center flex-col relative"
//             data-aos="zoom-in"
//             onClick={() => handleCardClick("zenitsu")}
//           >
//             <div className="Card Zenitsu overflow-hidden text-center relative w-[270px] sm:w-[21vw]  sm:h-[21vw] h-[300px] bg-[url('/assets/images/zenitsu.jpg')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8 cursor-pointer">
//               <div className="Colour absolute w-full h-[15%] bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
//               <div className="CardText opacity-0 relative top-[80px] text-[120%]">
//                 <h3>Zenitsu</h3>
//                 <p>
//                   Breathing Technique: <b>Thunder</b>
//                 </p>
//               </div>
//               <div className="ColorBottom absolute w-full h-[15%] bg-[rgba(97,34,28,1)] left-[150px] top-[268px] transform rotate-[-45deg] translate-y-[95px]"></div>
//             </div>
//             {activeCard === "zenitsu" && (
//               <div className="p-15">
//                 <div
//                   className="DetailsExperience text-white text-lg bg-gray-500 w-[300px] h-[200px] mt-2 overflow-auto mb-6 rounded-3xl scroll-container"
//                 >
//                   <div className="scroll-content flex flex-col items-center bg-white shadow-lg p-6 m-4 max-w-md rounded-3xl">
//                     <p className="text-gray-500">Tesla</p>
//                     <p className="text-gray-400 text-sm mb-4">
//                       Jan 2021 - Feb 2022
//                     </p>
//                     <ul className="text-gray-700 list-disc pl-5 space-y-2">
//                       <li>
//                         Developing and maintaining web applications using
//                         React.js.
//                       </li>
//                       <li>Collaborating with cross-functional teams.</li>
//                       <li>
//                         Implementing responsive design and cross-browser
//                         compatibility.
//                       </li>
//                       <li>
//                         Participating in code reviews and providing feedback.
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DemonSlayerCard;
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
            onClick={() => handleCardClick("tanjiro")}
          >
            <div className="Card overflow-hidden text-center relative w-[270px] sm:w-[21vw] sm:h-[21vw] h-[300px] bg-[url('/assets/images/tanjiro.png')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8 cursor-pointer">
              <div className="Colour absolute w-full h-[15%] bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
              <div className="CardText opacity-0 relative top-[80px] text-[120%]">
                <h3>Tanjiro</h3>
                <p>
                  Breathing Technique: <b>Water/Sun</b>
                </p>
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
                  <p className="text-gray-500">Tesla</p>
                  <p className="text-gray-400 text-sm mb-4">
                    Jan 2021 - Feb 2022
                  </p>
                  <ul className="text-gray-700 list-disc pl-5 space-y-2">
                    <li>Developing and maintaining web applications using React.js.</li>
                    <li>Collaborating with cross-functional teams.</li>
                    <li>Implementing responsive design and cross-browser compatibility.</li>
                    <li>Participating in code reviews and providing feedback.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Nezuko */}
          <div
            className="flex justify-center items-center flex-col relative"
            data-aos="zoom-in"
            onClick={() => handleCardClick("nezuko")}
          >
            <div className="Card Nezuko overflow-hidden text-center relative w-[270px] sm:w-[21vw] sm:h-[21vw] h-[300px] bg-[url('/assets/images/nezuko.jpg')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8 cursor-pointer">
              <div className="Colour absolute w-full h-[15%] bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
              <div className="CardText opacity-0 relative top-[80px] text-[120%]">
                <h3>Nezuko</h3>
                <p>
                  Breathing Technique: <b>Blood Demon Art</b>
                </p>
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
                  <p className="text-gray-500">Tesla</p>
                  <p className="text-gray-400 text-sm mb-4">
                    Jan 2021 - Feb 2022
                  </p>
                  <ul className="text-gray-700 list-disc pl-5 space-y-2">
                    <li>Developing and maintaining web applications using React.js.</li>
                    <li>Collaborating with cross-functional teams.</li>
                    <li>Implementing responsive design and cross-browser compatibility.</li>
                    <li>Participating in code reviews and providing feedback.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Zenitsu */}
          <div
            className="flex justify-center items-center flex-col relative"
            data-aos="zoom-in"
            onClick={() => handleCardClick("zenitsu")}
          >
            <div className="Card Zenitsu overflow-hidden text-center relative w-[270px] sm:w-[21vw] sm:h-[21vw] h-[300px] bg-[url('/assets/images/zenitsu.jpg')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8 cursor-pointer">
              <div className="Colour absolute w-full h-[15%] bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
              <div className="CardText opacity-0 relative top-[80px] text-[120%]">
                <h3>Zenitsu</h3>
                <p>
                  Breathing Technique: <b>Thunder</b>
                </p>
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
                  <p className="text-gray-500">Tesla</p>
                  <p className="text-gray-400 text-sm mb-4">
                    Jan 2021 - Feb 2022
                  </p>
                  <ul className="text-gray-700 list-disc pl-5 space-y-2">
                    <li>Developing and maintaining web applications using React.js.</li>
                    <li>Collaborating with cross-functional teams.</li>
                    <li>Implementing responsive design and cross-browser compatibility.</li>
                    <li>Participating in code reviews and providing feedback.</li>
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
