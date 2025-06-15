/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
        probold: ['MYRIADPRO-BOLD', 'sans-serif'],
        prolight: ['MyriadPro-Light', 'sans-serif'],
        pronormal: ['MYRIADPRO-REGULAR', 'sans-serif']
      },
      colors: {
        teagreen: "#E3EEB6ff",
        royalpurple: "#7954A1ff",
        eerieblack: "#191B17ff",
        mossgreen: "#A1A256ff",
      },
    },
  },
  plugins: [],
}

