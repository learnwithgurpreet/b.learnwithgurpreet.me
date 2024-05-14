/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.md"],
  theme: {},
  plugins: [require("@tailwindcss/typography")],
};
