module.exports = {
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
  testRegex: '/src/.*.test.(ts?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  coverageDirectory: 'test/coverage',
  collectCoverage: true,
  collectCoverageFrom: ['src/componets/**/*.tsx']
}
