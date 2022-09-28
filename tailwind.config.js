/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sora': ['Sora', 'sans-serif'],
        'rubikMoonrocks': ['Rubik Moonrocks', 'cursive'],
        'monoton': ['Monoton', 'cursive'],
        'gugi': ['Gugi', 'cursive']
      },
      opacity: {
        "transparent": 0
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
