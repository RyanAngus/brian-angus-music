/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto', sans-serif"],
        bungee: ["'Bungee Shade', cursive"],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

