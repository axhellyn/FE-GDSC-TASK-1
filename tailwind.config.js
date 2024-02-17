/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "blue-pastel": "#D1DCE5",
        primary: "#0E6FFF",
        "red-base": "#FF4242",
        "": "",
        "orange-pastel": "#FFF4D4",
      },
      backgroundImage: {
        'icon-white': "url('/assets/Images/bgIconCTA.png')",
      },
      backgroundSize: {
        '25%': '25%',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
