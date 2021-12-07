module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        primary: ['Merriweather', 'serif'],
        secondary: ['Roboto Condensed', 'sans-serif']
      },
      boxShadow: {
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.6)',
        innerLight: 'inset 0 2px 4px 0 rgba(100, 100, 100, 0.6)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
