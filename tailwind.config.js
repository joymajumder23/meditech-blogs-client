/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: '"Poetsen One", sans-serif',
        details: '"Roboto", sans-serif',
        mainTitle: '"Righteous", sans-serif'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

