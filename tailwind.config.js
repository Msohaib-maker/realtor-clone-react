module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Dark: 'linear-gradient(to right, rgb(45, 45, 45), rgb(200, 200, 200))',
        customLight: 'rgb(240, 253, 244)'
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

