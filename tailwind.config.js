/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sora': ['Sora', 'sans-serif'],
        'rubikMoonrocks': ['Rubik Moonrocks', 'cursive'],
        'monoton': ['Monoton', 'cursive'],
        'gugi': ['Gugi', 'cursive']
      }
    },
  },
  plugins: [],
}
