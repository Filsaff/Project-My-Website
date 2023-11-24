/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors: {
        prim:'#0ea5e9',
        bse:'#1e293b',
        bse2:'#64748b',
        dark:'#0f172a',
        dark2:'#94a3b8',
      },
      screens:{
        '2xl':'1320px',
      },
      objectPosition:{
        centerbt:'50% 40%',
      },
    },
  },
  plugins: [],
}

