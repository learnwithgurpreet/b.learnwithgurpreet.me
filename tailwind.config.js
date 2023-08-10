module.exports = {
  content: ["./src/**/*.njk", "./src/assets/js/script.js"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: {
        50: "#F6F6F6",
        100: "#E2E2E2",
        200: "#6B6B6B",
        300: "#545454",
        400: "#333333",
      },
    },
    extend: {
      dropShadow: {
        "3xl": "0 12px 16px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
