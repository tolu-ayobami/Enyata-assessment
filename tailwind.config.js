/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}", // <-- add this line
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
        },boxShadow: {
          'deep': '0 10px 25px rgba(0, 0, 0, 0.25)',
          'soft': '0 6px 12px rgba(0, 0, 0, 0.15)',
        }
      },
    },
    plugins: [],
  };
  
