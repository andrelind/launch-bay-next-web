const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        xwing: ['xwing-miniatures'],
        ships: ['x-wing-ships'],
      },
      colors: {
        lbnred: '#FF3069',
        lbn: {
          DEFAULT: '#FF3069',
          50: '#FFFFFF',
          100: '#FFFCFD',
          200: '#FFC9D8',
          300: '#FF96B3',
          400: '#FF638E',
          500: '#FF3069',
          600: '#FC0045',
          700: '#C90037',
          800: '#960029',
          900: '#63001B',
        },
      },
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
