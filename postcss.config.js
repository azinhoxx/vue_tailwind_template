export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // eslint-disable-next-line node/prefer-global/process
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    },
  },
}
