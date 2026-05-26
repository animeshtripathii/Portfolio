/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
      colors: {
        darkbg: '#0C0C0C',
        jacklight: '#D7E2EA',
      },
    },
  },
  plugins: [],
}

