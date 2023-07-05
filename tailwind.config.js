/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'heebo': ['Heebo', 'sans-serif']
      },
    },
  },
  plugins: [],
}