const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    // my-10: margin top and bottom of ProductList component of 40px
    <div className="my-10">

      {/* h2-bold: custom heading class */}
      {/* just: font-bold text-2xl lg:text-3xl; */}
      {/* mb-4: margin bottom of Title to stuff under it 16px */}
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        // grid: creates CSS Grid container
        // grid-cols-1: single column layout by default (mobile)
        // sm:grid-cols-2: 2 columns at 640px+ screen width
        // md:grid-cols-3: 3 columns at 768px+ screen width
        // lg:grid-cols-4: 4 columns at 1024px+ screen width
        // gap-4: 1rem (16px) spacing between grid items
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product: any) => (
            <div key={product.slug}>{product.name}</div>
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
