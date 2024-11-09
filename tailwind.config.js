/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: '#00875A',
                secondary: '#E8F5E9',
            },
            screens: {
                'sm': '740px', 
            },
            
        }
    },
    plugins: [],
  }