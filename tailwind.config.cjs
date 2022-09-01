/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#dcd1ef',
        'bright-red': '#FF3C32',
        'bright-blue': '#3633FF',
        'light-purple': '#9cbbfb',
        'bright-lemon': '#f6ff6d',
      },
    },
  },
  content: ['./index.html', './src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: false, //
};
