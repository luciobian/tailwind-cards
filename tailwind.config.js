module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': '"Poppins"',
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
