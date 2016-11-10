// Webpack config for a build that includes gedcomx-js and gedcomx-fs-js
module.exports = {
  entry: [__dirname + "/src/full.js"],
  output: {
    path: __dirname + "/dist",
    filename: 'gedcomx-fs-full.min.js',
    library: 'GedcomX'
  }
};