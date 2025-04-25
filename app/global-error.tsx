"use client"; // Error boundaries must be Client Components

// this is for handing errors on the client side
import Link from "next/link";
import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    // should send to Sentry or something!
    // Sentry.captureException(error);

    console.error("Logged to developer tools from global-error.tsx - sorry about this!");
  }, [error]);

  return (
    <div>
      <h2>This is the client side global error page ie global-error.tsx.</h2>
      <Link href="/">Go Home</Link>
    </div>
  );
}
