module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 1.5s infinite'
      },
      colors: {
        'starOrange': "#ffac33"
      },
      fontFamily: {
        'typewriter': ["Oxygen Mono"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
