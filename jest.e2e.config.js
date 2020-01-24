const baseConfig = require('./jest.config')

module.exports = {
  ...baseConfig,
  testMatch: ['<rootDir>/__tests__/e2e/**/*.(spec|test).(ts|tsx)'],
  preset: 'jest-puppeteer'
}
