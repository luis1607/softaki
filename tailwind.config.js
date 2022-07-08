/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize:{
      'font-mobile':'.40625rem',
      'font-72': '5rem',
      '9px' : '.688rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      height: {
        '5%':'5%',
        '95%': '95%',
        '15%':'15%',
        '85%':'85%',
        'h-head': '60px',
        'logo':'60px',
        'h-militar': '400px',
        'h-container-web':'calc(100vh - 50px)',
        'h-container-mobile':'calc(100% - 50px)'
      },
      width:{
        'logo':'60px',
        'container':'75rem',
        'img-width-about':'430px',
        'w-militar': '500px'
      },
      maxWidth: {
        'container': '1200px',
        'ms-container': '900px'
      }
    },
  },
  plugins: [],
}
