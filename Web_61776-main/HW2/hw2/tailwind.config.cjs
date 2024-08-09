module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-page': "url('/HomePage.jpg')", // Ensure this path is correct
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio")
  ],
};
