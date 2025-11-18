/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: "#14A8D5",
        secondary: "#D50000",
        textcolor: "#8A8A8A",
        textdark: "#414141",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // move half width
        },
      },
      animation: {
        'slide': 'slide 2s linear infinite', // 20s duration, linear, infinite
      },
    },
  },
  plugins: [],
}
