import { Inject, Injectable, LoggerService } from "@nestjs/common";
<<<<<<< HEAD
import { LoggerOptions, Logger } from "@amplication/util/logging";
=======
import {
  LoggerOptions,
  Logger,
  ILogger,
  LogLevel,
} from "@amplication/util/logging";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
import {
  AmplicationLoggerModulesOptions,
  AMPLICATION_LOGGER_MODULE_OPTIONS,
} from "./types";

@Injectable()
<<<<<<< HEAD
export class AmplicationLogger implements LoggerService {
=======
export class AmplicationLogger implements LoggerService, ILogger {
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  private logger: Logger;
  private loggerOptions: LoggerOptions;

  constructor(
    @Inject(AMPLICATION_LOGGER_MODULE_OPTIONS)
<<<<<<< HEAD
    private options: AmplicationLoggerModulesOptions
  ) {
    this.loggerOptions = {
      serviceName: options.serviceName,
      logLevel: options.logLevel,
=======
    options: AmplicationLoggerModulesOptions
  ) {
    this.loggerOptions = {
      serviceName: options.serviceName,
      logLevel: options.logLevel ?? LogLevel[process.env.LOG_LEVEL],
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
      isProduction:
        options.isProduction ?? process.env.NODE_ENV === "production",
    };

    this.logger = new Logger(this.loggerOptions);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public debug(message: string, ...args: any[]): void {
<<<<<<< HEAD
=======
    args = args.filter((arg) => typeof arg === "object");
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    this.logger.debug(message, ...args);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public info(message: string, ...args: any[]): void {
<<<<<<< HEAD
=======
    args = args.filter((arg) => typeof arg === "object");
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    this.logger.info(message, ...args);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public warn(message: string, ...args: any[]): void {
<<<<<<< HEAD
=======
    args = args.filter((arg) => typeof arg === "object");
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    this.logger.warn(message, ...args);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
<<<<<<< HEAD
  public error(message: string, ...args: any[]): void {
    this.logger.error(message, ...args);
=======
  public error(message: string, error?: Error, ...args: any[]): void {
    args = args.filter((arg) => typeof arg === "object");
    this.logger.error(message, error, ...args);
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public log(message: string, ...args: any[]): void {
<<<<<<< HEAD
=======
    args = args.filter((arg) => typeof arg === "object");
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    this.logger.info(message, ...args);
  }

  /**
   * Generated a new logger instance with the same configuration of the parent with additional metadata.
   * @param  {Record<string, unknown} metadata?
   * @returns Logger
   */
  public child(metadata?: Record<string, unknown>): Logger {
    const childOptions = {
      ...this.loggerOptions,
      metadata: {
        ...this.loggerOptions.metadata,
<<<<<<< HEAD
        metadata,
=======
        ...metadata,
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
      },
    };

    return new Logger(childOptions);
  }
}
