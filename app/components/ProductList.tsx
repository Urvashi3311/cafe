"use client";
import { UseAppContext } from "../context";
import Product from "./Product";
import { ProductType } from "@/app/lib/definitions";

type ProductListPropTypes = {};

const ProductList = (props: ProductListPropTypes) => {
  const { products } = UseAppContext();
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-9">
      {products.map((item: ProductType, index: number) => (
        <Product key={index} detail={item} />
      ))}
    </div>
  );
};

export default ProductList;
