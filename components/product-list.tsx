import ProductCard from "./product-card";

// Component props
// data: array of products
// title: string
// limit: number
const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit?: number;
}) => {
  // ternary operator
  // const limitedData = limit ? data.slice(0, limit) : data;

  // todo should be an array of type Product
  let limitedData: any[];

  // if limit is defined, slice the data to that limit
  if (limit) {
    limitedData = data.slice(0, limit);
  } else {
    limitedData = data;
  }

  return (
    // my-10: margin top and bottom of ProductList component of 40px
    <div className="my-10">
      {/* h2-bold: custom heading class */}
      {/* same as: font-bold text-2xl lg:text-3xl; */}

      {/* mb-4: margin bottom of Title to stuff under it 16px */}
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        // make different number of columns for different screen sizes
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product: any) => (
            // React needs a unique key to identify each element in a list
            // TODO - think about not using a separate component here..simplify
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
