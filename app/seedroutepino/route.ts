import postgres from "postgres";
// import { log } from "next-axiom";
// import * as Sentry from "@sentry/nextjs";

// foo
const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!);

async function transactionInsert() {
  const customer = {
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  };

  // log.info("inside function start");
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
  }
  // log.info("inside function end");
}

export async function GET() {
  try {
    const start = Date.now();
    // console.log("this is a log - insert starting");

    console.info("this is an info message - insert starting");
    // console.warn("this is a warning");
    // console.error("this is an error");
    await transactionInsert();
    const end = Date.now();
    const duration = end - start;
    const foo = 1;

    console.info(`seedroutepino duration: ${duration}ms`);

    return Response.json({
      message: `seeded successfully from route in ${duration} milliseconds`,
    });
  } catch (error) {
    // send error to sentry
    // Sentry.captureException(error);

    // try global error handler to see if axiom is working
    // throw error;
    // log.error("error caught in seedroutepino GET ", { code: '500', error: error });
    console.error("error caught and handled in seedroutepino GET ", { code: '500', error: error });
    return Response.json({ error }, { status: 500 });
  } finally {
    // await log.flush();
  }
}
