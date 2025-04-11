// db/seed.ts
// To run this console script
// npx tsx db/seed

import "dotenv/config";
import postgres from "postgres";
// from nextjs-dashboard project
import { customers } from "./placeholder-data";

const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!);
// const sql = postgres(process.env.POSTGRES_URL!);

// can get the sql outputted, including parameters,but not the query time
// const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!, {
//   ssl: 'require',
//   debug: (connection: number, query: string, parameters: any[], paramTypes: any[]) => {
//     console.log(' PG Executed query:', query);
//     if (parameters && parameters.length > 0) {
//       console.log(' PG parameters:', parameters);
//     }
//   },
// });

async function seedCustomers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );
  return insertedCustomers;
}

async function main() {
  console.log("dropping and creating public schema");
  await sql`DROP SCHEMA public CASCADE;`;
  await sql`CREATE SCHEMA public;`;

  console.log("begin transaction");
  try {
    const result = await sql.begin((sql) => [
      //   seedUsers(),
      seedCustomers(),
      //   seedInvoices(),
      //   seedRevenue(),
    ]);
    console.log("result of sql transaction: ", result);

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("error", error);
  }
  console.log("end transaction");
}

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
      console.error("inserting ", i);
      await sql`INSERT INTO customers (name, email, image_url)
        VALUES (${customer.name+i}, ${customer.email}, ${customer.image_url})`;
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
          VALUES (${customer.name + i}, ${customer.email}, ${customer.image_url})
        `;
      }
    });
  } catch (error) {
    console.error("error", error);
  }

  console.timeEnd();
}

// noTransactionInsert();
transactionInsert();


// Next is to use pooler
// then try drizzle

//// import { drizzle } from 'drizzle-orm/postgres-js'

// const db = drizzle(process.env.DATABASE_URL);

// const allUsers = await db.select().from(...);
