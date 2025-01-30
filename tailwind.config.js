/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        secondary: '#4284F3',
        customRed: '#780418',
        customBlue: '#351C74',
      },
    },
  },
  plugins: [],
}
