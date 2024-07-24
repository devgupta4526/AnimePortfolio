// import {
//   MotionValue,
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "framer-motion";
// import { useRef } from "react";

// function Dock() {
//   const mouseX = useMotionValue(Infinity);

//   return (
//     <motion.div
//       onMouseMove={(e) => mouseX.set(e.pageX)}
//       onMouseLeave={() => mouseX.set(Infinity)}
//       className="flex h-16 items-center gap-4 rounded-2xl bg-black px-4 pb-3"
//     >
//       {Array.from({ length: 8 }).map((_, i) => (
//         <AppIcon mouseX={mouseX} key={i} />
//       ))}
//     </motion.div>
//   );
// }

// function AppIcon({ mouseX }) {
//   const ref = useRef(null);

//   const distance = useTransform(mouseX, (val) => {
//     const bounds = ref.current?.getBoundingClientRect() || { x: 0, width: 0 };
//     return val - bounds.x - bounds.width / 2;
//   });

//   const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
//   const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

//   return (
//     <motion.div
//       ref={ref}
//       style={{ width }}
//       className="aspect-square w-10 rounded-full bg-gray-400 flex items-center"
//     />
//   );
// }

// export default Dock;


import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

function Dock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex justify-center items-center h-16 gap-4 rounded-2xl bg-black px-4 pb-3"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <AppIcon mouseX={mouseX} key={i} />
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseX }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() || { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full bg-gray-900 flex items-center"
    />
  );
}

export default Dock;

