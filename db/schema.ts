// db/schema.ts
// Drizzle schema

import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
//   email: varchar({ length: 255 }).notNull().unique(),
  email: varchar({ length: 255 }).notNull(),
  stuff: varchar({ length: 255 }),
  stuff2: varchar({ length: 255 }),
  stuff4: varchar({ length: 255 }),
});
