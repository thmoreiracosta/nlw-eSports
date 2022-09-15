/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
      },
      backgroundImage: {
        'nlw-gradient': 'linear-gradient(95.86deg, #9572FC 5.08%, #43E7AD 65.94%, #E1D55D 86.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
        galaxy: "url('/background-galaxy.png')"
      },
    },
  },
  plugins: [],
}
