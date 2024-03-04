/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        back: "#CFFDFF",
        title: "#2e4450",
        main: "#10217d",

      }
    },
  },
  plugins: [],
}