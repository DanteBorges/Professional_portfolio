module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'midnightblue': '#2f2e7c',
        'royalblue':'#4f46e5',
        'darkslateblue': '#234894',
        'steelblue': '#3b85c1',
        'slategray': '#8f5ba3',
        'plum': '#cfa6ce',
        'oldgray':'#f3f4f6',

      }
     },
  },
  variants: {},
  plugins: []
}
