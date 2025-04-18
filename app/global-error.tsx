'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
import Link from "next/link";
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.log("Global error - logging to stdout");
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <Link href="/">Go Home</Link>
      {/* <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button> */}
    </div>
  )
}
