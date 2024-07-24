import React, { useEffect } from 'react';
import gsap from 'gsap';

const MouseCursor = () => {
  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    const ball = document.querySelector(".ball");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.08;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    const updatePosition = () => {
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;
      xSet(pos.x);
      ySet(pos.y);
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    gsap.ticker.add(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(updatePosition);
    };
  }, []);

  return (
    <div className="ball w-16 h-16 fixed top-0 left-0 rounded-full pointer-events-none backdrop-invert backdrop-grayscale z-[99999]"></div>
  );
}

export default MouseCursor;
