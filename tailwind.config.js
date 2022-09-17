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
