module.exports = {
  testMatch: ['<rootDir>/src/**/*.(spec|test).(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
  coverageDirectory: '__tests__/unit/coverage',
  collectCoverageFrom: ['src/componets/**/*.tsx'],
  coverageReporters: ['html', 'text-summary'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  }
}
