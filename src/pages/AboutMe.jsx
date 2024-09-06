import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OnHover from '../components/OnHover';
import RoleSwitcher from '../components/RoleSwitcher';

function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-between items-center p-4 flex-col sm:flex-row">
      <div data-aos="fade-right">
        <OnHover />
      </div>
      <div className="w-full sm:w-[60vw] h-[90vh] rounded-xl border-8 border-white bg-transparent overflow-auto" data-aos="fade-left">
        <div className="w-full h-full rounded-xl flex flex-col items-center p-4">
          <h1 className="title AnimeListH1 uppercase w-fit max-w-[1170px] text-center mx-auto mb-15 hover:text-red-500 font-electroharmonic text-yellow-300">
            About Me
          </h1>
          <RoleSwitcher />
          <div className="text-white text-center px-4 sm:px-0 font-animeregular">
            <p className='font-animeregular'>Hello! I'm Dev, and I'm based in Nagpur, India. I studied at RCOEM Nagpur, where I completed my BTech in Computer Science Engineering.</p>
            <br />
            <p className='font-animeregular m-2'>Fast forward to today, and I can honestly say it's been a beautiful journey and I hope to grow even further as a Software Engineer. My current focus these days
              is on expanding my portfolio by building more projects that I can add here, as well as being a great team player at my current role.</p>
            <br />
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul className="flex flex-wrap justify-center gap-3 mt-4 p-2">
              <li className='bg-yellow-300 text-black px-4 py-2 rounded-full shadow-md font-bold'>JavaScript (ES6+)</li>
              <li className='bg-blue-500 text-white px-4 py-2 rounded-full shadow-md font-bold'>React Native</li>
              <li className='bg-blue-300 text-black px-4 py-2 rounded-full shadow-md font-bold'>React</li>
              <li className='bg-green-400 text-black px-4 py-2 rounded-full shadow-md font-bold'>Node.js</li>
              <li className='bg-green-600 text-black px-4 py-2 rounded-full shadow-md font-bold'>Android Development</li>
              <li className='bg-red-400 text-white px-4 py-2 rounded-full shadow-md font-bold'>Python</li>
              <li className='bg-blue-600 text-white px-4 py-2 rounded-full shadow-md font-bold'>Django</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
