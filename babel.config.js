module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        },
        shippedProposals: true
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  env: {
    production: {
      plugins: [
        ['@babel/plugin-syntax-dynamic-import'],
        [
          'babel-plugin-styled-components',
          {
            ssr: false,
            fileName: false,
            displayName: false,
            pure: true
          }
        ]
      ]
    }
  },
  plugins: ['@babel/plugin-syntax-dynamic-import', 'babel-plugin-styled-components']
}
