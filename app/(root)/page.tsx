import sampleData from "@/db/sample-data";
import ProductList from "@/components/product-list";

const Homepage = async () => {
  return (
    <>
      <ProductList data={sampleData.products} title="Newest Arrivals" limit={4} />
    </>
  );
};

export default Homepage;
