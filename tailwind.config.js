/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontSize:{
        "vl":"3rem",
        "vl1":"2.6rem",
        "vl2":"2.2rem",
        "vl3":"1.8rem",
        "vl4":"1.4rem"

      }
    },
  },
  plugins: [],
}

