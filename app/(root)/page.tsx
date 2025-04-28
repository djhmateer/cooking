// "use client";

import sampleData from "@/db/sample-data";
import ProductList from "@/components/product-list";

// const Homepage = async () => {
const Homepage = () => {
  // server component - so output to webserver output and not the client console (use client will do this)
  console.log("data is ", sampleData);
  return (
    <>
      Currently we're importing sample data from a /db/sample-data.ts file.
      <ProductList data={sampleData.products} title="Top Recipes" limit={4} />
    </>
  );
};

export default Homepage;
