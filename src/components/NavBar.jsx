// import React, { useEffect } from 'react';

// const NavBar = () => {
//   useEffect(() => {
//     const toggle = document.querySelector('.toggle');
//     const menu = document.querySelector('.menu');

//     const handleMouseOver = () => {
//       menu.classList.toggle('active');
//     };

//     toggle.addEventListener('mouseover', handleMouseOver);
//     toggle.addEventListener('click', handleMouseOver);

//     return () => {
//       toggle.removeEventListener('mouseover', handleMouseOver);
//       toggle.removeEventListener('click', handleMouseOver);
//     };
//   }, []);

//   return (
//     <section className="circula-menu">
//       <div className="menu">
//         <div className="toggle">
//          <div className='bg-orange-400'>

//          </div>
//         </div>
//         <li style={{ '--i': 0 }}>
//           <a href="#">
//             <i className="bi bi-facebook"></i>
//           </a>
//         </li>
//         <li style={{ '--i': 1 }}>
//           <a href="#">
//             <i className="bi bi-whatsapp"></i>
//           </a>
//         </li>
//         <li style={{ '--i': 2 }}>
//           <a href="#">
//             <i className="bi bi-twitter"></i>
//           </a>
//         </li>
//         <li style={{ '--i': 3 }}>
//           <a href="#">
//             <i className="bi bi-messenger"></i>
//           </a>
//         </li>
//         <li style={{ '--i': 4 }}>
//           <a href="#">
//             <i className="bi bi-instagram"></i>
//           </a>
//         </li>
//       </div>
//     </section>
//   );
// };

// export default NavBar;

import React, { useEffect } from 'react';

const NavBar = () => {
  useEffect(() => {
    const toggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');

    const handleMouseOver = () => {
      menu.classList.toggle('active');
    };

    const handleClick = () => {
      ms.style.opacity = '0.6';
      ms.style.transform = 'rotate(-360deg)';

      setTimeout(() => {
        ms.style.opacity = '1';
        audio.play();
      }, 3100);

      setTimeout(() => {
        ms.style.opacity = '0.7';
        ms.style.transform = 'rotate(360deg)';
      }, 7600);

      setTimeout(() => {
        ms.style.opacity = '0';
        ms.style.transform = 'rotate(360deg)';
      }, 9200);
    };

    toggle.addEventListener('mouseover', handleMouseOver);
    toggle.addEventListener('click', handleMouseOver);

    return () => {
      toggle.removeEventListener('mouseover', handleMouseOver);
      toggle.removeEventListener('click', handleMouseOver);
    };
  }, []);

  return (
    <section className="circula-menu">
        <div className="menu">
          <div className="toggle">
            <i className="bi bi-plus"></i>
          </div>
          <li style={{ '--i': 0 }}>
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li style={{ '--i': 1 }}>
            <a href="#">
              <i className="bi bi-whatsapp"></i>
            </a>
          </li>
          <li style={{ '--i': 2 }}>
            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li style={{ '--i': 3 }}>
            <a href="#">
              <i className="bi bi-messenger"></i>
            </a>
          </li>
          <li style={{ '--i': 4 }}>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
        </div>
    </section>
  );
};

export default NavBar;


