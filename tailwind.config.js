const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.js',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      red: colors.rose,
      yellow: colors.yellow,
      orange: colors.orange,
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['odd'],
    },
  },
  plugins: [],
}
