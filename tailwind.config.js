/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./js/**/*.js ', './html/**/*.html'],
  theme: {
    screens: {
      //The fisrt section is for mobile first reponsiveness while the second is desktop first 
      'x-small': '480px',
      'small': '640px',
      'middle': '768px',
      'largeg': '1024px',
      'x-large': '1280px',
      '2x-large': '1536px',
      '3x-large': '1920px',
      'xs': {'min': '0px', 'max': '480px'},
      'sm': {'min': '0px', 'max': '640px'},
      'md': {'min': '0px', 'max': '768px'},
      'lg': {'min': '0px', 'max': '1024px'},
      'xl': {'min': '0px', 'max': '1280px'},
      '2xl': {'min': '0px', 'max': '1536px'},
      '3xl': {'min': '1920px'},
    },
    extend: {},
  },
  plugins: [],
}