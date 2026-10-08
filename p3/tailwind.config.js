/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MerriweatherSn: ['"Merriweather"', "sans-serif"],
        Merriweather: ['"Merriweather"', "serif"],
        Poppins: ['"Poppins"', "serif"],
        poppinsSn: ['"Poppins"', "sans-serif"],
        Montserrat: ['"Montserrat"', "sans-serif"],
      },
      dropShadow: {
        glow: [
          "0 0 5px #03e9f4",
          "0 0 25px #03e9f4",
          "0 0 50px #03e9f4",
          "0 0 100px #03e9f4",
        ],
      },
      screens: {
        xxsm: "300px",
        xsm: "490px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
