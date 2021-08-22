module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'bounce': 'bounce 1.5s infinite',
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      },
      colors: {
        'starOrange': "#ffac33",
        'lightOrange': "#ffd983",
      },
      fontFamily: {
        'typewriter': ["Oxygen Mono"]
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      fontSize: ['hover'],
      animation: ['hover'],
    },
  },
}
