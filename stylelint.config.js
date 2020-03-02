module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
    'stylelint-config-recess-order'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'unit-no-unknown': null,
    'order/order': [['custom-properties', 'declarations'], { disableFix: true }],
    'value-keyword-case': null
  }
}
