/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'antique-white': '#FAEBD7',
        'puce': '#CC8899',
        'cool-teal': '#5C899D',
        'ivory-white': '#FFFCEF',
      },
      fontFamily: {
        melon: ['Melon', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

