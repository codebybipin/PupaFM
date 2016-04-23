'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000',
    'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '/app/assets/'),
    publicPath: '/app/assets/',
    filename: 'app.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      include: [path.resolve(__dirname, 'app')],
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }, {
      test: /\.scss$/,
      include: [path.resolve(__dirname, 'app')],
      loader: 'style!css!sass'
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'url'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=10240'
    }, {
      test: /\.json$/,
      loader: 'json'
    }],
    noParse: /node_modules\/json-schema\/lib\/validate\.js/
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  target: 'electron'
  // node: {
  //   fs: 'empty',
  //   net: 'empty',
  //   tls: 'empty'
  // }
}
