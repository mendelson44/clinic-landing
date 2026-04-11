/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Heebo', 'sans-serif'],
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { boxShadow: '0 8px 32px rgba(22, 163, 74, 0.42)' },
          '50%': { boxShadow: '0 14px 44px rgba(22, 163, 74, 0.58)' },
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

