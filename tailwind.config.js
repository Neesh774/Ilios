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
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'spin': 'spin 1.5s'
      },
      colors: {
        'starOrange': "#ffac33",
        'lightOrange': "#ffd983",
        'lighterOrange': '#ffe6ad',
        'code': '#f2f2f2',
        'notiondefault': '#e6e6e4',
        'notiongray': '#d7d7d5',
        'notionbrown': '#e8d5cc',
        'notionred': '#ffccd1',
        'notionorange': '#fddfcc',
        'notionyellow': '#fbeecc',
        'notiongreen': '#cce7e1',
        'notionblue': '#cce4f9',
        'notionpurple': '#e1d3f8',
        'notionpink': '#f8cce6',
        'monad': '#53B555',
        'ilioslabs': '#226699',
        'bubble': '#C1B1FF',
        'toast': '#DD00AE',
        'code': '#EB5757',
        'codebg': 'rgba(135,131,120,0.15)'
      },
      fontFamily: {
        'typewriter': ["Oxygen Mono"]
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ['hover'],
      fontSize: ['hover'],
      animation: ['hover'],
      dropShadow: ['hover'],
      width: ['hover'],
      height: ['hover'],
      borderWidth: ['hover']
    },
  },
}
