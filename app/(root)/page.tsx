import sampleData from "@/db/sample-data";
import ProductList from "@/components/product-list";

// const Homepage = async () => {
const Homepage = () => {
  return (
    <>
      Currently we're importing sample data from a /db/sample-data.ts file.
      <ProductList data={sampleData.products} title="Top Recipes" limit={4} />
    </>
  );
};

export default Homepage;
