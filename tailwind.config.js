/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#0A7AF9",
      secondary: "#092857",
      black: "#000000",
      white: "#FFFFFF",
      orange:"#FFB321",
      red:"#EB2051",
      gray:"#F5F5F5",
      grey:"#C6C6D5",
      lightBlack:"#0FFFFFF"
    },
    extend: {
      corePlugins: {
        textCopy: false,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
