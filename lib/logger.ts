// lib/logger.ts
import pino, { LoggerOptions } from 'pino';

const options: LoggerOptions = {
  level: process.env.LOG_LEVEL || 'info',
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
