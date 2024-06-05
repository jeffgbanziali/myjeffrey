/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        header:"560px",
        rate:"400px",
      },
      colors: {
        gray : {
          1:"#E4E6EB",
          2:'#8D8F93',
          3:"#3A3B3C",
          4:"#242526",
          5:"#1F1F20",
        }
      },
      fontSize: {
        h1: "3.5rem",
      },
      screens: {
        xs:"320px",
      },
      colors: {
        main:'#080A1A',
        subMain: 'red',
        dry:"#051529",
        star:"yellow",
        text:"#F2F2F2",
        border:"#F2F2F2",
        dryGray:"#BDBDBD",
    },
  },
},
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
