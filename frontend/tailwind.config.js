/** @type {import('tailwindcss').Config} */
const percentageWidth = require('tailwindcss-percentage-width'); 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
    extend: {},
  },
  plugins: [
    percentageWidth 
  ],
}
