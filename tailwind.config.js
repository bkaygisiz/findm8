/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        fadin: 'fadin 1.5s ease-in-out',
      },
      keyframes: {
        fadin: {
          '0%': { opacity: 0, transform: 'translateY(300px)' },
          '100%': { opacity: 1 , transform: 'translateY(0px)'},
        },
      }
    },
  },
  plugins: [],
}
