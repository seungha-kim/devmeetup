var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
    }, {
      test: /\.s[ac]ss$/,
      loaders: ['style', 'css', 'sass']
    }]
  }
}
