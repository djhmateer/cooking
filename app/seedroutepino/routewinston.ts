import postgres from "postgres";
// import log from "../../lib/logger";
// import log from "../../lib/winstonlogger";

import winston from "winston";
import { Logtail } from "@logtail/node";
import { LogtailTransport } from "@logtail/winston";

const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!);

// Create a function to get a fresh logger instance
function createLogger() {
  const ingestingHost = process.env.LOGTAIL_INGESTING_HOST ?? "";
  const sourceToken = process.env.LOGTAIL_SOURCE_TOKEN ?? "";

  const logtail = new Logtail(sourceToken, { endpoint: ingestingHost });

  return winston.createLogger({
    transports: [
      new LogtailTransport(logtail),
      new winston.transports.Console(),
    ],
  });
}

// async function transactionInsert() {
//   // console.time('transactionInsert');
//   const customer = {
//     name: "Evil Rabbit",
//     email: "evil@rabbit.com",
//     image_url: "/customers/evil-rabbit.png",
//   };

//   log.info("inside function start");
//   // if I don't do a try catch it locks up postgres waiting for transaction to finish
//   try {
//     await sql.begin(async (sql) => {
//       for (let i = 0; i < 1000; i++) {
//         await sql`
//             INSERT INTO customers (name, email, image_url)
//             VALUES (${customer.name + i}, ${customer.email}, ${
//           customer.image_url
//         })
//           `;
//       }
//     });
//   } catch (error) {
//     throw error;
//   }
//   log.info("inside function end");
// }

export async function GET() {
  // Create a new logger instance for each request
  const log = createLogger();
  try {
    const start = Date.now();
    log.info("insert starting");
    // await transactionInsert();
    await new Promise((resolve) => setTimeout(resolve, 500)); // Add 1 second delay
    log.info("insert end");
    const end = Date.now();
    const duration = end - start;

    log.info(`seedroutepino duration: ${duration}ms`);

    // Create a promise that resolves when logs are flushed
    const flushPromise = new Promise<void>((resolve) => {
      log.on("finish", () => resolve());
      log.end();
    });

    // Wait for logs to flush (with a timeout)
    await Promise.race([
      flushPromise,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Log flush timeout")), 1000)
      ),
    ]);

    // log.end(); // Explicitly end Winston logging stream but after 2 calls it locks up

    // await new Promise(resolve => setTimeout(resolve, 100)); // Small delay to ensure logs are processed

    return Response.json({
      message: `seeded successfully from route in ${duration} milliseconds`,
    });
  } catch (error) {
    // console.error("stderr: Seed route error:", error);
    // console.log("stdout: GET function", error);
    // log.error("error caught in seedroutepino GET");
    throw error;
    return Response.json({ error }, { status: 500 });
  }
}
