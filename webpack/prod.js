const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const common = require('./common')

module.exports = merge.smart(common, {
  module: {
    loaders: [{
      test: /\.s[ac]ss$/,
      loader: ExtractTextPlugin.extract([
        'css?modules',
        'sass'
      ])
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'src', '404.ejs'),
      filename: '404.html'
    }),
    new ExtractTextPlugin('[contenthash].css')
  ]
})
