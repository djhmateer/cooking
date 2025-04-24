export const dynamic = "force-dynamic";

// not async unless need it
export default function SampleErrorPage() { 
  try { 
    throw new Error("This is a sample error");
  } catch (error) {
    console.error("sample-error page in try catch - logging to stderr and rethrowing", error);
    throw error;
  }
  return <>Sample Error Page text</>;
}

