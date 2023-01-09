/** @type {import('tailwindcss').Config} */
const percentageWidth = require('tailwindcss-percentage-width'); 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    percentageWidth 
  ],
}
