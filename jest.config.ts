import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  testRegex: ".test.ts$",
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: [
    "ts", "js"
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },
  roots: [
    "<rootDir>/src",
    "<rootDir>/test"
  ],
};
export default config;