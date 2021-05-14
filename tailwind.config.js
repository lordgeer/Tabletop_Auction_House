module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Configure your color palette here
      blue: {
        light: '#6679B6',
        dark: '#0B1C51',
        grey: '#A8B0C8',
      },
      gold: {
        light: '#A68E72'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
