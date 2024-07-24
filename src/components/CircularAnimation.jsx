import React, { useEffect } from 'react';
import gsap from 'gsap';


const CircularAnimation = () => {
    useEffect(() => {
        gsap.to('#isometric-svg', {
          rotation: -360,
          repeat: -1,
          duration: 20,
          ease: 'linear',
          transformOrigin: '50% 50%',
        });
      }, []);
    
      return (
        <div className="container">
          <div className="isometric-element">
            <svg
              id="isometric-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 800"
              preserveAspectRatio="meet"
            >
              <g>
                <path
                  id="text"
                  fill="none"
                  stroke="none"
                  d="M351.57,709.975C200.389,687.08,84.522,556.57,84.522,399c0-173.713,140.823-314.536,314.536-314.536c173.713,0,314.536,140.823,314.536,314.536c0,173.713-140.823,314.536-314.536,314.536"
                  transform="rotate(0 0 0)"
                />
                <text>
                  <textPath xlinkHref="#text">
                    <tspan className="type">
                      replit is an innovative AI-powered tool enabling collaborative software development on any device, with no setup time.
                    </tspan>
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
        </div>
  );
};

export default CircularAnimation;
