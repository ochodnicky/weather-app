module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest/setup.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
};
