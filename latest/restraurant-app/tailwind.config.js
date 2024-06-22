/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E83667",
<<<<<<< HEAD
        primaryDark: "#BB2C51",
=======
        primaryDark: "#BB3C51",
>>>>>>> bd044a4c86afbefed41eb5992de2fc5b70704cb7
        secondary: "#21D4B9",
        dark: "#303030",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cursive: ["Ephesis", "cursive"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
<<<<<<< HEAD
          md: "3rem",
          lg: "4rem",
=======
          lg: "3rem",
          xl: "4rem",
>>>>>>> bd044a4c86afbefed41eb5992de2fc5b70704cb7
        },
      },
    },
  },
  plugins: [],
};
