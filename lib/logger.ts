// lib/logger.ts
import pino, { LoggerOptions } from 'pino';
import type { LokiOptions } from 'pino-loki'

// stops runtime errors on vercel
import '@logtail/pino'


// todo try these options: https://stackoverflow.com/a/78435769/26086
const options: LoggerOptions = {
  // unless overridden by LOG_LEVEL env var, use trace level
  level: process.env.LOG_LEVEL || 'trace',
  // level: 'trace',
  // if development, use pino-pretty to colorize the logs
  // transport:
  //   process.env.NODE_ENV === 'development'
  //     ? {
  //         target: 'pino-pretty',
  //         options: {
  //           colorize: true,
  //           translateTime: 'SYS:standard',
  //           ignore: 'pid,hostname',
  //         },
  //       }
  //     : undefined,
};


// loki and grafana cloud test - can't get it to work
// const transport = pino.transport<LokiOptions>({
//     // target: 'pino-pretty', // for simple stdout debugging
    
//   target: "pino-loki",
//   options: {
//     batching: true,
//     // batching: false,
//     // 5 seconds
//     interval: 5,

//     host: 'https://logs-prod-035.grafana.net',
//     basicAuth: {
//       // username: process.env.LOKI_USERNAME || "username",
//       username: "number", 
//       password: process.env.LOKI_PASSWORD || "password",
//       // password: "asdf",
//     },
//     silenceErrors: false,          // Important: show errors in transport
//     // grafana cloud
//     headers: {
//       "X-Scope-OrgID": process.env.GRAFANA_ORG_ID || "your-org-id"
//     }
//   },
// });

// logtail
const ingestingHost = process.env.LOGTAIL_INGESTING_HOST;
const sourceToken = process.env.LOGTAIL_SOURCE_TOKEN;

// This works on prod with the import above
// const transport = pino.transport({
//   target: "@logtail/pino",
//   options: {
//     sourceToken: sourceToken,
//     options: { endpoint: ingestingHost },
//   },
// });

// Prety and Logtail - multi transport test works
const transport = pino.transport({
  targets: [
    {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
        ignore: 'pid,hostname',
      }
    },
    {
      target: "@logtail/pino",
      options: {
        sourceToken: sourceToken,
        options: { endpoint: ingestingHost },
      }
    },
  ],
});

// const baseOptions: LoggerOptions = {
//   level: process.env.LOG_LEVEL || 'trace',
//   // Add any other base options you need
// };

// const log = pino(options);
const log = pino(options, transport);

// best performance for logging to stdout
// https://getpino.io/#/docs/help?id=best-performance-for-logging-to-stdout
// default is LOG_LEVEL of 30 ie Info
// const log = pino();

export default log;
