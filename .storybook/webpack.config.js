const path = require('path')

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
  return config
}