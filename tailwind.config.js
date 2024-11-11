/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors: {
        teal: {
          500: '#006699',
          600: '#005580',
          700: '#004466',
        },
        cards: '#116696',
      },
    },
  },
  plugins: [],
}

