/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#26413c',
          forest: '#3c5a4f',
          sage: '#7c9a92',
          sand: '#d8c3a5',
          mist: '#f4f1ec'
        }
      },
      boxShadow: {
        soft: '0 20px 60px -28px rgba(38, 65, 60, 0.35)'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      }
    }
  },
  plugins: []
}
