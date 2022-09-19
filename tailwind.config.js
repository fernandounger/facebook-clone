/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'facebook-blue': '#1877F2',
        'facebook-gray': '#F0F2F5',
        'facebook-green': '#46B72A',
        'facebook-dark-green': '#36A420',
      },
      spacing: {
        '580': '580px',
        '380': '380px',
      },
    },
  },
  plugins: [],
}
