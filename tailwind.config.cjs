/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        vollkorn: ["Vollkorn", "serif"],
        newrocker: ["New Rocker", "cursive"],
      },
      colors: {
        primary: "#000000",
        secondary: "#fbdfaf",
        tertiary: "#0e0e0e",
        theblue: "#23bdff",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 0px 150px -15px #23bdff",
      },
      boxShadow2: {
        card: "0px 0px 50px -15px #23bdff",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1600px",
        "7xl": "8000px",
      },
      backgroundImage: {
        main: "url('/src/assets/bg1.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
