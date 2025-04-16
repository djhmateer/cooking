// lib/logger.ts
import pino, { LoggerOptions } from 'pino';

// todo try these options: https://stackoverflow.com/a/78435769/26086
const options: LoggerOptions = {
  // level: process.env.LOG_LEVEL || 'info',
  level: 'trace',
  // if development, use pino-pretty to colorize the logs
  transport:
    process.env.NODE_ENV === 'development'
      ? {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname',
          },
        }
      : undefined,
};

const log = pino(options);

// best performance for logging to stdout
// https://getpino.io/#/docs/help?id=best-performance-for-logging-to-stdout
// default is LOG_LEVEL of 30 ie Info
// const log = pino();

export default log;
