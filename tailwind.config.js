/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Zilla Slab", "sans-serif"],
      },
      colors: {
        textColor: "#EAEAEA",
        blackColor: "#0a0a0a",
        borderColor: "#2a2a2a",
        dots: "#7a7a7a",
      },
    },
  },
  plugins: [],
};
