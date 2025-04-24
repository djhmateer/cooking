import sampleData from "@/db/sample-data";
import ProductList from "@/components/product-list";

// const Homepage = async () => {
const Homepage = () => {
  return (
    <>
      <ProductList data={sampleData.products} title="Top Recipes" limit={4} />
    </>
  );
};

export default Homepage;
