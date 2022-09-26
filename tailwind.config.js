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
          700: "#3E3C3D",
          800: "#343233",
          900: "#2E2C2D",
        },
        highlight: "#ffca3a",
        highlightTint: "#FFCA3A2A",
        secondary: {
          700: "#882E2E",
          600: "#953333",
          500: "#B03C3C",
          400: "#BF4342",
          300: "#C75C5C",
          200: "#C34F4F",
          100: "#EC5A5A",
        },
        text: {
          500: "#999596",
          400: "#B6B3B4",
          300: "#C2C0C1",
          200: "#DBD9DA",
          100: "#E7E6E6",
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
