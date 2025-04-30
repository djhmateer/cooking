// db/index.ts
// todo - rename this file!?

import { drizzle } from "drizzle-orm/postgres-js";
import { config } from "dotenv";

// config({ path: ".env.local" });
config({ path: ".env" });

const db = drizzle(process.env.POSTGRES_URL_NON_POOLING!);

// drizzle logger
// const db = drizzle(process.env.POSTGRES_URL_NON_POOLING!, {
//   logger: true,
// });

export { db };
