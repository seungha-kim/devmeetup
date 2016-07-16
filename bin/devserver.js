require('dotenv').config()
const path = require('path')
const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('../webpack/dev')

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
  contentBase: path.join(__dirname, '..', 'src'),
  hot: true,
  historyApiFallback: false
})
server.listen(8080, 'localhost', function() {})
