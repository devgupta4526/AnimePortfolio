// import React from "react";

// function DemonSlayerCard() {
//   return (
//     <div className="DemonSlayerCard min-h-[80vh] flex justify-center items-center flex-wrap">
//       <div className="DemonSlayerCardContainer w-full h-full flex justify-center items-center">
//         <div className="Cards w-full flex flex-wrap justify-around items-center">
//           {/* Tanjiro */}
//           <div className="flex justify-center items-center flex-col">
//             <div className="Card overflow-hidden text-center relative w-[300px] h-[300px] bg-[url('/assets/images/tanjiro.png')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8 ">
//               <div className="Colour absolute w-full h-[15%]  bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
//               <div className="CardText opacity-0 relative top-[80px] text-[120%]">
//                 <h3>Tanjiro</h3>
//                 <p>
//                   Breathing Technnique: <b>Water/Sun</b>
//                 </p>
//               </div>
//               <div className="ColorBottom absolute w-full h-[15%] bg-[rgba(97,34,28,1)] left-[140px] top-[245px] transform rotate-[-45deg] translate-y-[95px]"></div>
//             </div>
//             <div className="DetailsExperience text-white text-lg bg-gray-500 w-[300px] h-full ">
//               {/* //Add here  */}
//               <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 m-4 max-w-md ">
//                 <h2 className="text-xl font-bold mb-2">
//                   React Native Developer
//                 </h2>
//                 <p className="text-gray-500">Tesla</p>
//                 <p className="text-gray-400 text-sm mb-4">
//                   Jan 2021 - Feb 2022
//                 </p>
//                 <ul className="text-gray-700 list-disc pl-5 space-y-2">
//                   <li>
//                     Developing and maintaining web applications using React.js.
//                   </li>
//                   <li>Collaborating with cross-functional teams.</li>
//                   <li>
//                     Implementing responsive design and cross-browser
//                     compatibility.
//                   </li>
//                   <li>Participating in code reviews and providing feedback.</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Nezuko */}
//           <div className="Card Nezuko overflow-hidden text-center relative w-[300px] h-[300px] bg-[url('/assets/images/nezuko.jpg')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8 ">
//             <div className="Colour absolute w-full h-[15%]  bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
//             <div className="CardText opacity-0 relative top-[80px] text-[120%]">
//               <h3>Tanjiro</h3>
//               <p>
//                 Breathing Technnique: <b>Water/Sun</b>
//               </p>
//             </div>
//             <div className="ColorBottom absolute w-full h-[15%] bg-[rgba(97,34,28,1)] left-[140px] top-[245px] transform rotate-[-45deg] translate-y-[95px]"></div>
//           </div>
//           {/* Zenitsu  */}
//           <div className="Card Zenitsu overflow-hidden text-center relative w-[300px] h-[300px] bg-[url('/assets/images/zenitsu.jpg')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8 ">
//             <div className="Colour absolute w-full h-[15%]  bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
//             <div className="CardText opacity-0 relative top-[80px] text-[120%]">
//               <h3>Tanjiro</h3>
//               <p>
//                 Breathing Technnique: <b>Water/Sun</b>
//               </p>
//             </div>
//             <div className="ColorBottom absolute w-full h-[15%] bg-[rgba(97,34,28,1)] left-[140px] top-[245px] transform rotate-[-45deg] translate-y-[95px]"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DemonSlayerCard;

// import React, { useState, useEffect, useRef } from "react";

// function DemonSlayerCard() {
//   // State to manage which card is currently active
//   const [activeCard, setActiveCard] = useState(null);

//   // Handler to toggle the card details
//   const handleCardClick = (cardId) => {
//     // If the clicked card is already active, hide its details
//     if (activeCard === cardId) {
//       setActiveCard(null);
//     } else {
//       // Otherwise, set the new card as active
//       setActiveCard(cardId);
//     }
//   };

//   const containerRef = useRef(null);
//   const [scrolling, setScrolling] = useState(true);

//   useEffect(() => {
//     const container = containerRef.current;
//     let scrollTop = 0;
//     let scrollInterval;

