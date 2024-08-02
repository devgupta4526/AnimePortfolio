// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   // theme: {
//   //   extend: {},
//   // },
//   theme: {
//     extend: {
//       colors: {
//         darkolivegreen: '#556B2F',
//         light: '#ffffff',
//         dark: '#000000',
//         primaryLight: '#f5f5f5',
//         primaryDark: '#db212d',
//         // primaryDark: '#cf2727', // Uncomment if needed
//         // add any additional custom colors here
//       },
//       width: {
//         500: '500px',
//         45: '180px',
//       },
//       height: {
//         500: '500px',
//         45: '180px',
//         300: '300px',
//         100: '100px',
//         '12': '3rem',
//         '20': '4rem',
//       },
//       fontSize: {
//         'xl2': '2rem', // Adjust as needed
//         header: '3.8rem',
//         normal: '2rem',
//       },
//       fontFamily: {
//         electroharmonic: ['ElectroHarmonic', 'sans-serif'],
//         attackontitan: ['AttackOnTitan', 'sans-serif'],
//         jujutsukaisen: ['JujutsuKaisen', 'sans-serif'],
//         animebold: ['AnimeBold', 'sans-serif'],
//         animeitalic: ['AnimeItalic', 'sans-serif'],
//         animeregular: ['AnimeRegular', 'sans-serif'],
//       },
//       transitionDuration: {
//         '2000': '2000ms',
//       },
//       animation: {
//         move: 'move 0.7s linear infinite',
//         marquee: 'marquee 10s linear infinite',
//         marqueereverse: 'marqueereverse 10s linear infinite',
//       },
//       keyframes: {
//         move: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(10px)' },
//         },
//         marquee: {
//           '0%': { transform: 'translateY(0)' },
//           '100%': { transform: 'translateY(-100%)' },
//         },
//         marqueereverse: {
//           '0%': { transform: 'translateY(-100%)' },
//           '100%': { transform: 'translateY(0)' },
//         },
//       },
//       letterSpacing: {
//         wide: '0.1em',
//       },
//       textShadow: {
//         default: '0 0 1px black',
//       },
//       spacing: {
//         defaultPadding: '20px 60px',
//       },
      
//     },

//   },
//   plugins: [
    
   
//   ],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkolivegreen: '#556B2F',
        light: '#ffffff',
        dark: '#000000',
        primaryLight: '#f5f5f5',
        primaryDark: '#db212d',
      },
      width: {
        500: '500px',
        45: '180px',
      },
      height: {
        500: '500px',
        45: '180px',
        300: '300px',
        100: '100px',
        '12': '3rem',
        '20': '4rem',
      },
      fontSize: {
        'xl2': '2rem', // Adjust as needed
        header: '3.8rem',
        normal: '2rem',
      },
      fontFamily: {
        electroharmonic: ['ElectroHarmonic', 'sans-serif'],
        attackontitan: ['AttackOnTitan', 'sans-serif'],
        jujutsukaisen: ['JujutsuKaisen', 'sans-serif'],
        animebold: ['AnimeBold', 'sans-serif'],
        animeitalic: ['AnimeItalic', 'sans-serif'],
        animeregular: ['AnimeRegular', 'sans-serif'],
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      animation: {
        move: 'move 0.7s linear infinite',
        marquee: 'marquee 10s linear infinite',
        marqueereverse: 'marqueereverse 10s linear infinite',
        fadeIn: 'fadeIn 1s ease-in-out', // Added for the RoleSwitcher animation
      },
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        marquee: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        marqueereverse: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      letterSpacing: {
        wide: '0.1em',
      },
      textShadow: {
        default: '0 0 1px black',
      },
      spacing: {
        defaultPadding: '20px 60px',
      },
    },
  },
  plugins: [],
}


