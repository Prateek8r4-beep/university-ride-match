/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdfcfb',
          100: '#f8f5f0',
          200: '#f3ede3',
          300: '#ebe2d3',
          400: '#e3d5c1',
          500: '#d4c4ab',
          600: '#c4b199',
          700: '#a89478',
          800: '#8c7a5f',
          900: '#6f614a',
        },
      },
    },
  },
  plugins: [],
}
