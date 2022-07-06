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
    extend: {
      keyframes: {
        transformA: {
          "0%": { borderRadius: "33% 67% 70% 30% / 30% 30% 70% 70%" },
          "20%": { borderRadius: "37% 63% 51% 49% / 37% 65% 35% 63%" },
          "40%": { borderRadius: "36% 64% 64% 36% / 64% 48% 52% 36%" },
          "60%": { borderRadius: "37% 63% 51% 49% / 30% 30% 70% 70%" },
          "80%": { borderRadius: "40% 60% 42% 58% / 41% 51% 49% 59%" },
          "100%": { borderRadius: "33% 67% 70% 30% / 30% 30% 70% 70%" },
        },
        transformB: {
          "0%": { borderRadius: "33% 67% 70% 30% / 30% 30% 70% 70%" },
          "20%": { borderRadius: "40% 60% 42% 58% / 41% 51% 49% 59%" },
          "40%": { borderRadius: "37% 63% 51% 49% / 30% 30% 70% 70%" },
          "60%": { borderRadius: "33% 67% 70% 30% / 30% 30% 70% 70%" },
          "80%": { borderRadius: "37% 63% 51% 49% / 37% 65% 35% 63%" },
          "100%": { borderRadius: "36% 64% 64% 36% / 64% 48% 52% 36%" },
        },
        fading: {
          "0%": { opacity: 0.5 },
          "15%": { opacity: 0.7 },
          "40%": { opacity: 1 },
          "60%": { opacity: 1 },
          "85%": { opacity: 0.7 },
          "100%": { opacity: 0.5 },
        },
        swayLeftToRight: {
          "from": { transform: "translate(-100%, 0%)" },
          "to": { transform: "translate(0%, 100%)" },
        },
        swayRightToLeft: {
          "from": { transform: "translate(100%, 0%)" },
          "to": { transform: "translate(0%, -100%)" },
        },
        floatUp: {
          "to": { transform: "translateY(-175vh)" },
        },
      },
      animation: {
        "blobFadingA": "transformA 5s ease-in-out infinite both alternate, fading 6s infinite ease-in-out, swayLeftToRight 20s ease-in-out infinite both alternate",
        "blobFadingB": "transformB 5s ease-in-out infinite both alternate, fading 6s infinite ease-in-out, swayRightToLeft 20s ease-in-out infinite both alternate",
        "blobFloatUp": "transformA 5s ease-in-out infinite both alternate, floatUp 5s ease-in infinite",
      },
    },
    colors: {
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
