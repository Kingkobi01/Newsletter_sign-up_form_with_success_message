/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      },
      colors: {
        neutral: {
          100: "hsl(231, 7%, 60%)",
          200: "hsl(235, 18%, 26%)",
          300: "hsl(234, 29%, 20%)"
        },
        tomato: "hsl(4, 100%, 67%)"
      }
    },
  },
  plugins: [],
}