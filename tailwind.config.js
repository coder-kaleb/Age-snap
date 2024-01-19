/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      screens: {
        'mobile': '550px'
      },
      colors: {
        'purple': 'hsl(259, 100%, 65%)',
        'light-red': 'hsl(0, 100%, 67%)' 
      }
    },
  },
  plugins: [],
};
