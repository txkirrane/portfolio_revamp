/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky
      },
      screens: {
        'hover-hover': {'raw': '(hover: hover)'},
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
