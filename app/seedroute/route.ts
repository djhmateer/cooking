// import bcrypt from 'bcrypt';
import postgres from "postgres";
import { customers } from "../../db/placeholder-data";

const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!);
// const sql = postgres(process.env.POSTGRES_URL!, {
//   prepare: false
// });

// 10.5, 9.7, 9.2 seconds on non-pooling
// 11.8, 11.4, 11.4, 8.4 on pooling
async function noTransactionInsert() {
  console.time();
  const customer = {
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  };

  try {
    // lets try tons of inserts with no transaction - works fine
    for (let i = 0; i < 1000; i++) {
      await sql`INSERT INTO customers (name, email, image_url)
          VALUES (${customer.name + i}, ${customer.email}, ${
        customer.image_url
      })`;
    }
  } catch (error) {
    console.error("error", error);
  }

  console.timeEnd();
}

// 9.5, 8.9, 8.1, 8.9 on non-pooling
// 8.5, 8.0, 7.4, 8.5, 8.1 on pooling
async function transactionInsert() {
  console.time();
  const customer = {
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  };

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
    console.error("error", error);
  }

  console.timeEnd();
}

export async function GET() {
  try {
    const start = Date.now();
    await transactionInsert();
    // await noTransactionInsert();
    const end = Date.now();
    const duration = end - start;

    return Response.json({
      message: `seeded successfully from route in ${duration} milliseconds`,
    });
  } catch (error) {
    console.log("error", error);
    return Response.json({ error }, { status: 500 });
  }
}
