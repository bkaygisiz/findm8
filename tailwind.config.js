/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/public/img.jpg')",
      },
      animation: {
        fadin: 'fadin 1.5s ease-in-out',
      },
      keyframes: {
        fadin: {
          '0%': { opacity: 0, transform: 'translateY(300px)' },
          '80%': { opacity: 0.8 , transform: 'translateY(-30px)'},
          '100%': { opacity: 1, transform: 'translateY(0px)' },
        },
      },
      colors: {
        'primary': '#222831',
        'secondary': '#393e46',
        'tertiary': '#f96d00',
        'quaternary': '#f2f2f2',
      }
    },
  },
  plugins: [],
}
