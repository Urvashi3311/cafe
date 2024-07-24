"use client";

import { getImageProps } from "next/image";
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

  const common = {
    alt: product.name,
    sizes: "100vw",
    quality: "100",
    fill: true,
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    quality: "100",
    src: product.image.desktop,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    quality: "100",
    src: product.image.tablet,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    quality: "100",
    src: product.image.mobile,
  });
  return (
    <div className="flex flex-col item-center justify-center gap-8">
      <div className="relative h-[250px]">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktop} />
          <source media="(min-width: 768px)" srcSet={tablet} />
          <source media="(min-width: 320px)" srcSet={mobile} />
          <img
            {...rest}
            className={clsx(
              "object-cover rounded-xl border-transparent border-2",
              { "!border-red ": isInCart }
            )}
          />
        </picture>

        <div className="absolute left-1/2 -translate-x-1/2  -bottom-5">
          <ProductActions
            isInCart={isInCart}
            product={product}
            cartCount={cartCount()}
          />
        </div>
      </div>

      <div>
        <span className="text-rose-400 text-sm">{product.category}</span>
        <h3 className="text-rose-900 font-semibold">{product.name}</h3>
        <span className="text-red font-semibold">{`$${product.price}`}</span>
      </div>
    </div>
  );
};

export default Product;
