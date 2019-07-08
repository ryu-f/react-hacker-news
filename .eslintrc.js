'use strict'

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'sourceType': 'module',
    'project': './tsconfig.json',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  extends: ['plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jest'],
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'complexity': ['warn', 10],
    'react-hooks/rules-of-hooks': 'error',
    'jest/no-disabled-tests': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'warn',
      {
        useTabs: false,
        printWidth: 120,
        semi: false,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'none'
      }
    ]
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true
  }
}