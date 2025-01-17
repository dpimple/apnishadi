/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '15px 35px 60px 15px rgba(0, 0, 0, 0.3)',
      },
      textSize:{
        'xl':"20px",
      }
    },
  },
  plugins: [],
}

