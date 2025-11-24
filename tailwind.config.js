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
        // Primary brand colors - Vibrant and modern
        primary: {
          50: '#fef3e7',
          100: '#fde4c3',
          200: '#fbd49b',
          300: '#f9c473',
          400: '#f7b855',
          500: '#f5ac37',
          600: '#f39c31',
          700: '#f08929',
          800: '#ee7721',
          900: '#eb5714',
        },
        // Secondary colors - Cool blue for trust
        secondary: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
        // Accent colors - Purple for premium feel
        accent: {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#9c27b0',
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
        },
        // Success green
        success: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },
        // Warning colors
        warning: {
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa726',
          500: '#ff9800',
          600: '#fb8c00',
          700: '#f57c00',
          800: '#ef6c00',
          900: '#e65100',
        },
        // Pink for women-only mode
        pink: {
          50: '#fce4ec',
          100: '#f8bbd0',
          200: '#f48fb1',
          300: '#f06292',
          400: '#ec407a',
          500: '#e91e63',
          600: '#d81b60',
          700: '#c2185b',
          800: '#ad1457',
          900: '#880e4f',
        },
        // Keep beige as neutral option
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
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #f5ac37 0%, #ee7721 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #42a5f5 0%, #1976d2 100%)',
        'gradient-accent': 'linear-gradient(135deg, #ab47bc 0%, #7b1fa2 100%)',
        'gradient-success': 'linear-gradient(135deg, #66bb6a 0%, #388e3c 100%)',
        'gradient-pink': 'linear-gradient(135deg, #f48fb1 0%, #c2185b 100%)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'button-hover': '0 4px 8px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
