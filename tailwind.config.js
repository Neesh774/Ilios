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
        codebg: "#2B2B29",
        notionBgDefault: "#2F3437",
        notionBgGray: "#454B4E",
        notionBgBrown: "#434040",
        notionBgOrange: "#594A3A",
        notionBgYellow: "#59563B",
        notionBgGreen: "#354C4B",
        notionBgBlue: "#364954",
        notionBgPurple: "#443F57",
        notionBgPink: "#533B4C",
        notionBgRed: "#594141",
        // ==================
        // ==================
        // ==================
        notionTextDefault: "#FFFFFF",
        notionTextGray: "#979A9B",
        notionTextBrown: "#937264",
        notionTextOrange: "#FFA344",
        notionTextYellow: "#FFDC49",
        notionTextGreen: "#4DAB9A",
        notionTextBlue: "#529CCA",
        notionTextPurple: "#9A6DD7",
        notionTextPink: "#E255A1",
        notionTextRed: "#FF7369",
        codebg: "#2B2B29",
      },
      fontFamily: {
        serif: ["Source Sans Pro", "system-ui", "sans-serif"],
        monospace: ["Space Mono", "monospace"],
        body: ["Montserrat", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
