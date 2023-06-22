import { ILogger } from "../../src/lib/types";

export const MockedLogger: ILogger = {
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
<<<<<<< HEAD
  child: jest.fn(),
=======
  child: jest.fn(() => MockedLogger),
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
};
