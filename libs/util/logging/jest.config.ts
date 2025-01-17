/* eslint-disable */
export default {
  displayName: "util-logging",
  preset: "../../../jest.preset.js",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "html"],
  coverageDirectory: "../../../coverage/libs/util/logging",
  coverageThreshold: {
    global: {
<<<<<<< HEAD
      branches: 92.85,
      lines: 80.98,
    },
  },
=======
      branches: 92,
      lines: 80.98,
    },
  },
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.types.{ts,tsx}",
    "!**/cli-format.{ts,tsx}",
    "!**/*.spec.{ts,tsx}",
    "!**/*.e2e-spec.{ts,tsx}",
    "!**/tests/e2e/**",
    "!**/node_modules/**",
    "!**/amplication_modules/**",
    "!**/prisma/generated-prisma-client/**",
    "!**/scripts/**",
    "!**/jest.config.ts",
    "!**/index.ts",
    "!**/*.mock.ts",
    "!**/*.module.ts",
  ],
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
};
