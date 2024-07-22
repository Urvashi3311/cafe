"use client";
import { useAppContext } from "@/app/context";
import Product from "@/app/components/Product";
import { ProductType } from "@/app/lib/definitions";

type ProductListPropTypes = {};

const ProductList = (props: ProductListPropTypes) => {
  const { products, cart } = useAppContext();

  const cartCount = (id: number): number => {
    let exists = cart.find((item) => item.product.id === id);
    return exists ? exists.count : 0;
  };

  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-9">
      {products.map((item: ProductType, index: number) => (
        <Product key={index} detail={item} count={cartCount(item.id)} />
      ))}
    </div>
  );
};

export default ProductList;
