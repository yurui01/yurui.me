/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // 苹方
      "sans": ["PingFang SC", "sans-serif"],
    },
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
};
