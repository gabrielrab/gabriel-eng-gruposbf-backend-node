module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/domain/entity/**/*.ts',
    '!node_modules/**',
    '!tests/**',
    '!coverage/**'
  ]
};
