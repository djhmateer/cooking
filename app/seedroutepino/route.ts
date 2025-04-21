import postgres from "postgres";
// import log from "../../lib/logger";
import log from "../../lib/winstonlogger";

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
  // export function GET() {
  try {
    const start = Date.now();
    log.info("insert starting");
    // await transactionInsert();
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Add 1 second delay
    log.info("insert end");
    const end = Date.now();
    const duration = end - start;

    log.info(`seedroutepino duration: ${duration}ms`);


    // await new Promise(resolve => log.on('finish', resolve));
    log.end(); // Explicitly end Winston logging stream
    await new Promise(resolve => setTimeout(resolve, 100)); // Small delay to ensure logs are processed
    
    return Response.json({
      message: `seeded successfully from route in ${duration} milliseconds`,
    });
  } catch (error) {
    // console.error("stderr: Seed route error:", error);
    // console.log("stdout: GET function", error);
    log.error("error caught in seedroutepino GET");
    return Response.json({ error }, { status: 500 });
  }
}
