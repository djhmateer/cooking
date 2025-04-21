// lib/winstonlogger.ts

import * as winston from 'winston';
import { Logger } from 'winston';

const log: Logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()]
});

export default log;


// This is CommonJS
// const winston = require('winston');

// const log = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   transports: [new winston.transports.Console()],
// });

// export default log;
