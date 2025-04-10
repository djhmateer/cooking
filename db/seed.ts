// db/seed.ts
// To run this console script
// npx tsx db/seed

// Lets go direct to the database using no ORM
import "dotenv/config";
import postgres from "postgres";
// from nextjs-dashboard project
import { customers } from "./placeholder-data";

const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!, { ssl: "require" });

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
  // Drop all existing tables
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

main();

// Next is to use pooler
// then try drizzle


//// import { drizzle } from 'drizzle-orm/postgres-js'

// const db = drizzle(process.env.DATABASE_URL);

// const allUsers = await db.select().from(...);
