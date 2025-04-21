import postgres from "postgres";

// import { useLogger } from 'next-axiom';
import { log } from "next-axiom";

const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!);

async function transactionInsert() {
  // console.time('transactionInsert');
  const customer = {
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  };

  log.info("inside function start");
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
  log.info("inside function end");
}

export async function GET() {
  try {
    const start = Date.now();
    log.debug("debug message");
    log.info("insert starting");
    await transactionInsert();
    // await new Promise((resolve) => setTimeout(resolve, 500)); // Add 1 second delay
    log.info("insert end");
    const end = Date.now();
    const duration = end - start;

    log.info(`seedroutepino duration: ${duration}ms`);

    // throw new Error("test error");

    log.flush();
    return Response.json({
      message: `seeded successfully from route in ${duration} milliseconds`,
    });
  } catch (error) {
    log.warn("inside catch");
    console.error("error caught in seedroutepino GET", error);

    log.error("error caught in seedroutepino GET ", { code: '500', error: error });
    log.flush();
    return Response.json({ error }, { status: 500 });
  } 
}
