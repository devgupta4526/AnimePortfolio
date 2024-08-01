// import gsap from "gsap";
// import React, { useEffect } from "react";
// import HoverVideoPlay from "./HoverVideoPlay";

// const Skills = () => {
//   useEffect(() => {
//     // Image Animation
//     const items = document.querySelectorAll(".anime-list li");
//     items.forEach((el) => {
//       gsap.set(".hover-img", { xPercent: -50, yPercent: -50 });
//       const image = el.querySelector(".hover-img");
//       const innerImage = el.querySelector(".hover-img img");
//       const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
//       const mouse = { x: pos.x };
//       const speed = 0.1;
//       const xSet = gsap.quickSetter(image, "x", "px");

//       window.addEventListener("mousemove", (e) => {
//         mouse.x = e.x;
//       });

//       gsap.ticker.add(() => {
//         const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
//         pos.x += (mouse.x - pos.x) * dt;
//         xSet(pos.x);
//       });

//       let direction = "";
//       let oldx = 0;
//       let lastCursorX = window.innerWidth / 2;
//       const cursorThreshold = 150;

//       let timeout;
//       const mousemovemethod = (e) => {
//         if (e.pageX < oldx && e.clientX <= lastCursorX - cursorThreshold) {
//           direction = "left";
//           lastCursorX = e.clientX;
//           innerImage.style.transform = "rotate(-15deg)";
//         } else if (
//           e.pageX > oldx &&
//           e.clientX >= lastCursorX + cursorThreshold
//         ) {
//           direction = "right";
//           lastCursorX = e.clientX;
//           innerImage.style.transform = "rotate(15deg)";
//         }
//         oldx = e.pageX;
//       };

//       document.addEventListener("mousemove", mousemovemethod);
//       document.addEventListener("mousemove", (event) => {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//           innerImage.style.transform = "translateX(0%) rotate(0deg)";
//         }, 100);
//       });
//     });

//     // Text Animation
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const list = document.querySelectorAll(".anime-list li");

//     list.forEach((el) => {
//       el.onmouseenter = (event) => {
//         const targetElement = event.target.querySelector("h2");
//         let iteration = 0;
//         const interval = setInterval(() => {
//           targetElement.innerText = targetElement.innerText
//             .split("")
//             .map((letter, index) => {
//               if (index < iteration) {
//                 return targetElement.dataset.value[index];
//               }
//               return letters[Math.floor(Math.random() * 26)];
//             })
//             .join("");

//           if (iteration >= targetElement.dataset.value.length) {
//             clearInterval(interval);
//           }
//           iteration += 1 / 3;
//         }, 20);
//       };
//     });
//   }, []);

//   return (
//     <div className="text-white border-8 border-white rounded-3xl mt-2 mb-2">
//       <div class="video-container fixed top-0 left-0 w-full h-full z-[-2] ">
//         <video
//           playsInline
//           autoPlay
//           muted
//           loop
//           className="object-cover w-full h-full"
//         >
//           <source src="/assets/videos/amv.mp4" type="video/mp4" />
//         </video>
//       </div>

//       <div class="anime-list mt-15 px-7">
//         <h1 class="title AnimeListH1 uppercase w-fit max-w-[1170px] text-center mx-auto mb-15">
//           {" "}
//           Skills{" "}
//         </h1>
//         <ul className="">
//           <li className="cursor-pointer relative flex items-center flex-wrap py-[26px] mx-[-12px] opacity-40 hover:opacity-100">
//             <div class="index ">
//               <span>01</span>
//             </div>
//             <div class="release-year">
//               <span>2013</span>
//             </div>
//             <div class="anime-name">
//               <h2 data-value="Solly App">Solly App</h2>
//             </div>
//             <div class="genere">
//               <span>Action, Dark fantasy, Post-apocalyptic</span>
//             </div>
//             <div class="redirect-link">
//               <a href="https://www.imdb.com/title/tt2560140/" target="_blank">
//                 <svg
//                   width="1.25rem"
//                   height="1.25rem"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   name="iconArrow"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </a>
//             </div>
//             <div class="hover-img">
//               <img src="https://www.yudiz.com/codepen/hover-reveal/levi_ackerman.jpg" alt="anime-img" class="img-fluid"/>
              
