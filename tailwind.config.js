/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'aned': {
          50: '#f0f9f4',
          100: '#dcf4e3',
          200: '#bce9ca',
          300: '#8dd8a7',
          400: '#57c17d',
          500: '#0A593C',
          600: '#014023',
          700: '#01331c',
          800: '#012818',
          900: '#011f13',
          'primary': '#0A593C',
          'secondary': '#014023',
          'accent': '#F2A20C',
          'light': '#F2C36B',
          'lighter': '#F2F0F0'
        }
      }
    },
  },
  plugins: [],
};
