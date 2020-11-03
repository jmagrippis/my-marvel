module.exports = {
  purge: {
    mode: 'layers',
    layers: ['components', 'utilities'],
    content: ['./src/**/*.tsx', './src/**/*.css'],
  },
  corePlugins: {
    fontFamily: false,
  },
  variants: {
    borderStyle: ['responsive', 'focus'],
    backgroundColor: ['even'],
  },
  theme: {
    extend: {
      colors: {
        'marvel-red': '#ed1d24',
      },
    },
  },
}
