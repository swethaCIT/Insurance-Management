// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FFEDAB',
        'custom-blue': '#40B0DF', 
        'skin-tone':'#FFEDAB'
      },
      fontFamily: {
        lora: ['Lora', 'serif'], 
      },
      fontSize: {
        '35px': '35px', 
      },
    },
  },
  plugins: [],
};


