// db/schema.ts
// Drizzle schema

import { pgTable, serial, varchar, boolean, timestamp, integer, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const customers = pgTable("customers", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  phone: varchar("phone", { length: 255 }).unique().notNull(),
  address1: varchar("address1", { length: 255 }).notNull(),
  address2: varchar("address2", { length: 255 }),
  city: varchar("city", { length: 255 }).notNull(),
  state: varchar("state", { length: 2 }).notNull(),
  zip: varchar("zip", { length: 10 }).notNull(),
  notes: text("notes"),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().
  $onUpdate(() => new Date())
});

export const tickets = pgTable("tickets", {
  id: serial("id").primaryKey(),
  customerId: integer("customer_id").notNull().references(() => customers.id),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  completed: boolean("completed").notNull().default(false),
  tech: varchar("tech", { length: 255 }).notNull().default("unassigned"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow().
  $onUpdate(() => new Date())
});

// create relations
// 1 customer can have many tickets
export const customersRelations = relations(customers,
     ({ many }) => ({
      tickets: many(tickets)
    })
);

export const ticketsRelations = relations(tickets,
     ({ one }) => ({
      customer: one(customers, {
        fields: [tickets.customerId],
        references: [customers.id]
      })
    })
);
// OLD
// import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

// // trying to generate Zod validation schema from this Drizzle schema
// import { createSelectSchema } from 'drizzle-zod';

// export const usersTable = pgTable("users", {
//   id: integer().primaryKey().generatedAlwaysAsIdentity(),
//   name: varchar({ length: 255 }).notNull(),
//   age: integer().notNull(),
//   email: varchar({ length: 255 }).notNull(),
//   stuff: varchar({ length: 255 }),
//   stuff2: varchar({ length: 255 }),
//   stuff4: varchar({ length: 255 }),
// });


// const userSelectSchema = createSelectSchema(usersTable);

// // const userInsertSchema = createInsertSchema(usersTable);
