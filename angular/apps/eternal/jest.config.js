module.exports = {
  displayName: 'eternal',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$'
    }
  },
  coverageDirectory: '../../coverage/apps/eternal',
  collectCoverageFrom: ['./src/app/holidays/**/*.ts'],
  testRunner: 'jest-jasmine2',
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular'
  },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment'
  ],
  transformIgnorePatterns: ['node_modules/(?!lodash-es)']
};
