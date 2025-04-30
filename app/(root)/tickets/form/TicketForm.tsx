// app/(root)/tickets/form/TicketForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import {
  insertTicketSchema,
  type insertTicketSchemaType,
  type selectTicketSchemaType,
} from "@/zod-schemas/ticket";

import { selectCustomerSchemaType } from "@/zod-schemas/customer";

type Props = {
  // have to start a ticket with a customer
  // or if we are editing, we have a customer already
  customer: selectCustomerSchemaType;
  // optional as if we're starting a new ticket, we don't have ticket data yet
  ticket?: selectTicketSchemaType,
};

export default function TicketForm({
  customer,
  ticket,
}: Props) {
    const defaultValues: insertTicketSchemaType = {
        // null coalescing operator
        // better choice than (or) || short circuit operator which accepts first truthy value
        id: ticket?.id ?? "(New)",
        customerId: ticket?.customerId ?? customer.id,
        title: ticket?.title ?? "",
        description: ticket?.description ?? "",
        completed: ticket?.completed ?? false,
        tech: ticket?.tech ?? "new-ticket@example.com",
    };

    const form = useForm<insertTicketSchemaType>({
        mode: "onBlur",
        resolver: zodResolver(insertTicketSchema),
        defaultValues,
    });

    async function submitForm(data: insertTicketSchemaType) {
        console.log(data);
    }

    return (
        <div className="flex flex-col gap-1 sm:px-8">
          <div>
            <h2 className="text-2xl font-bold">
              {ticket?.id ? "Edit" : "new"} Ticket {ticket?.id ? `#${ticket.id}` : "Form"}
            </h2>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitForm)}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8"
            >
              <p>{JSON.stringify(form.getValues())}</p>
            </form>
          </Form>
        </div>
    )
}