// "use client";

// export const dynamic = "force-dynamic";

import sampleData from "@/db/sample-data";
import ProductList from "@/components/product-list";

// const Homepage = async () => {
const Homepage = () => {
  // server component - so output to webserver output and not the client console (use client will do this)

  // fully cached on build, so will not output anywhere unless force-dynamic
  // then it will every time to the server, unless use client where it will output to the client console


  // on dev this outputs to the server console and browser console
  console.log("log data is ", sampleData);
  return (
    <>
      Currently we're importing sample data from a /db/sample-data.ts file.
      <ProductList data={sampleData.products} title="Top Recipes" limit={4} />
    </>
  );
};

export default Homepage;
