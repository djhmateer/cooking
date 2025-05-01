// components/inputs/InputWithLabel.tsx

// https://ui.shadcn.com/docs/components/form
// we're abstracting out the anatomy of every input form as described in link above

"use client";

import { useFormContext } from "react-hook-form";

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

// typescript generics
// s is for schema
type Props<S> = {
    fieldTitle: string;
    nameInSchema: keyof S & string;
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputWithLabel<S>({
    fieldTitle,
    nameInSchema,
    className,
    ...props
}: Props<S>) {

    const form = useFormContext();

    return (
        <FormField
        control={form.control}
        name={nameInSchema}
        render={({ field }) => (
            <FormItem>
                <FormLabel
                    className="text-base"
                    htmlFor={nameInSchema}
                >
                    {fieldTitle}
                </FormLabel>

                <FormControl>
                    <Input
                        id={nameInSchema}
                        className={`w-full max-w-xs disabled:text-blue-500 dark:disabled:text-green-500 disabled:opacity-75 ${className}`}
                        {...props}
                        {...field}
                    />
                </FormControl>

                <FormMessage />
            </FormItem>
        )}
    />
    )

}