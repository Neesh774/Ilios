/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          600: "#414562",
          700: "#313349",
          800: "#212231",
          900: "#101118",
        },
        highlight: "#ffca3a",
        highlightTint: "#FFCA3A2A",
        secondary: "#BF4342",
        text: {
          300: "#b5bac8",
          200: "#85878d",
          100: "#d9d9d9",
        },
      },
      fontFamily: {
        serif: ["Source Sans Pro", "sans-serif"],
        monospace: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
