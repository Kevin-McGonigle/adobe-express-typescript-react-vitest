/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-loop': 'slide-loop 1s ease infinite',
      },
      keyframes: {
        'slide-loop': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(200%)' },
        },
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
};
