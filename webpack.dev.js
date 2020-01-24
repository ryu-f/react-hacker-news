const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

/** @type import('webpack').Configuration */
module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-cheap-module-source-map',

  devServer: {
    port: 3000,
    hot: true,
    hotOnly: true,
    historyApiFallback: true,
    contentBase: [path.join(__dirname, './dist'), path.join(__dirname, './src/static')]
  }
})
