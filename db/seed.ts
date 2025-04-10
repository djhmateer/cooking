// import { drizzle } from 'drizzle-orm/postgres-js'

// const db = drizzle(process.env.DATABASE_URL);

// const allUsers = await db.select().from(...);




// Lets go direct to the database using no ORM
// but lets run typescript directly to start with
import postgres from 'postgres';

console.log("hello world");
// console.log("process.env.POSTGRES_URL_NON_POOLING", process.env.POSTGRES_URL_NON_POOLING);

// const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!, { ssl: 'require' });

