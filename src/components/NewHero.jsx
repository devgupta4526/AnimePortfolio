// import React from 'react'
// import CircularMarque from './CircularMarque'

// function NewHero() {
//   return (
//     <div
//     className='text-white w-full h-screen '>
//      {/* Concentric Circles */}
//      <div className='flex w-full h-full justify-center items-center'>
//           {/* Concentric Circles */}
//      <div className='relative w-[40vw] h-[40vw] rounded-full bg-white flex justify-center items-center'>
//           <div className='absolute w-[35vw] h-[35vw] rounded-full bg-black'>   
//           </div>
//           <CircularMarque /> 
//      </div>

//      </div>
//      {/* Skuna Image  */}
//      <div className="absolute inset-0 bg-[url('/assets/images/Sukuna-Jujutsu-Kaisen.png')] bg-[length:80vh_auto] bg-no-repeat bg-center filter drop-shadow-[4px_8px_3px_grey] shadow-[0px_0_0px_red]"/>
      

//     </div>
//   )
// }

// export default NewHero

import React, { useContext } from 'react';
import CircularMarque from './CircularMarque';
import Marquee from './Marquee';
import { MobileContext } from "./../utils/Context";
import MarqueeReverse from './MarqueeReverse';


function NewHero() {
  const {isMobile} = useContext(MobileContext);
  return (
    <div className="text-white w-full h-screen relative overflow-hidden border-b-8 border-white rounded-3xl">
      {/* Tag Line */}
      {isMobile && <div className='absolute left-0 right-0 bottom-0 m-8 p-2 flex justify-center items-center'>
        <h1 className='text-black text-3xl underline bg-white inline-block capitalize'>Hi I'm Dev Gupta</h1>
      </div> }
      {!isMobile && <div className='absolute left-0  bottom-0 right-2  p-2 flex justify-center items-center z-50'>
        <h1 className='bg-white text-black text-[60px]'>HI I'm DEV Gupta</h1>
      </div>}
      


      {/* Concentric Circles */}
      <div className="flex w-full h-full justify-center items-center ">
        <div className="relative w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-white flex justify-center items-center">
          <div className="absolute  w-[70vw] h-[70vw] md:w-[35vw] md:h-[35vw] rounded-full bg-black flex justify-center items-center">
               { isMobile && <div className=" inset-0 w-[60vw] h-[60vw] rounded-full bg-[url('/assets/images/Sukuna-Jujutsu-Kaisen.png')] bg-cover "/> }


                
          </div>
          <CircularMarque />
        </div>
      </div>
      {/* Sukuna Image */}
      {/* <div className="absolute inset-0 bg-[url('/assets/images/Sukuna-Jujutsu-Kaisen.png')] bg-cover md:bg-[length:80vh_auto] bg-no-repeat bg-center filter drop-shadow-[4px_8px_3px_grey] shadow-[0px_0_0px_red]" /> */}
      {!isMobile &&
      <div className="absolute inset-0 bg-[url('/assets/images/Sukuna-Jujutsu-Kaisen.png')] bg-cover md:bg-[length:80vh_auto] bg-no-repeat bg-center filter drop-shadow-[4px_8px_3px_grey] shadow-[0px_0_0px_red]" />
        }
        {/* Marquee */}
      <div className="absolute inset-y-0 left-0 flex items-center m-2 w-[12vw]">
        <Marquee />
      </div>
      {/* Marquee Reverse */}
      <div className="absolute inset-y-0 right-0 flex justify-end pl-4 m-2  w-[12vw]">
        <MarqueeReverse />
      </div>
    </div>
  );
}

export default NewHero;
