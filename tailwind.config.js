/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html, js, ts, vue}', './src/**/*'],
  theme: {
    extend: {
      // colors pallet inspiration: https://visme.co/blog/website-color-schemes
      colors: {
        primary: '#dc352c', // red
        secondary: '#fdc419', // yellow
        tertiary: '#fd9f21', // orange
        quaternary: '#133561', // dark blue
      },
    },
  },
  plugins: [],
};
