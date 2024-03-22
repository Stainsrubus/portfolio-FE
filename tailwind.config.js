/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        dark_primary: "#f8c63e",
        dark_secondary: "#f5e4ba",
        dark_tertiary: "#ffffff",
        light_primary:"#ffb700",
        light_secondary: "#423000  ",
        light_tertiary: "#000000",
        background_dark:"#1f1f25",
      },
    },
    screens:{
      'lg': {'max': '2030px'},
      'md': {'max': '900px'},
      'sm': {'max': '639px'},
    },
  },
  variants: {},
  plugins:[],

};