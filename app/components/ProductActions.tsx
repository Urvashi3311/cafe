import Image from "next/image";
import Button from "@/app/components/Button";
import { useAppContext } from "@/app/context";
import { ProductType } from "@/app/lib/definitions";

type ProductActionsType = {
  isInCart: boolean;
  cartCount: number;
  product: ProductType;
};

const ProductActions = ({
  isInCart,
  cartCount,
  product,
}: ProductActionsType) => {
  const { addToCart, decCartItemCount, incCartItemCount, removeFromCart } =
    useAppContext();

  const handleDecCartItemCount = (productID: number) => {
    if (cartCount === 1) {
      removeFromCart(productID);
    }
    decCartItemCount(productID);
  };
  return (
    <>
      {isInCart ? (
        <div className="rounded-full bg-red border border-red text-white py-3 px-6 flex justify-between items-center text-sm font-semibold whitespace-nowrap">
          <Button
            type="decrement"
            handleClick={() => handleDecCartItemCount(product.id)}
          />

          {cartCount}
          <Button
            type="increment"
            handleClick={() => incCartItemCount(product.id)}
          />
        </div>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="rounded-full w-full bg-rose-50 border border-rose-300 py-3 px-6 flex gap-1 justify-center items-center text-sm font-semibold whitespace-nowrap transition-all duration-200 hover:border-red hover:text-red"
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
    </>
  );
};

export default ProductActions;
