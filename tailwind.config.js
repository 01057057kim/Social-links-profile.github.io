/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'green': 'hsl(75, 94%, 57%)',
        'white': 'hsl(0, 0%, 100%)',
        'grey': 'hsl(0, 0%, 20%)',
        'dark-grey': 'hsl(0, 0%, 12%)',
        'off': 'hsl(0, 0%, 8%)',
      },
      minHeight:{
        '500px':'500px'
      },
      maxHeight: {
        '1440': '1440px',
      },
      minWidth: {
        '375': '375px',
      },
      maxWidth:{
        '375px': '375px',
      },
    },
  },
  plugins: [],
}