//     const scroll = () => {
//       if (scrolling) {
//         if (scrollTop >= container.scrollHeight) {
//           scrollTop = 0;
//         }
//         container.scrollTop = scrollTop;
//         scrollTop += 1; // Adjust this value to control the scroll speed
//       }
//     };

//     scrollInterval = setInterval(scroll, 20); // Adjust the interval for smoothness

//     return () => clearInterval(scrollInterval);
//   }, [scrolling]);

//   const pauseScroll = () => setScrolling(false);
//   const resumeScroll = () => setScrolling(true);

//   return (
//     <div className="DemonSlayerCard min-h-[80vh] flex justify-center items-center flex-wrap">
//       <div className="DemonSlayerCardContainer w-full h-full flex justify-center items-center">
//         <div className="Cards w-full flex flex-wrap justify-around items-center">
//           {/* Tanjiro */}
//           <div
//             className="flex justify-center items-center flex-col relative cursor-pointer"
//             onClick={() => handleCardClick("tanjiro")}
//           >
//             <div className="Card overflow-hidden text-center relative w-[300px] h-[300px] bg-[url('/assets/images/tanjiro.png')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8">
//               <div className="Colour absolute w-full h-[15%] bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
//               <div className="CardText opacity-0 relative top-[80px] text-[120%]">
//                 <h3>Tanjiro</h3>
//                 <p>
//                   Breathing Technique: <b>Water/Sun</b>
//                 </p>
//               </div>
//               <div className="ColorBottom absolute w-full h-[15%] bg-[rgba(97,34,28,1)] left-[140px] top-[245px] transform rotate-[-45deg] translate-y-[95px]"></div>
//             </div>
//             {activeCard === "tanjiro" && (
//               <div className="p-15">
//                 <div
//                   className="DetailsExperience text-white text-lg bg-gray-500 w-[300px] h-[200px] mt-2 overflow-auto mb-6 rounded-3xl scroll-container"
//                   onMouseEnter={pauseScroll}
//                   onMouseLeave={resumeScroll}
//                 >
//                   <div className="scroll-content flex flex-col items-center bg-white shadow-lg p-6 m-4 max-w-md rounded-3xl">
//                     <h2 className="text-xl font-bold mb-2">
//                       React Native Developer
//                     </h2>
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
//             className="flex justify-center items-center flex-col relative cursor-pointer"
//             onClick={() => handleCardClick("nezuko")}
//           >
//             <div className="Card Nezuko overflow-hidden text-center relative w-[300px] h-[300px] bg-[url('/assets/images/nezuko.jpg')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8">
//               <div className="Colour absolute w-full h-[15%] bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
//               <div className="CardText opacity-0 relative top-[80px] text-[120%]">
//                 <h3>Nezuko</h3>
//                 <p>
//                   Breathing Technique: <b>Blood Demon Art</b>
//                 </p>
//               </div>
//               <div className="ColorBottom absolute w-full h-[15%] bg-[rgba(97,34,28,1)] left-[140px] top-[245px] transform rotate-[-45deg] translate-y-[95px]"></div>
//             </div>
//             {activeCard === "nezuko" && (
//               <div className="DetailsExperience text-white text-lg bg-gray-500 w-[300px] h-[200px] mt-2">
//                 <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 m-4 max-w-md">
//                   <h2 className="text-xl font-bold mb-2">
//                     React Native Developer
//                   </h2>
//                   <p className="text-gray-500">Tesla</p>
//                   <p className="text-gray-400 text-sm mb-4">
//                     Jan 2021 - Feb 2022
//                   </p>
//                   <ul className="text-gray-700 list-disc pl-5 space-y-2">
//                     <li>
//                       Developing and maintaining web applications using
//                       React.js.
//                     </li>
//                     <li>Collaborating with cross-functional teams.</li>
//                     <li>
//                       Implementing responsive design and cross-browser
//                       compatibility.
//                     </li>
//                     <li>
//                       Participating in code reviews and providing feedback.
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Zenitsu */}
//           <div
//             className="flex justify-center items-center flex-col relative cursor-pointer"
//             onClick={() => handleCardClick("zenitsu")}
//           >
//             <div className="Card Zenitsu overflow-hidden text-center relative w-[300px] h-[300px] bg-[url('/assets/images/zenitsu.jpg')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8">
//               <div className="Colour absolute w-full h-[15%] bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
//               <div className="CardText opacity-0 relative top-[80px] text-[120%]">
//                 <h3>Zenitsu</h3>
//                 <p>
//                   Breathing Technique: <b>Thunder</b>
//                 </p>
//               </div>
//               <div className="ColorBottom absolute w-full h-[15%] bg-[rgba(97,34,28,1)] left-[140px] top-[245px] transform rotate-[-45deg] translate-y-[95px]"></div>
//             </div>
//             {activeCard === "zenitsu" && (
//               <div className="DetailsExperience text-white text-lg bg-gray-500 w-[300px] h-[200px] mt-2">
//                 <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 m-4 max-w-md">
//                   <h2 className="text-xl font-bold mb-2">
//                     React Native Developer
//                   </h2>
//                   <p className="text-gray-500">Tesla</p>
//                   <p className="text-gray-400 text-sm mb-4">
//                     Jan 2021 - Feb 2022
//                   </p>
//                   <ul className="text-gray-700 list-disc pl-5 space-y-2">
//                     <li>
//                       Developing and maintaining web applications using
//                       React.js.
//                     </li>
//                     <li>Collaborating with cross-functional teams.</li>
//                     <li>
//                       Implementing responsive design and cross-browser
//                       compatibility.
//                     </li>
//                     <li>
//                       Participating in code reviews and providing feedback.
//                     </li>
//                   </ul>
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

