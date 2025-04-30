// lib/queries/getCustomer.ts

import { db } from "@/db";
import { customers } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getCustomer(id: number) {
  const customer = await db
    .select()
    .from(customers)
    .where(eq(customers.id, id));

  // to force the only customer and not an array of 1
  return customer[0];
}