//             </div>
//           </li>
//           <li className="cursor-pointer relative flex items-center">
//             <div class="index">
//               <span>02</span>
//             </div>
//             <div class="release-year">
//               <span>2019</span>
//             </div>
//             <div class="anime-name">
//               <h2 data-value="Demon Slayer">Demon Slayer</h2>
//             </div>
//             <div class="genere">
//               <span>Adventure Dark fantasy Martial arts</span>
//             </div>
//             <div class="redirect-link">
//               <a href="https://www.imdb.com/title/tt9335498/" target="_blank">
//                 <svg
//                   width="1.25rem"
//                   height="1.25rem"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   name="iconArrow"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </a>
//             </div>
//             <div class="hover-img">
//               <img
//                 src="https://www.yudiz.com/codepen/hover-reveal/demon-slayer.png"
//                 alt="anime-img"
//                 class="img-fluid"
//               />
//             </div>
//           </li>
//           <li>
//             <div class="index">
//               <span>03</span>
//             </div>
//             <div class="release-year">
//               <span>2016</span>
//             </div>
//             <div class="anime-name">
//               <h2 data-value="your name">your name</h2>
//             </div>
//             <div class="genere">
//               <span>Romance/Fantasy</span>
//             </div>
//             <div class="redirect-link">
//               <a href="https://www.imdb.com/title/tt5311514/" target="_blank">
//                 <svg
//                   width="1.25rem"
//                   height="1.25rem"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   name="iconArrow"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </a>
//             </div>
//             <div class="hover-img">
//               <img
//                 src="https://www.yudiz.com/codepen/hover-reveal/Your-name.jpg"
//                 alt="anime-img"
//                 class="img-fluid"
//               />
//             </div>
//           </li>
//           <li>
//             <div class="index">
//               <span>04</span>
//             </div>
//             <div class="release-year">
//               <span>2021</span>
//             </div>
//             <div class="anime-name">
//               <h2 data-value="Jujutsu Kaisen">Jujutsu Kaisen</h2>
//             </div>
//             <div class="genere">
//               <span>Adventure Dark fantasy Supernatural</span>
//             </div>
//             <div class="redirect-link">
//               <a href="https://www.imdb.com/title/tt12343534/" target="_blank">
//                 <svg
//                   width="1.25rem"
//                   height="1.25rem"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   name="iconArrow"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </a>
//             </div>
//             <div class="hover-img">
//               <img
//                 src="https://www.yudiz.com/codepen/hover-reveal/jujutsu-kaisen.jpg"
//                 alt="anime-img"
//                 class="img-fluid"
//               />
//             </div>
//           </li>
//           <li>
//             <div class="index">
//               <span>05</span>
//             </div>
//             <div class="release-year">
//               <span>1999</span>
//             </div>
//             <div class="anime-name">
//               <h2 data-value="One Piece">One Piece</h2>
//             </div>
//             <div class="genere">
//               <span>Adventure Fantasy</span>
//             </div>
//             <div class="redirect-link">
//               <a href="https://www.imdb.com/title/tt0388629/" target="_blank">
//                 <svg
//                   width="1.25rem"
//                   height="1.25rem"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   name="iconArrow"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </a>
//             </div>
//             <div class="hover-img">
//               <img
//                 src="https://www.yudiz.com/codepen/hover-reveal/one-piece.jpg"
//                 alt="anime-img"
//                 class="img-fluid"
//               />
//             </div>
//           </li>
//           <li>
//             <div class="index">
//               <span>06</span>
//             </div>
//             <div class="release-year">
//               <span>2019</span>
//             </div>
//             <div class="anime-name">
//               <h2 data-value="Weathering with You">Weathering with You</h2>
//             </div>
//             <div class="genere">
//               <span>Fantasy/Romance</span>
//             </div>
//             <div class="redirect-link">
//               <a href="https://www.imdb.com/title/tt9426210/" target="_blank">
//                 <svg
//                   width="1.25rem"
//                   height="1.25rem"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   name="iconArrow"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </a>
//             </div>
//             <div class="hover-img">
//               <img
//                 src="https://www.yudiz.com/codepen/hover-reveal/weathering-with-you.jpg"
//                 alt="anime-img"
//                 class="img-fluid"
//               />
//             </div>
//           </li>
//           <li>
//             <div class="index">
//               <span>07</span>
//             </div>
//             <div class="release-year">
//               <span>2006</span>
//             </div>
//             <div class="anime-name">
//               <h2 data-value="Death Note">Death Note</h2>
//             </div>
//             <div class="genere">
//               <span>psychological thriller</span>
//             </div>
//             <div class="redirect-link">
//               <a href="https://www.imdb.com/title/tt0877057/" target="_blank">
//                 <svg
//                   width="1.25rem"
//                   height="1.25rem"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   name="iconArrow"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </a>
//             </div>
//             <div class="hover-img">
//               <img
//                 src="https://www.yudiz.com/codepen/hover-reveal/death-note.jpg"
//                 alt="anime-img"
//                 class="img-fluid"
//               />
//             </div>
//           </li>
//           <li>
//             <div class="index">
//               <span>08</span>
//             </div>
//             <div class="release-year">
//               <span>1999</span>
//             </div>
//             <div class="anime-name">
//               <h2 data-value="Naruto">Naruto</h2>
//             </div>
//             <div class="genere">
//               <span>Adventure, Fantasy comedy, Martial arts</span>
//             </div>
//             <div class="redirect-link">
//               <a href="https://www.imdb.com/title/tt0409591/" target="_blank">
//                 <svg
//                   width="1.25rem"
//                   height="1.25rem"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   name="iconArrow"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </a>
//             </div>
//             <div class="hover-img">
//               <img
//                 src="https://www.yudiz.com/codepen/hover-reveal/naruto.png"
//                 alt="anime-img"
//                 class="img-fluid"
//               />
//             </div>
//           </li>
//           <li>
//             <div class="index">
//               <span>9</span>
//             </div>
//             <div class="release-year">
//               <span>2022</span>
//             </div>
//             <div class="anime-name">
//               <h2 data-value="Suzume">Suzume</h2>
//             </div>
//             <div class="genere">
//               <span>Adventure/Animation</span>
//             </div>
//             <div class="redirect-link">
//               <a href="https://www.imdb.com/title/tt16428256/" target="_blank">
//                 <svg
//                   width="1.25rem"
//                   height="1.25rem"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   name="iconArrow"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </a>
//             </div>
//             <div class="hover-img">
//               <img
//                 src="https://www.yudiz.com/codepen/hover-reveal/Suzume.jpg"
//                 alt="anime-img"
//                 class="img-fluid"
//               />
//             </div>
//           </li>
//           <li>
//             <div class="index">
//               <span>10</span>
//             </div>
//             <div class="release-year">
//               <span>1989</span>
//             </div>
//             <div class="anime-name">
//               <h2 data-value="dragon ball">dragon ball </h2>
//             </div>
//             <div class="genere">
//               <span>Adventure, Fantasy, Martial arts</span>
//             </div>
//             <div class="redirect-link">
//               <a href="https://www.imdb.com/title/tt0280249/" target="_blank">
//                 <svg
//                   width="1.25rem"
//                   height="1.25rem"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   name="iconArrow"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </a>
//             </div>
//             <div class="hover-img">
//               <img
//                 src="https://www.yudiz.com/codepen/hover-reveal/Dragon-ball.jpg"
//                 alt="anime-img"
//                 class="img-fluid"
//               />
//             </div>
//           </li>
//           <li>
//             <div class="index">
//               <span>11</span>
//             </div>
//             <div class="release-year">
//               <span>2021</span>
//             </div>
//             <div class="anime-name">
//               <h2 data-value="Arcane">Arcane</h2>
//             </div>
//             <div class="genere">
//               <span>Action, Adventure, Drama, Science fant...</span>
//             </div>
//             <div class="redirect-link">
//               <a href="https://www.imdb.com/title/tt11126994/" target="_blank">
//                 <svg
//                   width="1.25rem"
//                   height="1.25rem"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   name="iconArrow"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </a>
//             </div>
//             <div class="hover-img">
//               <img
//                 src="https://www.yudiz.com/codepen/hover-reveal/jinx.jpg"
//                 alt="anime-img"
//                 class="img-fluid"
//               />
//             </div>
//           </li>
//           <li>
//             <div class="index">
//               <span>12</span>
//             </div>
//             <div class="release-year">
//               <span>2014</span>
//             </div>
//             <div class="anime-name">
//               <h2 data-value="haikyuu">haikyuu </h2>
//             </div>
//             <div class="genere">
//               <span>Comedy, Coming-of-age, Sports</span>
//             </div>
//             <div class="redirect-link">
//               <a href="https://www.imdb.com/title/tt3398540/" target="_blank">
//                 <svg
//                   width="1.25rem"
//                   height="1.25rem"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   name="iconArrow"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </a>
//             </div>
//             <div class="hover-img">
//               <img
//                 src="https://www.yudiz.com/codepen/hover-reveal/haikyuu.jpg"
//                 alt="anime-img"
//                 class="img-fluid"
//               />
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Skills;


