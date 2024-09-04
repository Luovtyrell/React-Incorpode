/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: "#f77f00",
        customBlue : "#191919"
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
