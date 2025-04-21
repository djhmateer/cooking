// lib/logger.ts
// import pino, { LoggerOptions } from "pino";
// import type { LokiOptions } from "pino-loki";

const winston = require('winston');

const log = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

export default log;
