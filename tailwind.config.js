/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
  theme: {
    extend: {
      colors: {},
      screens: {},
      transitionDuration: {
        DEFAULT: '150ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
    },
    fontFamily: {
      lato: 'Lato',
    },
  },
  plugins: [],
};
