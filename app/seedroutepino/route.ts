import postgres from "postgres";
import log from "../../lib/logger";

const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!);

async function transactionInsert() {
  // console.time('transactionInsert');
  const customer = {
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  };

  // if I don't do a try catch it locks up postgres waiting for transaction to finish
  try {
    await sql.begin(async (sql) => {
      for (let i = 0; i < 1000; i++) {
        await sql`
            INSERT INTO customers (name, email, image_url)
            VALUES (${customer.name + i}, ${customer.email}, ${
          customer.image_url
        })
          `;
      }
    });
  } catch (error) {
    throw error;
  } finally {
    const foo = 1;
    // console.timeEnd('transactionInsert');
  }

  // console.log("stdout: log: transactionInsert success");
  // console.info("stdout: info: transactionInsert success");
  // console.warn("std?? warning: transactionInsert success");
  // console.error("stderr: error: transactionInsert success");
}

export async function GET() {
  try {
    // return Response.json({
    //   logtail_ingesting_host: process.env.LOGTAIL_INGESTING_HOST,
    //   logtail_source_token: process.env.LOGTAIL_SOURCE_TOKEN,
    // });

    // log.trace('trace called');
    // log.debug('debug called');
    log.info({ route: "/seedroutepino" }, "seedroutepino GET called");
    const start = Date.now();

    // comment out to see if logs work in prod
    // nmothing worked???
    await transactionInsert();
    const end = Date.now();

    const duration = end - start;

    log.info({ route: "/seedroutepino" }, "seedroutepino done");
    log.info({ route: "/seedroutepino" }, "seedroutepino done");
    log.info({ route: "/seedroutepino" }, "seedroutepino done");
    log.info({ route: "/seedroutepino" }, "seedroutepino done");
    log.info({ route: "/seedroutepino" }, "seedroutepino done");
    log.info({ route: "/seedroutepino" }, "seedroutepino done");
    log.info({ route: "/seedroutepino" }, "seedroutepino done");
    log.info({ route: "/seedroutepino" }, "seedroutepino done");

    log.info({ route: "/seedroutepino" }, "info API called");
    log.warn({ route: "/seedroutepino" }, "warn API called");
    log.error({ route: "/seedroutepino" }, "error API called");
    log.fatal("fatal called");

    // log.info({ route: '/seedroutepino' }, 'seedroutepino duration', { duration });

    return Response.json({
      message: `seeded successfully from route in ${duration} milliseconds`,
    });
  } catch (error) {
    // console.error("stderr: Seed route error:", error);
    // console.log("stdout: GET function", error);
    log.error(
      { route: "/seedroutepino", error: error },
      "error caught in seedroutepino GET"
    );
    return Response.json({ error }, { status: 500 });
  }
}
