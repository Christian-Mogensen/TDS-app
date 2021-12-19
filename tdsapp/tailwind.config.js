module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["Merriweather", "serif"],
        secondary: ["Roboto Condensed", "sans-serif"],
      },
      boxShadow: {
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.6)",
        innerLight: "inset 0 2px 4px 0 rgba(100, 100, 100, 0.6)",
      },
      colors: {
        beige: {
          50: "#f8f8f6",
          100: "#ecece4",
          200: "#e0e0d3",
          300: "#d3d3c2",
          400: "#c7c7b0",
          500: "#c1c1a8",
          600: "#adad97",
          700: "#9a9a86",
          800: "#878775",
          900: "#4d4d43",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
