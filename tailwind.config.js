module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {



    screens: {

      'sd':'400px',
      'sm': '640px',
      'md': '768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
     


    },



    container: {
      padding: '1.5rem',
    },

    extend: {
      fontFamily:{
        vazir:"vazir",
        vazir_bold:"vazir-bold",
      }
    },
  },
  plugins: [
    
  ],
}

//npx tailwindcss -i ./src/styles/style.css -o ./dist/output.css --watch
