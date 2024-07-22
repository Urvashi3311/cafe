import Image from "next/image";
import { ProductType } from "@/app/lib/definitions";
import clsx from "clsx";
import { useAppContext } from "@/app/context";
import QuantityButton from "@/app/components/QuantityButton";

type ProductPropTypes = {
  detail: ProductType;
  count: number;
};

const Product = (props: ProductPropTypes) => {
  const product = props.detail;
  const isInCart: boolean = props.count > 0;
  const { addToCart, decCartItemCount, incCartItemCount, removeFromCart } =
    useAppContext();

  const handleDecCartItemCount = (productID: number) => {
    if (props.count === 1) {
      removeFromCart(productID);
    }
    decCartItemCount(productID);
  };

  return (
    <div className="flex flex-col item-center justify-center gap-8">
      <div className="relative">
        <Image
          className={clsx("rounded-xl", { "border-red border-2": isInCart })}
          src={product.image.desktop}
          alt={product.name}
          width={502}
          height={408}
          sizes="(max-width: 425px) 654px, (max-width: 768px) 427px, 502px"
        />
        <div className="min-w-[165px] min-h[45px] absolute left-1/2 -translate-x-1/2 -mt-5 ">
          {isInCart ? (
            <div className="rounded-full bg-red border border-red text-white py-3 px-6 flex justify-between items-center text-xs font-semibold whitespace-nowrap">
              <QuantityButton
                type="decrement"
                handleClick={() => handleDecCartItemCount(product.id)}
              />

              {props.count}
              <QuantityButton
                type="increment"
                handleClick={() => incCartItemCount(product.id)}
              />
            </div>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="rounded-full w-full bg-rose-50 border border-rose-300 py-3 px-6 flex gap-1 justify-center items-center text-xs font-semibold whitespace-nowrap"
            >
              <Image
                src="/icon-add-to-cart.svg"
                alt="Add to cart"
                width={21}
                height={20}
              />
              Add to Cart
            </button>
          )}
        </div>
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
