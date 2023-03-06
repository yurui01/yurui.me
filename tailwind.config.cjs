/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter UI", "PingFang SC", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
};
