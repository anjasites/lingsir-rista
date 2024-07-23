/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
    'index.html'
  ],
  theme: {
    extend: {
      fontFamily:{
        'plusJakartaSans': ['Plus Jakarta Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'nobile': ['Nobile', 'sans-serif']
      }
    },
  },
  plugins: [],
}

