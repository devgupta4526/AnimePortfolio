import React from 'react'
import DemonSlayerCard from '../components/DemonSlayerCard'
import Headline from '../components/Headline'

const WorkExperience = () => {
  return (
    <div className='w-full h-full p-4 mb-8'>
     <div className='w-full h-full border-8 border-white rounded-3xl'>
    {/* <Headline title={"Work Experience"} alignment={"text-center"}/> */}
    <h1 class="title AnimeListH1 uppercase w-fit max-w-[1170px] text-center mx-auto mb-15 text-white"> Work Experience </h1>
     <DemonSlayerCard/>
     </div>
    </div>
  )
}

export default WorkExperience