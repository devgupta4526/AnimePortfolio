import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaAndroid,
  FaGithub,
} from "react-icons/fa";
import {
  SiFirebase,
  SiAmazonaws,
  SiSqlite,
  SiDjango,
  SiPostman,
  SiKotlin,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

const skills = [
  { icon: <FaJava />, label: "Java", color: "#f89820" },
  { icon: <FaPython />, label: "Python", color: "#3776ab" },
  { icon: <FaHtml5 />, label: "HTML", color: "#e34f26" },
  { icon: <FaCss3Alt />, label: "CSS", color: "#1572b6" },
  { icon: <FaJsSquare />, label: "JavaScript", color: "#f7df1e" },
  { icon: <SiKotlin />, label: "Kotlin", color: "#7f52ff" },
  { icon: <FaBootstrap />, label: "Bootstrap", color: "#7952b3" },
  { icon: <SiDjango />, label: "Django", color: "#092e20" },
  { icon: <FaReact />, label: "React JS", color: "#61dafb" },
  { icon: <FaAndroid />, label: "Android", color: "#3ddc84" },
  { icon: <SiFirebase />, label: "Firebase", color: "#ffca28" },
  { icon: <SiAmazonaws />, label: "AWS", color: "#ff9900" },
  { icon: <DiMysql />, label: "MySQL", color: "#00758f" },
  { icon: <SiSqlite />, label: "SQLite", color: "#003b57" },
  { icon: <SiDjango />, label: "Django Rest Framework", color: "#092e20" },
  { icon: <FaAndroid />, label: "Android Studio", color: "#3ddc84" },
  { icon: <FaGithub />, label: "GitHub", color: "#181717" },
  { icon: <SiPostman />, label: "Postman", color: "#ff6c37" },
];

const NewSkills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="border-white border-8 rounded-3xl m-3 flex justify-center items-center flex-col">
      <h1 className="title text-white AnimeListH1 uppercase w-fit max-w-[1170px] text-center mx-auto mb-15">
        Skills
      </h1>

      <div className="w-full min-h-screen flex justify-between items-center p-4 sm:flex-col flex-row">
        <div className="icons">
          {skills.map((skill, index) => (
            <a
              key={index}
              style={{ color: skill.color }}
              data-aos="zoom-in"
            >
              <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span>{skill.icon}</span>
              </div>
              <div className="text">{skill.label}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewSkills;
