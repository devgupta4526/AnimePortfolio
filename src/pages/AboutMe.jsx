import React from 'react'
import OnHover from '../components/OnHover'
import RoleSwitcher from '../components/RoleSwitcher'

function AboutMe() {
  return (
    <div className="w-full min-h-screen flex justify-between items-center p-4 flex-col sm:flex-row "> 
    <OnHover />
    <div className="w-full   sm:w-[60vw] h-[90vh] rounded-xl border-8 border-white ">
      <div className='w-full h-full rounded-xl flex items-center flex-col'>
        {/* <h1 className='font-bold text-5xl text-white p-3 hover:text-red-400 '>About Me</h1> */}
        <h1 class="title AnimeListH1 uppercase w-fit max-w-[1170px] text-center mx-auto mb-15 text-white hover:text-red-500"> About Me </h1>
            <RoleSwitcher/>
        <div className='text-white'>
        Hello, I'm Dev Gupta 👋
        Software Engineer based in India, specializing in technical education through hands-on learning and building applications.
        </div>
      </div>
    </div>
   
  </div>
  )
}

export default AboutMe