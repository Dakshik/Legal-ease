/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          100: '#f5e7e7',
          200: '#e6c3c3',
          300: '#d69f9f',
          400: '#c77b7b',
          500: '#b85757',
          600: '#a94646',
          700: '#8a3535',
          800: '#6b2424',
          900: '#4c1313',
        },
      },
    },
  },
  plugins: [],
};