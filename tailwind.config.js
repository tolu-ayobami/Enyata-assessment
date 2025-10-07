/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}", 
],
   theme: {
      extend: {
        fontFamily: {
          // define your fonts using the CSS variables
          geist: ['var(--font-geist-sans)'],
          geistMono: ['var(--font-geist-mono)'],
          inter: ['var(--font-inter)'],
          karla: ['var(--font-karla)'],
          poppins: ['var(--font-poppins)'],
        },
        
      },
    },
    plugins: [],
  };
  
