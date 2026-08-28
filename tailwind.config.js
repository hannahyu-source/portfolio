/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eaf6f8',
          100: '#d3edf1',
          400: '#2ba0b6',
          500: '#0f8fa6',
          600: '#0b6f82',
          700: '#085764'
        },
        accent2: {
          50: '#fdf1e7',
          100: '#fbe3cd',
          400: '#ea9a5f',
          500: '#e2823f',
          600: '#c96a2c'
        }
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', 'Apple SD Gothic Neo', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif']
      },
      maxWidth: {
        container: '1440px'
      }
    }
  },
  plugins: []
};
