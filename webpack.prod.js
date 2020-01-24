const merge = require('webpack-merge')
const common = require('./webpack.common')
const TerserPlugin = require('terser-webpack-plugin')

/** @type import('webpack').Configuration */
module.exports = merge(common, {
  mode: 'production',

  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ]
  }
})
