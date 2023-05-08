/** @type {import('postcss').Config} */
module.exports = {
  plugins: [
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: true,
        grid: true,
        remove: true,
        overrideBrowserslist: ['last 1 version', '> 1%', 'maintained node versions', 'not dead'],
      },
    }),
  ],
}
