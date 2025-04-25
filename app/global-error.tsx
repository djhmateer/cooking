"use client"; // Error boundaries must be Client Components

// this is for handing errors on the client side

import Link from "next/link";
// import { useEffect } from 'react'

// export default function Error({
//   error,
//   reset,
// }: {
//   error: Error & { digest?: string }
//   reset: () => void
// }) {
//   console.log("Global error - logging to stdout");
//   useEffect(() => {
//     // Log the error to an error reporting service
//     console.error(error);
//   }, [error]);

//   return (
//     <div>
//       <h2>Something went wrong!</h2>
//       <Link href="/">Go Home</Link>
//       {/* <button
//         onClick={
//           // Attempt to recover by trying to re-render the segment
//           () => reset()
//         }
//       >
//         Try again
//       </button> */}
//     </div>
//   )
// }

import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    // Sentry.captureException(error);
    console.error("Global-error - logging to stderr.. can I see in vercel?", error);

    // process.stderr.write(`Global error not written to users browser console: ${error}\n`);
  }, [error]);

  return (
    <div>
      <h2>This is the global error page ie global-error.tsx.</h2>
      <Link href="/">Go Home</Link>
    </div>
  );
}
