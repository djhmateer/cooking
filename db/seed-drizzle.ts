// db/seed-drizzle.ts
// npx tsx db/seed-drizzle

// npx drizzle-kit push

// npx drizzle-kit generate
// npx drizzle-kit migrate

import "dotenv/config";
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm';
import { usersTable } from './schema';

const db = drizzle(process.env.POSTGRES_URL_NON_POOLING!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
  };

  await db.insert(usersTable).values(user);
  console.log('New user created!')
  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */
  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log('User info updated!')
  // await db.delete(usersTable).where(eq(usersTable.email, user.email));
  // console.log('User deleted!')
  // hack to exit the process
  process.exit(0);
}
// note this will hang
// need to do client.end() but this involves getting underlying postgres client
main();

