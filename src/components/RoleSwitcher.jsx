// import React, { useEffect, useState } from 'react';

// const RoleSwitcher = () => {
//   const [current, setCurrent] = useState(1);
//   const roles = [
//     'I am a web developer.',
//     'I am a app developer.',
//     'I am a student.',
//     'I am an aspiring individual.',
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === roles.length ? 1 : prev + 1));
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [roles.length]);

//   return (
//     <div className=" text-white font-semibold  font-sans">
//       <div className="w-full h-full flex justify-center items-center">
//         <div className="p-10 w-96 text-center mx-auto">
//           <div className="text-2xl h-12 flex items-center overflow-hidden">
//             <div
//               style={{ marginTop: -(current - 1) * 50 }}
//               className="transition-all duration-2000 ease-in-out"
//             >
//               {roles.map((role, index) => (
//                 <div key={index} className="h-12">
//                   {role}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoleSwitcher;


import React, { useEffect, useState } from 'react';

const RoleSwitcher = () => {
  const [current, setCurrent] = useState(0);
  const roles = [
    'I am a web developer.',
    'I am an app developer.',
    'I am a student.',
    'I am an aspiring individual.',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % roles.length);
    }, 2000); // Matches the CSS transition duration

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="text-white font-semibold font-sans overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        <div className="p-10 w-96 text-center mx-auto">
          <div className="relative h-[3.5vw] overflow-hidden"> 
            <div
              className={`absolute transition-transform duration-2000 ease-in-out transform`}
              style={{ transform: `translateY(-${current * 4}rem)` }} 
            >
              {roles.map((role, index) => (
                <div key={index} className="h-20 flex items-center text-3xl w-[50vw]"> 
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSwitcher;

