/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nintendo: '#E60012', // Afegim el vermell oficial de Nintendo!
      }
    },
  },
  plugins: [],
}