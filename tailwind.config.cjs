/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'hover-hover': {'raw': '(hover: hover)'},
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
