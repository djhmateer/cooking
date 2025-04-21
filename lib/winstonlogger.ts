// lib/winstonlogger.ts

// import * as winston from 'winston';
// import { Logger } from 'winston';

// const log: Logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   transports: [new winston.transports.Console()]
// });

// export default log;

import winston from 'winston';
import { Logtail } from '@logtail/node';
import { LogtailTransport } from '@logtail/winston';

const ingestingHost = process.env.LOGTAIL_INGESTING_HOST ?? '';
const sourceToken = process.env.LOGTAIL_SOURCE_TOKEN ?? '';

// Create a Logtail client
const logtail = new Logtail(sourceToken, { endpoint: ingestingHost });

// Create a Winston logger - passing in the Logtail transport
const log = winston.createLogger({
  transports: [
    new LogtailTransport(logtail),
    new winston.transports.Console(),
  ],
});

log.on('finish', () => {
  console.log('Logs flushed!');
});




// CommonJS
// const winston = require("winston");
// const { Logtail } = require("@logtail/node");
// const { LogtailTransport } = require("@logtail/winston");

// const ingestingHost = process.env.LOGTAIL_INGESTING_HOST;
// const sourceToken = process.env.LOGTAIL_SOURCE_TOKEN;

// // Create a Logtail client
// const logtail = new Logtail("$SOURCE_TOKEN", {
//   endpoint: 'https://$INGESTING_HOST',
// });

// // Create a Winston logger - passing in the Logtail transport
// const log = winston.createLogger({
//   transports: [new LogtailTransport(logtail)],
// });



// This is CommonJS
// const winston = require('winston');

// const log = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   transports: [new winston.transports.Console()],
// });

export default log;
