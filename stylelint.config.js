module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-prettier', 'stylelint-config-standard', 'stylelint-config-styled-components'],
  rules: {
    'unit-no-unknown': null
  }
}
