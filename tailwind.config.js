/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.md"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
