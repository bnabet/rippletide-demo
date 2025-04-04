/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/preview.{js,ts}",
    "./src/**/*.stories.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: {
          color: "theme(colors.neutral.950)",
        },
      });
    },
  ],
};
