// app/(root)/customers/form/CustomerForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/inputs/InputWithLabel";
import { TextAreaWithLabel } from "@/components/inputs/TextAreaWithLabel";
import { SelectWithLabel } from "@/components/inputs/SelectWithLabel";

import {
  insertCustomerSchema,
  type insertCustomerSchemaType,
  type selectCustomerSchemaType,
} from "@/zod-schemas/customer";

import { StatesArray } from "@/constants/StatesArray";

type Props = {
  customer?: selectCustomerSchemaType;
};

export default function CustomerForm({ customer }: Props) {
  const defaultValues: insertCustomerSchemaType = {
    id: customer?.id ?? 0,
    firstName: customer?.firstName ?? "",
    lastName: customer?.lastName ?? "",
    email: customer?.email ?? "",
    phone: customer?.phone ?? "",
    address1: customer?.address1 ?? "",
    address2: customer?.address2 ?? "",
    city: customer?.city ?? "",
    state: customer?.state ?? "",
    zip: customer?.zip ?? "",
    notes: customer?.notes ?? "",
  };

  const form = useForm<insertCustomerSchemaType>({
    // when tab out of a field, it will validate
    mode: "onBlur",
    resolver: zodResolver(insertCustomerSchema),
    defaultValues,
  });

  async function submitForm(data: insertCustomerSchemaType) {
    console.log(data);
  }

  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {customer?.id ? "Edit" : "New"} Customer Form
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="flex flex-col md:flex-row gap-4 md:gap-8"
        >
          {/* first col in form */}
          {/* 1 big col on small screen.. when medium breakpoint it will switch to columns */}
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="First Name"
              // notice this is type safe!!
              // needs to be a key in the zod schema
              nameInSchema="firstName"
            />

            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="Last Name"
              nameInSchema="lastName"
            />

            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="Address 1"
              nameInSchema="address1"
            />

            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="Address 2"
              nameInSchema="address2"
            />
            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="City"
              nameInSchema="city"
            />

            {/* select input for state */}
            <SelectWithLabel<insertCustomerSchemaType>
              fieldTitle="State"
              nameInSchema="state"
              data={StatesArray}
            />

          </div>
          {/* second col in form */}
          {/* 1 big col on small screen.. when medium breakpoint it will switch to columns */}
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="Zip Code"
              nameInSchema="zip"
            />

            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="Email"
              nameInSchema="email"
            />

            <InputWithLabel<insertCustomerSchemaType>
              fieldTitle="Phone"
              nameInSchema="phone"
            />

            {/* notes textarea */}
            <TextAreaWithLabel<insertCustomerSchemaType>
              fieldTitle="Notes"
              nameInSchema="notes"
              // 160 pixels
              className="h-40"
            />

            {/* submit button and cancel button */}
            <div className="flex gap-2">
              {/* will call onSubmit function of the form without us having to call it */}
              <Button
                type="submit"
                className="w-3/4"
                variant="default"
                title="Save"
              >
                Save
              </Button>
              <Button
                type="button"
                variant="destructive"
                title="Reset"
                onClick={() => form.reset(defaultValues)}
              >
                Reset
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
