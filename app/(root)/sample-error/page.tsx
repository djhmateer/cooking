export const dynamic = "force-dynamic";

// not async unless need it
export default function SampleErrorPage() { 
  throw new Error("This is a sample error");
  return <>Sample Error Page text</>;
}

