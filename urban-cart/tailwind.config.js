/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      fontFamily: {
        roboto: ['RobotoMedium', 'sans-serif'],
        gratelos: ['GratelosDisplay', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