import React, { useState } from "react";

function DemonSlayerCard() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (card) => {
    setActiveCard(activeCard === card ? null : card);
  };

  return (
    <div className="DemonSlayerCard min-h-[80vh] flex justify-center items-center flex-wrap">
      <div className="DemonSlayerCardContainer w-full h-full flex justify-center items-center">
        <div className="Cards w-full flex flex-wrap justify-around items-center">
          {/* Tanjiro */}
          <div
            className="flex justify-center items-center flex-col relative"
          >
            <div className="Card overflow-hidden text-center relative w-[300px] h-[300px] bg-[url('/assets/images/tanjiro.png')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8 cursor-pointer"
             onClick={() => handleCardClick("tanjiro")}
            >
              <div className="Colour absolute w-full h-[15%] bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
              <div className="CardText opacity-0 relative top-[80px] text-[120%]">
                <h3>Tanjiro</h3>
                <p>
                  Breathing Technique: <b>Water/Sun</b>
                </p>
              </div>
              <div className="ColorBottom absolute w-full h-[15%] bg-[rgba(97,34,28,1)] left-[140px] top-[245px] transform rotate-[-45deg] translate-y-[95px]"></div>
            </div>
            {activeCard === "tanjiro" && (
                <div className="p-15">
                <div
                  className="DetailsExperience text-white text-lg bg-gray-500 w-[300px] h-[200px] mt-2 overflow-auto mb-6 rounded-3xl scroll-container"
                >
                  <div className="scroll-content flex flex-col items-center bg-white shadow-lg p-6 m-4 max-w-md rounded-3xl">
                    {/* <h2 className="text-xl font-bold mb-2 text-red-500">
                      React Native Developer
                    </h2> */}
                    <p className="text-gray-500">Tesla</p>
                    <p className="text-gray-400 text-sm mb-4">
                      Jan 2021 - Feb 2022
                    </p>
                    <ul className="text-gray-700 list-disc pl-5 space-y-2">
                      <li>
                        Developing and maintaining web applications using
                        React.js.
                      </li>
                      <li>Collaborating with cross-functional teams.</li>
                      <li>
                        Implementing responsive design and cross-browser
                        compatibility.
                      </li>
                      <li>
                        Participating in code reviews and providing feedback.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Nezuko */}
          <div
            className="flex justify-center items-center flex-col relative"
            onClick={() => handleCardClick("nezuko")}
          >
            <div className="Card Nezuko overflow-hidden text-center relative w-[300px] h-[300px] bg-[url('/assets/images/nezuko.jpg')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8 cursor-pointer">
              <div className="Colour absolute w-full h-[15%] bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
              <div className="CardText opacity-0 relative top-[80px] text-[120%]">
                <h3>Nezuko</h3>
                <p>
                  Breathing Technique: <b>Blood Demon Art</b>
                </p>
              </div>
              <div className="ColorBottom absolute w-full h-[15%] bg-[rgba(97,34,28,1)] left-[140px] top-[245px] transform rotate-[-45deg] translate-y-[95px]"></div>
            </div>
            {activeCard === "nezuko" && (
                <div className="p-15">
                <div
                  className="DetailsExperience text-white text-lg bg-gray-500 w-[300px] h-[200px] mt-2 overflow-auto mb-6 rounded-3xl scroll-container"
                >
                  <div className="scroll-content flex flex-col items-center bg-white shadow-lg p-6 m-4 max-w-md rounded-3xl">
                    {/* <h2 className="text-xl font-bold mb-2 text-red-500">
                      React Native Developer
                    </h2> */}
                    <p className="text-gray-500">Tesla</p>
                    <p className="text-gray-400 text-sm mb-4">
                      Jan 2021 - Feb 2022
                    </p>
                    <ul className="text-gray-700 list-disc pl-5 space-y-2">
                      <li>
                        Developing and maintaining web applications using
                        React.js.
                      </li>
                      <li>Collaborating with cross-functional teams.</li>
                      <li>
                        Implementing responsive design and cross-browser
                        compatibility.
                      </li>
                      <li>
                        Participating in code reviews and providing feedback.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Zenitsu */}
          <div
            className="flex justify-center items-center flex-col relative"
            onClick={() => handleCardClick("zenitsu")}
          >
            <div className="Card Zenitsu overflow-hidden text-center relative w-[300px] h-[300px] bg-[url('/assets/images/zenitsu.jpg')] bg-center bg-no-repeat bg-cover rounded-[50px] shadow-[30px_30px_40px_#141313,-30px_-30px_40px_#1c1919] transform scale-105 m-8 cursor-pointer">
              <div className="Colour absolute w-full h-[15%] bg-[linear-gradient(125deg,rgba(255,60,14,1)_28%,rgba(255,255,102,1)_89%)] right-[120px] top-[40px] transform rotate-[-45deg] translate-y-[-90px]"></div>
              <div className="CardText opacity-0 relative top-[80px] text-[120%]">
                <h3>Zenitsu</h3>
                <p>
                  Breathing Technique: <b>Thunder</b>
                </p>
              </div>
              <div className="ColorBottom absolute w-full h-[15%] bg-[rgba(97,34,28,1)] left-[140px] top-[245px] transform rotate-[-45deg] translate-y-[95px]"></div>
            </div>
            {activeCard === "zenitsu" && (
               <div className="p-15">
               <div
                 className="DetailsExperience text-white text-lg bg-gray-500 w-[300px] h-[200px] mt-2 overflow-auto mb-6 rounded-3xl scroll-container"
               >
                 <div className="scroll-content flex flex-col items-center bg-white shadow-lg p-6 m-4 max-w-md rounded-3xl">
                   {/* <h2 className="text-xl font-bold mb-2 text-red-500">
                     React Native Developer
                   </h2> */}
                   <p className="text-gray-500">Tesla</p>
                   <p className="text-gray-400 text-sm mb-4">
                     Jan 2021 - Feb 2022
                   </p>
                   <ul className="text-gray-700 list-disc pl-5 space-y-2">
                     <li>
                       Developing and maintaining web applications using
                       React.js.
                     </li>
                     <li>Collaborating with cross-functional teams.</li>
                     <li>
                       Implementing responsive design and cross-browser
                       compatibility.
                     </li>
                     <li>
                       Participating in code reviews and providing feedback.
                     </li>
                   </ul>
                 </div>
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

