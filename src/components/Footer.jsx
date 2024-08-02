import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <footer className="bg-black text-white py-8" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          &copy; 2024 devgupta all rights reserved
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/devgupta4526" className="hover:text-red-600 transition duration-300">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/dev-gupta-817543201" className="hover:text-red-600 transition duration-300">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto: guptadev156@gmail.com" className="hover:text-red-600 transition duration-300">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
