/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      keyframes: {
        bartoleft: {
          '0%': {
            width: '0rem',
          },
          '100%': {
            width: '50rem',
          }
        },
        appear: {
          '0%': {
            opacity: '0',

          },
          '100%': {
            opacity: '1',
          }
        },
      },
    }
  },

  plugins: [],
}
