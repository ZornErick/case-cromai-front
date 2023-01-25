/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Lexend, sans-serif"
      },
      fontSize: {
        sm: 20,
        md: 32,
        lg: 48
      },
      colors: {
        transparent: "transparent",

        "white": "#FFFFFF",
        "black": "#000000",

        beige: {
          200: "#FFF5ED"
        },

        green: {
          200: "#5BAD4A",
          600: "#268D1B"
        },

        gray: {
          600: "#525252"
        },

        orange: {
          400: "#FA8E2A"
        },

        red: {
          400: "#E93E3E"
        }
      }
    },
  },
  plugins: [],
}
