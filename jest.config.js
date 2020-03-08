module.exports = {
  testMatch: ['<rootDir>/src/**/*.(spec|test).(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  coverageDirectory: '__tests__/unit/coverage',
  collectCoverageFrom: ['src/**/*.tsx'],
  coveragePathIgnorePatterns: ['.stories.tsx'],
  coverageReporters: ['html'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  }
}
