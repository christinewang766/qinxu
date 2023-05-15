/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark": "#302830",
        "frog": "#76815B",
        "light": "#D9DBD8",
      },
      backgroundImage: () => ({
        "desktop-home": "url('./assets/background.png')",
        "plaid-border": "url('./assets/border.png')"
      }),
      fontFamily: {
        poppins: ["Poppins"],
      },
      dropShadow: {
        'bold-shadow': '0 6px 6px rgba(255, 255, 255, 0.7)',
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};