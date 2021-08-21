module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'starOrange': "#ffac33"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
