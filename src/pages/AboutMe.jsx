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
      <div className="w-full sm:w-[60vw] h-[90vh] rounded-xl border-8 border-white bg-transparent" data-aos="fade-left">
        <div className="w-full h-full rounded-xl flex items-center flex-col">
          <h1 className="title AnimeListH1 uppercase w-fit max-w-[1170px] text-center mx-auto mb-15  hover:text-red-500 font-electroharmonic text-yellow-300"> 
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
            <ul className="list-disc list-inside">
              <li className='text-yellow-300'>JavaScript (ES6+)</li>
              <li className='text-blue-500'>TypeScript</li>
              <li className='text-blue-300'>React</li>
              <li className='text-green-400'>Node.js</li>
              <li>Postgres SQL</li>
              <li>NestJS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
