/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../src/**/*.{js,ts,jsx,tsx}", "./preview.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        manrope: ["Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
