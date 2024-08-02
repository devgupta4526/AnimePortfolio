import React, { useEffect } from 'react';
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

const NavBar = () => {
  useEffect(() => {
    const toggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');

    const handleMouseOver = () => {
      menu.classList.toggle('active');
    };

    const handleClick = () => {
      ms.style.opacity = '0.6';
      ms.style.transform = 'rotate(-360deg)';

      setTimeout(() => {
        ms.style.opacity = '1';
        audio.play();
      }, 3100);

      setTimeout(() => {
        ms.style.opacity = '0.7';
        ms.style.transform = 'rotate(360deg)';
      }, 7600);

      setTimeout(() => {
        ms.style.opacity = '0';
        ms.style.transform = 'rotate(360deg)';
      }, 9200);
    };

    toggle.addEventListener('mouseover', handleMouseOver);
    toggle.addEventListener('click', handleMouseOver);

    return () => {
      toggle.removeEventListener('mouseover', handleMouseOver);
      toggle.removeEventListener('click', handleMouseOver);
    };
  }, []);

  return (
    <section className="circula-menu ">
        <div className="menu ">
          <div className="toggle border-4 border-red p-4">
            <i className="bi bi-plus"></i>
          </div>
          <li style={{ '--i': 0 }} >
            <a href="/about" className='font-bold text-black bg-red-500'>
            About
            </a>
          </li>
          <li style={{ '--i': 1 }}>
          <a href="/work" className='font-bold text-black bg-red-500'>
            Work
            </a>
          </li>
          <li style={{ '--i': 2 }}>
          <a href="/skills" className='font-bold text-black bg-red-500'>
            Skills
            </a>
          </li>
          <li style={{ '--i': 3 }}>
          <a href="/contact" className='font-bold text-black bg-red-500'>
            Contact
            </a>
          </li>
          <li style={{ '--i': 4 }}>
          <a href="/projects" className='font-bold text-black bg-red-500'>
            Projects
            </a>
          </li>
        </div>
    </section>
  );
};

export default NavBar;


