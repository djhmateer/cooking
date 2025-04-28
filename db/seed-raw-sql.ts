// db/seed.ts
// To run this console script
// npx tsx db/seed

import "dotenv/config";
import postgres from "postgres";
// from nextjs-dashboard project
import { customers } from "./next-dashboard-placeholder-data";

const client = postgres(process.env.POSTGRES_URL_NON_POOLING!);

async function seedCustomers() {
  await client`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  for (const customer of customers) {
    console.log("inserting customer", customer.name);
    await client`
      INSERT INTO customers (id, name, email, image_url)
      VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
      ON CONFLICT (id) DO NOTHING;
    `;
  }
}

async function main() {
  console.log("dropping and creating public schema");
  await client`DROP SCHEMA public CASCADE;`;
  await client`CREATE SCHEMA public;`;

  console.log("begin transaction");
  try {
    await seedCustomers();
  } catch (error) {
    console.error("error", error);
  }
  console.log("end transaction");
  // close the connection so that the console app can exit
  await client.end(); 
}

main();
