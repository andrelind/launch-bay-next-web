const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        xwing: ["xwing-miniatures"],
        ships: ["x-wing-ships"],
      },
      colors: {
        lbnred: "#FF3069",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
