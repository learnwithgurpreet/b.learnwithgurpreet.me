/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.md"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff0e6",
          100: "#ffe0cc",
          200: "#ffc299",
          300: "#ffa366",
          400: "#ff8533",
          500: "#ff6600",
          600: "#cc5200",
          700: "#993d00",
          800: "#662900",
          900: "#331400",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
