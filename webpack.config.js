const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = () => {
  return {
    mode: 'development',

    entry: './src/index.tsx',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
      publicPath: '/'
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'react-dom': '@hot-loader/react-dom'
      }
    },

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
    },

    devServer: {
      port: 3000,
      hot: true,
      hotOnly: true,
      historyApiFallback: true,
      contentBase: [path.join(__dirname, './dist'), path.join(__dirname, './src/static')]
    },

    plugins: [
      new ProgressBarPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve('src/templates', 'index.html')
      })
    ]
  }
}