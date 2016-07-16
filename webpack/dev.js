const merge = require('webpack-merge')

const common = require('./common')

module.exports = merge.smart(common, {
  entry: [
    'webpack-dev-server/client?https://localhost:8080',
    'webpack/hot/only-dev-server',
    './app.js'
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot']
    }, {
      test: /\.s[ac]ss$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[path]_[local]_[hash:base64:5]',
        'sass']
    }]
  },
  devtool: '#source-map'
})
