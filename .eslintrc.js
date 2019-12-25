'use strict'

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended'
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jest'],
  env: {
    node: true,
    jest: true,
    browser: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    complexity: ['warn', 10],
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        }
      }
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'jest/no-disabled-tests': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true
  }
}
