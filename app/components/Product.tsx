"use client";

import Image from "next/image";
import { ProductType } from "@/app/lib/definitions";
import clsx from "clsx";
import { useAppContext } from "@/app/context";
import ProductActions from "@/app/components/ProductActions";

type ProductPropTypes = {
  detail: ProductType;
};

const Product = (props: ProductPropTypes) => {
  const product = props.detail;

  const { cart } = useAppContext();

  const cartCount = () => {
    let exists = cart.find((item) => item.product.id === product.id);
    return exists ? exists.count : 0;
  };

  const isInCart: boolean = cartCount() > 0;

  return (
    <div className="flex flex-col item-center justify-center gap-8">
      <div className="relative">
        {/* TODO: Display image based on item.image */}
        <Image
          className={clsx("rounded-xl border-transparent border-2", { "!border-red ": isInCart })}
          src={product.image.desktop}
          alt={product.name}
          width={502}
          height={408}
          sizes="(max-width: 425px) 654px, (max-width: 768px) 427px, 502px"
        />
        <ProductActions
          isInCart={isInCart}
          product={product}
          cartCount={cartCount()}
        />
      </div>
      <div>
        <span className="text-rose-400 text-sm">{product.category}</span>
        <h2 className="text-rose-900 font-semibold">{product.name}</h2>
        <span className="text-red font-semibold">{`$${product.price}`}</span>
      </div>
    </div>
  );
};

export default Product;
