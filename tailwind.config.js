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
          600: "#535051",
          700: "#494647",
          800: "#343233",
          900: "#2E2C2D",
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
        serif: ["Source Sans Pro", "system-ui", "sans-serif"],
        monospace: ["Space Mono", "monospace"],
        body: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
