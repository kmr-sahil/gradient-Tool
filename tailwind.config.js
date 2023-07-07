/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'heebo': ['Heebo', 'sans-serif']
      },
      screens: {
        'tablet': '474px',
        // => @media (min-width: 474px) { ... }

        'tabletlg': '767px',
        // => @media (min-width: 767px) { ... }
  
        'laptop': '991px',
        // => @media (min-width: 991px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
