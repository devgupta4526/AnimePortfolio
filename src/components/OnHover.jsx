import React, { useState } from "react";

const arr = [
  "/assets/images/itachiCrow.jpg",
  "/assets/images/rengoku.jpg",
  "/assets/images/naruto.jpg",
  
]

function OnHover() {
  return (
    <div className="itachiuchiha w-full sm:w-[35vw] h-[90vh] py-1">
      <div className="img-slide w-full h-full flex border-8 border-white rounded-3xl overflow-hidden"
      >
        <img
          className="image w-full h-full rounded-3xl hover:scale-105 transition-all ease-linear duration-800 transform cursor-pointer "
          src = "/assets/images/itachiCrow.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default OnHover;
