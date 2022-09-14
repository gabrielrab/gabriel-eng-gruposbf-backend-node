module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/app/usecase/**/*.ts',
    'src/domain/entity/**/*.ts',
    '!node_modules/**',
    '!tests/**',
    '!coverage/**'
  ]
};
