// dont want this to be run on deployment and cached
export const dynamic = "force-dynamic";

import "dotenv/config";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!);
// const sql = postgres(process.env.POSTGRES_URL!, {
//   prepare: false
// });

async function noTransactionInsert() {
  console.time();
  const customer = {
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  };

  try {
    for (let i = 0; i < 1000; i++) {
      // console.log("inserting ", i);
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
        console.error("inserting ", i);
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

const FooPage = async () => {
  const start = Date.now();
  await transactionInsert();
  // await noTransactionInsert();
  const end = Date.now();
  const duration = end - start;
  return <>foo in {duration} milliseconds</>;
};

export default FooPage;
