/* eslint-disable */
export default {
  displayName: "amplication-build-manager",
  preset: "../../jest.preset.js",
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
  coverageDirectory: "../../coverage/packages/amplication-build-manager",
  coverageThreshold: {
    global: {
<<<<<<< HEAD
      branches: 0,
      lines: 0,
=======
      branches: 70,
      lines: 80,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    },
  },
};
