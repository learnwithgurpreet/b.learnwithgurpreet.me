module.exports = {
  content: ["./src/**/*.njk", "./src/assets/js/app.js"],
  theme: {
    extend: {
      fontFamily: {
        monospace: [
          "iAWriter Mono",
          "Inconsolata",
          "Menlo",
          "Monaco",
          "Consolas",
          "Courier New",
          "monospace",
        ],
        serif: ["ui-serif", "Georgia", "Cambria", "serif"],
        "sans-serif": [
          "iAWriter Quattro",
          "system-ui",
          "-apple-system",
          "blinkmacsystemfont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
