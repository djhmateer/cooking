// dont want this to be run on deployment and cached
// export const dynamic = "force-dynamic";

// import "dotenv/config";

const SampleErrorPage = async () => {
  console.warn("SampleErrorPage being called but am not throwing an error up to global error handler");
  // throw new Error("Sample Error");

  return <>Sample Error Page text</>;
};

export default SampleErrorPage;