import gsap from "gsap";
import React, { useEffect } from "react";
import HoverVideoPlay from "./HoverVideoPlay";

const skills = [
  {
    id: 1,
    year: 2013,
    name: "Solly App",
    genres: "Action, Dark fantasy, Post-apocalyptic",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/levi_ackerman.jpg",
    link: "https://www.imdb.com/title/tt2560140/"
  },
  {
    id: 2,
    year: 2019,
    name: "Demon Slayer",
    genres: "Adventure Dark fantasy Martial arts",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/demon-slayer.png",
    link: "https://www.imdb.com/title/tt9335498/"
  },
  {
    id: 3,
    year: 2016,
    name: "Your Name",
    genres: "Romance, Fantasy",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/Your-name.jpg",
    link: "https://www.imdb.com/title/tt5311514/"
  },
  {
    id: 4,
    year: 2021,
    name: "Jujutsu Kaisen",
    genres: "Adventure, Dark fantasy, Supernatural",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/jujutsu-kaisen.jpg",
    link: "https://www.imdb.com/title/tt12343534/"
  },
  {
    id: 5,
    year: 1999,
    name: "One Piece",
    genres: "Adventure, Fantasy",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/one-piece.jpg",
    link: "https://www.imdb.com/title/tt0388629/"
  },
  {
    id: 6,
    year: 2003,
    name: "Naruto",
    genres: "Action, Adventure, Fantasy",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/naruto.jpg",
    link: "https://www.imdb.com/title/tt0409591/"
  },
  {
    id: 7,
    year: 2018,
    name: "My Hero Academia",
    genres: "Action, Adventure, Superhero",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/my-hero-academia.jpg",
    link: "https://www.imdb.com/title/tt5626028/"
  },
  {
    id: 8,
    year: 2014,
    name: "Attack on Titan",
    genres: "Action, Drama, Fantasy",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/attack-on-titan.jpg",
    link: "https://www.imdb.com/title/tt2560140/"
  },
  {
    id: 9,
    year: 2005,
    name: "Bleach",
    genres: "Action, Adventure, Supernatural",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/bleach.jpg",
    link: "https://www.imdb.com/title/tt0434665/"
  },
  {
    id: 10,
    year: 2022,
    name: "Chainsaw Man",
    genres: "Action, Horror, Supernatural",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/chainsaw-man.jpg",
    link: "https://www.imdb.com/title/tt16004400/"
  }
];


