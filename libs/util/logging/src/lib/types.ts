import { Format } from "logform";

export enum LogLevel {
  Debug = "debug",
  Info = "info",
  Warn = "warn",
  Error = "error",
}

export interface LoggerOptions {
  serviceName: string;
  logLevel?: LogLevel;
  isProduction: boolean;
  metadata?: Record<string, unknown>;
  additionalFormats?: Format[];
  additionalDevelopmentFormats?: Format[];
}

export interface ILogger {
  debug: (message: string, params?: Record<string, unknown>) => void;
  info: (message: string, params?: Record<string, unknown>) => void;
  warn: (message: string, params?: Record<string, unknown>) => void;
  error: (
    message: string,
<<<<<<< HEAD
    params?: Record<string, unknown>,
    err?: Error
=======
    err?: Error,
    params?: Record<string, unknown>
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  ) => void;
  child: (metadata?: Pick<LoggerOptions, "metadata">) => ILogger;
}

export interface LogEntry {
  level: string;
  message: string;
  [optionName: string]: unknown;
}
