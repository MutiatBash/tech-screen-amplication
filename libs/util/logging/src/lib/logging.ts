import {
  createLogger,
  format,
  Logger as WindstonLogger,
  transports,
} from "winston";
import { ILogger, LoggerOptions, LogLevel } from "./types";
import { Format } from "logform";
import { customFormat } from "./cli-format";
const logTransports = [new transports.Console()];

export class Logger implements ILogger {
  private logger: WindstonLogger;
  public level: LogLevel;

  constructor(private readonly options: LoggerOptions) {
    this.level = options.logLevel ?? LogLevel.Debug;

    const format = this.getLoggerFormat();
    this.logger = createLogger({
      defaultMeta: {
        component: options.serviceName,
        ...options.metadata,
      },
      level: this.level,
      format,
      transports: logTransports,
      handleExceptions: true,
      exitOnError: true,
      exceptionHandlers: logTransports,
      rejectionHandlers: logTransports,
    });
  }

  public getLoggerFormat(): Format {
    const developmentFormats: Format[] = [
<<<<<<< HEAD
      format.errors({ stack: true }),
      format.timestamp(),
=======
      format.timestamp(),
      format.errors({ stack: true, cause: true }),
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
      customFormat(),
    ];
    if (this.options.additionalDevelopmentFormats) {
      developmentFormats.push(...this.options.additionalDevelopmentFormats);
    }
    if (this.options.additionalFormats) {
      developmentFormats.push(...this.options.additionalFormats);
    }

    const productionFormats: Format[] = [
<<<<<<< HEAD
      format.errors({ stack: true }),
      format.timestamp(),
=======
      format.timestamp(),
      format.errors({ stack: true, cause: true }),
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
      format.json(),
    ];
    if (this.options.additionalFormats) {
      productionFormats.push(...this.options.additionalFormats);
    }

    return this.options.isProduction
      ? format.combine(...productionFormats)
      : format.combine(...developmentFormats);
  }

  debug(message: string, params?: Record<string, unknown>): void {
    this.logger.debug(message, params);
  }

  info(message: string, params?: Record<string, unknown>): void {
    this.logger.info(message, params);
  }

  warn(message: string, params?: unknown): void {
    this.logger.warn(message, params);
  }

<<<<<<< HEAD
  error(message: string, params?: Record<string, unknown>, err?: Error): void {
    this.logger.error(message, params, err);
=======
  error(
    message: string,
    error?: Error,
    params?: Record<string, unknown>
  ): void {
    if (error) {
      Object.assign(error, {
        message,
        ...(error.message !== message ? { errorMessage: error.message } : {}),
        ...params,
      });
      this.logger.error(error);
    }
    this.logger.error(message, params);
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
  }

  child(metadata?: Pick<LoggerOptions, "metadata">): Logger {
    return new Logger({
      ...this.options,
<<<<<<< HEAD
      metadata: { ...this.options.metadata, metadata },
=======
      metadata: { ...this.options.metadata, ...metadata },
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
    });
  }
}
