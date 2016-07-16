var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

require('dotenv').config()

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[hash].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'src', 'index.ejs'),
      inject: true
    }),
    new webpack.EnvironmentPlugin([
      'FIREBASE_API_KEY',
      'FIREBASE_AUTH_DOMAIN',
      'FIREBASE_DATABASE_URL',
      'FIREBASE_STORAGE_BUCKET',
      'REDUX_DEVTOOLS'
    ])
  ]
}
