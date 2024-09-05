/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#0D0D0D',
        'custom-maroon': '#731702',
        'custom-red': '#F23005',
        'custom-orange': '#F27B13',
        'custom-yellow': '#F2A81D',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
