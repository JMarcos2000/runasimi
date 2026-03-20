/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'login-bg': '#C17520',
        quechua: {
          primary: '#FF6B35',
          secondary: '#2EC4B6',
          accent: '#FFD166',
          background: '#FFFFFF',
          surface: '#F8F7F4',
          'text-primary': '#1A1A1A',
          'text-secondary': '#6B7280',
          'text-tertiary': '#9CA3AF',
          success: '#22C55E',
          border: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

