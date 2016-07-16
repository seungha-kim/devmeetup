var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: [path.join(__dirname, '..', 'src', 'app.js')]
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.s[ac]ss$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[hash:base64:5]',
        'sass']
    }]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'FIREBASE_API_KEY',
      'FIREBASE_AUTH_DOMAIN',
      'FIREBASE_DATABASE_URL',
      'FIREBASE_STORAGE_BUCKET'
    ])
  ]
}
