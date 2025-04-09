import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

// https://ui.shadcn.com/docs/components/card
// A card is a flexible and extensible content container.
// It includes Header, Content, Footer

const ProductCard = ({ product }: { product: any }) => {
  return (
    // Full width with a maximum width of 24rem (sm)
    <Card className="w-full max-w-sm">

      {/* No padding, center items along cross axis  */}
      <CardHeader className="p-0 items-center">
        {/* Link to product page */}
        <Link href={`/product/${product.slug}`}>
          <Image
            priority={true}
            // first image in the images array if it exists
            src={product.images![0]}
            alt={product.name}
            //   aspect-square: 1:1 aspect ratio
            //   object-cover: resize image to cover container while maintaining aspect ratio
            //   rounded: border radius for rounded corners
            className="aspect-square object-cover rounded"
            height={300}
            width={300}
          />
        </Link>
      </CardHeader>

      <CardContent className="p-4 grid gap-4">
        {/* Brand eg Polo, Brooks Brothers */}
        <div className="text-xs">{product.brand}</div>

        {/* Product name eg Polo Sporting Stretch Shirt */}
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>

        {/* Rating and price */}
        {/* between puts 2 p tags on same line */}
        <div className="flex-between gap-4">
          <p>{product.rating} stars</p>
          {product.stock > 0 ? (
            <p className="font-bold">${product.price}</p>
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>

    </Card>
  );
};

export default ProductCard;
