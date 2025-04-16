// lib/logger.ts
import pino, { LoggerOptions } from 'pino';

// todo try these options: https://stackoverflow.com/a/78435769/26086
const options: LoggerOptions = {
  // level: process.env.LOG_LEVEL || 'info',
  level: process.env.LOG_LEVEL || 'debug',
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

const logger = pino(options);

export default logger;