const Skills = () => {
  useEffect(() => {
    // Image Animation
    const items = document.querySelectorAll(".anime-list li");
    items.forEach((el) => {
      gsap.set(".hover-img", { xPercent: -50, yPercent: -50 });
      const image = el.querySelector(".hover-img");
      const innerImage = el.querySelector(".hover-img img");
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const mouse = { x: pos.x };
      const speed = 0.1;
      const xSet = gsap.quickSetter(image, "x", "px");

      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
      });

      gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        xSet(pos.x);
      });

      let direction = "";
      let oldx = 0;
      let lastCursorX = window.innerWidth / 2;
      const cursorThreshold = 150;

      let timeout;
      const mousemovemethod = (e) => {
        if (e.pageX < oldx && e.clientX <= lastCursorX - cursorThreshold) {
          direction = "left";
          lastCursorX = e.clientX;
          innerImage.style.transform = "rotate(-15deg)";
        } else if (
          e.pageX > oldx &&
          e.clientX >= lastCursorX + cursorThreshold
        ) {
          direction = "right";
          lastCursorX = e.clientX;
          innerImage.style.transform = "rotate(15deg)";
        }
        oldx = e.pageX;
      };

      document.addEventListener("mousemove", mousemovemethod);
      document.addEventListener("mousemove", (event) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          innerImage.style.transform = "translateX(0%) rotate(0deg)";
        }, 100);
      });
    });

    // Text Animation
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const list = document.querySelectorAll(".anime-list li");

    list.forEach((el) => {
      el.onmouseenter = (event) => {
        const targetElement = event.target.querySelector("h2");
        let iteration = 0;
        const interval = setInterval(() => {
          targetElement.innerText = targetElement.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return targetElement.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= targetElement.dataset.value.length) {
            clearInterval(interval);
          }
          iteration += 1 / 3;
        }, 20);
      };
    });
  }, []);

  return (
    <div className="text-white border-8 border-white rounded-3xl m-3">
      <div className="video-container fixed top-0 left-0 w-full h-full z-[-2]">
        <video
          playsInline
          autoPlay
          muted
          loop
          className="object-cover w-full h-full"
        >
          <source src="/assets/videos/amv.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="anime-list mt-15 px-7">
        <h1 className="title AnimeListH1 uppercase w-fit max-w-[1170px] text-center mx-auto mb-15">
          Skills
        </h1>
        <ul className="">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className="cursor-pointer relative flex items-center flex-wrap py-[26px] mx-[-12px] opacity-40 hover:opacity-100"
            >
              <div className="index">
                <span>{`0${skill.id}`}</span>
              </div>
              <div className="release-year">
                <span>{skill.year}</span>
              </div>
              <div className="anime-name">
                <h2 data-value={skill.name}>{skill.name}</h2>
              </div>
              <div className="genere">
                <span>{skill.genres}</span>
              </div>
              <div className="redirect-link">
                <a href={skill.link} target="_blank">
                  <svg
                    width="1.25rem"
                    height="1.25rem"
                    viewBox="0 0 16 16"
                    fill="none"
                    name="iconArrow"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="hover-img">
                <img
                  src={skill.imgSrc}
                  alt={skill.name}
                  className="transition-all duration-500"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
