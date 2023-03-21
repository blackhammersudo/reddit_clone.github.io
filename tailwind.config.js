module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors:{
        reddit_dark:{
          DEFAULT:'#030303',

        }
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }