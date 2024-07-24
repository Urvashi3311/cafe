import Product from "@/app/components/Product";
import { ProductType } from "@/app/lib/definitions";

type ProductListProps = {
  products: ProductType[];
};


const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-9">
      {products.map((item: ProductType, index: number) => (
        <Product key={index} detail={item} />
      ))}
    </div>
  );
};

export default ProductList;