const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /basis-\d{1,2}\/\d{1,2}/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /basis-full/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      "currentColor": "currentColor",
      "transparent": "transparent",
      "primary": "#001634",
      "secondary": "#B4C6DD",
      "danger": "#FA5C6C",
      "success": "#4DA167",
      "dark-blue": "#001634",
      "bold-blue": "#0E2D56",
      "medium-blue": "#274A78",
      "light-blue": "#4B6D9A",
      "lighter-blue": "#7A96BB",
      "lightest-blue": "#B4C6DD",
      "white": "#F9FCFF",
    },
    fontFamily: {
      sans: ['Noto Sans', 'Noto Sans Thai', 'sans-serif'],
      //   serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
