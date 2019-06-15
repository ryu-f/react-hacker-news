module.exports = {
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
  testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1'
  },
  coverageDirectory: 'test/coverage',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.(ts|tsx)'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  }
}
