const merge = require('webpack-merge')

const common = require('./common')

module.exports = merge.smart(common, {
  module: {
    loaders: [{
      test: /\.s[ac]ss$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[path]_[local]_[hash:base64:5]',
        'sass']
    }]
  },
  devtool: '#source-map'
})
