import Image from "next/image";
import React from "react";
import { ProductType } from "../lib/definitions";

type ProductPropTypes = {
  detail: ProductType;
};

const Product = (props: ProductPropTypes) => {
  const product = props.detail;

  
  return (
    <div className="flex flex-col item-center justify-center gap-8">
      <div className="relative">
        <Image
          className="rounded-xl"
          src={product.image.desktop}
          alt={product.name}
          width={502}
          height={408}
          sizes="(max-width: 425px) 654px, (max-width: 768px) 427px, 502px"
        />
        <button className="absolute left-1/2 -translate-x-1/2 -mt-5 rounded-full bg-rose-50 border border-rose-300 py-3 px-6 flex gap-1 justify-center items-center text-xs font-semibold whitespace-nowrap">
          <Image
            src="/icon-add-to-cart.svg"
            alt="Add to cart"
            width={21}
            height={20}
          />
          Add to Cart
        </button>
      </div>
      <div>
        <span className="text-rose-400 text-xxs">{product.category}</span>
        <h2 className="text-rose-900 text-xs font-semibold">{product.name}</h2>
        <span className="text-red text-xs font-semibold">{`$${product.price}`}</span>
      </div>
    </div>
  );
};

export default Product;
