import React from 'react';

function CircularMarque() {
  return (
          <div className=" w-full h-full">
            <svg className="w-full h-full animate-spin-slow" viewBox="0 0 1000 1000">
              <defs>
                <path id="circlePath" d="M 500, 500 m -450, 0 a 450,450 0 0,1 900,0 a 450,450 0 0,1 -900,0"/>
              </defs>
              <circle cx="500" cy="500" r="450" fill="none"/>
              <text className="text-white" fontSize="45">
                <textPath xlinkHref="#circlePath">
                  You don't understand. We're hobbits! Halflings! Shire-folk. || "It’s not about whether I can or can’t. I just do it." || App Development || Web 
                </textPath>
              </text>
            </svg>
          </div>
  );
}

export default CircularMarque;
