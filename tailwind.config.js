/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },
  theme: {
    extend: {
      colors: {
        darkolivegreen: '#556B2F',
        // add any additional custom colors here
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
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      animation: {
        move: 'move 0.7s linear infinite',
        marquee: 'marquee 10s linear infinite',
        marqueereverse: 'marqueereverse 10s linear infinite',
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
      },
      
    },

  },
  plugins: [
   
  ],
}

