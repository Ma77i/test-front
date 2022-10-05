/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: "#000",
      white: "#fff",
      grey: "#808080",

      // NAVI THEME
      dark: "#1C3879",
      deep: "#607EAA",
      cristal: "#EAE3D2",
      pink: "#F806CC",
      light: "#F9F5EB",
    },
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "3xl": "-20px -20px 60px #252b2b, 20px 20px 60px #1C3879",
        "5xl": "20px -20px 60px #c4d1ce, -20px 20px 60px #ffffff",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.6xl") },
        h2: { fontSize: theme("fontSize.4xl") },
        h3: { fontSize: theme("fontSize.2xl") },
      });
    }),
  ],
};
