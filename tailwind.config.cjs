/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["PingFang SC", "DM Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
};
