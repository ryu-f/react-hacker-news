const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.(mdx|tsx|ts|jsx|js)'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]]
      }
    })
    config.resolve.extensions.push('.ts', '.tsx')
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    return config
  },
  addons: [
    {
      name: '@storybook/addon-docs/preset',
      options: {
        configureJSX: true
      }
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-events',
    '@storybook/addon-notes',
    '@storybook/addon-options',
    '@storybook/addon-knobs',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    '@storybook/addon-storysource'
  ]
}
