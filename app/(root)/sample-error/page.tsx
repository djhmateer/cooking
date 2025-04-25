export const dynamic = "force-dynamic";

// not async unless need it
export default function SampleErrorPage() { 
  try { 
    // this gets logged to the console on vercel!?
    throw new Error("sample error in theserver component");
  } catch (error) {
    console.error("in try catch.. with caught error included ", error);
    throw error;
  }
  return <>Sample Error Page text</>;
}

