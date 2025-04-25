export const dynamic = "force-dynamic";

// not async unless need it
export default function SampleErrorPage() { 
  try { 
    // this gets logged to the console on vercel
    throw new Error("sample error in theserver component");
  } catch (error) {
    // this gets logged first in the sample function error
    // console.error("in try catch.. with caught error included ", error);
    console.error("in try catch.. don't need to output the error again");
    throw error;
  }
  return <>Sample Error Page text</>;
}

