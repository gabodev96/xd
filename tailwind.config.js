/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo Tammudu 2"'],
      },
      height: {
        128: "585px",
        160: "880px",
      },
      width: {
        128: "2024px",
      },
    },
  },
  plugins: [],
};
