// lib/queries/getCustomer.ts

import { db } from "@/db";
import { tickets } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getTicket(id: number) {
  const ticket = await db
    .select()
    .from(tickets)
    .where(eq(tickets.id, id));

  // to force the only customer and not an array of 1
  return ticket[0];
}
