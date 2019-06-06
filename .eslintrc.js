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
    'es6': true,
    'browser': true
  },
  rules: {
    'no-console': 'warn',
    'react/jsx-no-target-blank': 'error',
    'complexity': ['warn', 10],
    'react-hooks/rules-of-hooks': 'error',
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
  }
}