/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container : {
     center : true,
     padding : '16px',
    },
    extend: {
      colors : {
        primary : "#14B8A6",
        secondary : "#64748B",
        dark : "#0F172A"
      },
      screens : {
        '2xl' : '1230px' 
      }
    },
  },
  plugins: [],
}
