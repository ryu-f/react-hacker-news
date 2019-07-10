const path = require('path')
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
    ]
  })
  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias['@'] = path.resolve(__dirname, '../src')
  config.plugins.push(new TSDocgenPlugin())
  return config
}