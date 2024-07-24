import React, { useContext } from "react";
import CircularMarque from "./CircularMarque";
import { MobileContext } from "../utils/Context";

function Hero() {
  const {isMobile} = useContext(MobileContext);

  return (
    <div>
      {!isMobile &&
       <div className="w-full h-screen bg-black flex justify-center items-end relative">
       <div className="relative h-[80vh] w-full bg-no-repeat bg-center bg-contain z-[1]">
         <div className="absolute inset-0 flex justify-center items-center z-0">
           <div className="bg-white h-[35vw] w-[35vw] rounded-full flex justify-center items-center relative">
             {/* <div className="bg-black h-[80vh] w-[80vh] rounded-full"></div> */}
             {/* Concentric Black Circle */}
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-black h-[80vh] w-[80vh] rounded-full absolute z-10"></div>
             </div>
             {/* Circular Marquee */}
             <div className="absolute inset-0 flex items-center justify-center">
               <CircularMarque />
             </div>
           </div>
         </div>
         <div
           className="absolute inset-0 bg-[url('/assets/images/Sukuna-Jujutsu-Kaisen.png')] bg-[length:80vh_auto] bg-no-repeat bg-center filter drop-shadow-[4px_8px_3px_grey] shadow-[0px_0_0px_red] z-[1]"
         />
       </div>
       
     </div>
      }
      {
        isMobile &&
        <h1>HI this is dev</h1>
      }
     

    </div>
    
  );
}

export default Hero;









