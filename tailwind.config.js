/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    screens: {
      sm: '370px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'Bright-blue' : 'hsl(245, 75%, 52%)',
        'Very-pale-blue': 'hsl(225, 100%, 98%)',
        'Desaturated-blue': 'hsl(224, 23%, 55%)',
        'Dark-blue': 'hsl(223, 47%, 23%)',
      },
    },
  },
  plugins: [],
}
