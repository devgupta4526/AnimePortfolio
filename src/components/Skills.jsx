import gsap from "gsap";
import React, { useEffect } from "react";

// const skills = [
//   {
//     id: 1,
//     year: 2024,
//     name: "Solly App",
//     genres: "Kotlin, Jetpack Compose, Room Database, Dagger Hilt",
//     imgSrc: "https://private-user-images.githubusercontent.com/78317104/345494179-0c414bde-1291-4ab6-8aae-793ee8194be1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI1ODkwMjgsIm5iZiI6MTcyMjU4ODcyOCwicGF0aCI6Ii83ODMxNzEwNC8zNDU0OTQxNzktMGM0MTRiZGUtMTI5MS00YWI2LThhYWUtNzkzZWU4MTk0YmUxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODAyVDA4NTIwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZkOThkNTJjZTk3ZmNmYmRlOTI0ZThkNDI1OGVmZGU0YWQ3YWY5OGZjZDViZjE3MDYwMjBlMDJhMjYwMDA0M2UmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.1ajoScNXw9H3xNHhMZbwICuVjRSbr76pOZYjqgMaVQc",
//     link: "https://github.com/devgupta4526/SollyApp"
//   },
//   {
//     id: 2,
//     year: 2019,
//     name: "Demon Slayer",
//     genres: "Adventure Dark fantasy Martial arts",
//     imgSrc: "https://www.yudiz.com/codepen/hover-reveal/demon-slayer.png",
//     link: "https://www.imdb.com/title/tt9335498/"
//   },
//   {
//     id: 3,
//     year: 2016,
//     name: "Your Name",
//     genres: "Romance, Fantasy",
//     imgSrc: "https://www.yudiz.com/codepen/hover-reveal/Your-name.jpg",
//     link: "https://www.imdb.com/title/tt5311514/"
//   },
//   {
//     id: 4,
//     year: 2021,
//     name: "Jujutsu Kaisen",
//     genres: "Adventure, Dark fantasy, Supernatural",
//     imgSrc: "https://www.yudiz.com/codepen/hover-reveal/jujutsu-kaisen.jpg",
//     link: "https://www.imdb.com/title/tt12343534/"
//   },
//   {
//     id: 5,
//     year: 1999,
//     name: "One Piece",
//     genres: "Adventure, Fantasy",
//     imgSrc: "https://www.yudiz.com/codepen/hover-reveal/one-piece.jpg",
//     link: "https://www.imdb.com/title/tt0388629/"
//   },
//   {
//     id: 6,
//     year: 2003,
//     name: "Naruto",
//     genres: "Action, Adventure, Fantasy",
//     imgSrc: "https://www.yudiz.com/codepen/hover-reveal/naruto.jpg",
//     link: "https://www.imdb.com/title/tt0409591/"
//   },
//   {
//     id: 7,
//     year: 2018,
//     name: "My Hero Academia",
//     genres: "Action, Adventure, Superhero",
//     imgSrc: "https://www.yudiz.com/codepen/hover-reveal/my-hero-academia.jpg",
//     link: "https://www.imdb.com/title/tt5626028/"
//   },
//   {
//     id: 8,
//     year: 2014,
//     name: "Attack on Titan",
//     genres: "Action, Drama, Fantasy",
//     imgSrc: "https://www.yudiz.com/codepen/hover-reveal/attack-on-titan.jpg",
//     link: "https://www.imdb.com/title/tt2560140/"
//   },
//   {
//     id: 9,
//     year: 2005,
//     name: "Bleach",
//     genres: "Action, Adventure, Supernatural",
//     imgSrc: "https://www.yudiz.com/codepen/hover-reveal/bleach.jpg",
//     link: "https://www.imdb.com/title/tt0434665/"
//   },
//   {
//     id: 10,
//     year: 2022,
//     name: "Chainsaw Man",
//     genres: "Action, Horror, Supernatural",
//     imgSrc: "https://www.yudiz.com/codepen/hover-reveal/chainsaw-man.jpg",
//     link: "https://www.imdb.com/title/tt16004400/"
//   }
// ];
const skills = [
  {
    id: 1,
    year: 2024,
    name: "LowMed AI Blog App",
    genres: "Javascript,React Js, Node Js, MongoDB, Tailwind, Gemini AI",
    imgSrc: "https://github.com/devgupta4526/LowMed/blob/main/Copy%20of%20New%20Website%20Blue%20Mockup%20Instagram%20-%20Laptop.png?raw=true",
    link: "https://github.com/devgupta4526/LowMed/tree/main"
  },
  {
    id: 2,
    year: 2024,
    name: "Solly App",
    genres: "Kotlin, Jetpack Compose, Room Database, Dagger Hilt",
    imgSrc: "https://github.com/devgupta4526/SollyApp/blob/main/Colorful%20Planner%20Mobile%20App%20Promotion%20Instagram%20Post.png?raw=true",
    link: "https://github.com/devgupta4526/SollyApp"
  },
  {
    id: 3,
    year: 2024,
    name: "Voyara App",
    genres: "React Native, Expo, Firebase,Gemini AI, MapTiler, Pixabay",
    imgSrc: "https://github.com/devgupta4526/Voyara-AI-Travel-Planner/blob/main/Blue%20Modern%20New%20App%20Promotion%20Instagram%20Post.png?raw=true",
    link: "https://github.com/devgupta4526/Voyara-AI-Travel-Planner"
  },
  {
    id: 4,
    year: 2024,
    name: "Newsy-News App",
    genres: "Kotlin, Jetpack Compose, Room Database, Retrofit",
    imgSrc: "https://github.com/devgupta4526/Newsy-NewsApp/blob/main/Music%20App%20Instagram%20Post.png?raw=true",
    link: "https://github.com/devgupta4526/Newsy-NewsApp"
  },
  {
    id: 5,
    year: 2022,
    name: "Show Tracker",
    genres: "Android, Java, Retrofit, Firebase",
    imgSrc: "https://github.com/devgupta4526/ShowTracker/blob/master/Gold%20Real%20Estate%20Download%20Our%20App%20Instagram%20Post.png?raw=true",
    link: "https://github.com/devgupta4526/ShowTracker"
  },
  {
    id: 6,
    year: 2023,
    name: "Underground Academy",
    genres: "Python, Django, SQLite, Razorpay, Bootstrap",
    imgSrc: "https://github.com/devgupta4526/Underground-Academy/blob/main/New%20Website%20Blue%20Mockup%20Instagram%20-%20Laptop%20(1).png?raw=true",
    link: "https://github.com/devgupta4526/Underground-Academy"
  },
  {
    id: 7,
    year: 2023,
    name: "DDOS Attack Detection",
    genres: "Python, Jupyter Notebook, Matplotlib",
    imgSrc: "https://github.com/devgupta4526/DDOS-Attack-Detection-2.0/blob/main/WhatsApp%20Image%202024-09-06%20at%2013.26.32_78607277.jpg?raw=true",
    link: "https://github.com/devgupta4526/DDOS-Attack-Detection"
  },
  {
    id: 8,
    year: 2022,
    name: "Fake Profile Detection",
    genres: "Python, Jupyter Notebook, Pandas Scipy, Flask",
    imgSrc: "https://private-user-images.githubusercontent.com/78317104/365078430-0b0fbd5c-c2c1-4389-9de4-1fa234275c87.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU2MDg4OTQsIm5iZiI6MTcyNTYwODU5NCwicGF0aCI6Ii83ODMxNzEwNC8zNjUwNzg0MzAtMGIwZmJkNWMtYzJjMS00Mzg5LTlkZTQtMWZhMjM0Mjc1Yzg3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTA2VDA3NDMxNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI5MzFlZGYyYmY3OTliMzMwMjk0NjQ1YTAyMDVlYzNiOWViMmI0OWNmMmJiOTc1YjQ3ZDNmOWJmMDRiMGZiNGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ttCGTpJUUimk6cuY_6byO_vjPnMA-lv5pmXpU8BUnG8",
    link: "https://github.com/devgupta4526/FakeProfileDetection-Flask"
  },
  {
    id: 9,
    year: 2024,
    name: "Career Pulse",
    genres: "Javascript,React Js, Node Js, MongoDB, Tailwind",
    imgSrc: "https://github.com/devgupta4526/CareerPulse/blob/main/New%20Website%20Blue%20Mockup%20Instagram%20-%20Laptop.png?raw=true",
    link: "https://github.com/devgupta4526/CareerPulse"
  },
  {
    id: 10,
    year: 2024,
    name: "Threads App Clone",
    genres: "Android, Kotlin, Jetpack Compose, Firebase, Coil",
    imgSrc: "https://github.com/devgupta4526/ThreadsClone/blob/main/Copy%20of%20Music%20App%20Instagram%20Post.png?raw=true",
    link: "https://github.com/devgupta4526/ThreadsClone"
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
    <div className="text-white border-8 border-white rounded-3xl m-3 font-electroharmonic">
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
          Projects
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
