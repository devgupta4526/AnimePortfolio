import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DemonSlayerCard from '../components/DemonSlayerCard';

const WorkExperience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="w-full h-full p-4 mb-8" data-aos="fade-up">
      <div className="w-full h-full border-8 border-white rounded-3xl bg-transparent">
        <h1 className="title AnimeListH1 uppercase w-fit max-w-[1170px] text-center mx-auto mb-15 text-white"> 
          Work Experience 
        </h1>
        <DemonSlayerCard />
      </div>
    </div>
  );
}

export default WorkExperience;
