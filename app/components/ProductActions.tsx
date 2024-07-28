import Image from "next/image";
import Button from "@/app/components/Button";
import { useAppContext } from "@/app/context";
import { ProductType } from "@/app/lib/definitions";
import {motion} from 'framer-motion'

type ProductActionsType = {
  isInCart: boolean;
  quantity: number;
  product: ProductType;
};

const ProductActions = ({
  isInCart,
  quantity,
  product,
}: ProductActionsType) => {
  const { addToCart, decCartItem, incCartItem, removeFromCart } =
    useAppContext();

  const handleDecCartItem = (productID: number) => {
    if (quantity === 1) {
      removeFromCart(productID);
    }
    decCartItem(productID);
  };
  return (
    <div className="min-w-[165px] min-h[45px]">
      {isInCart ? (
        <div className="rounded-full bg-red border border-red text-white py-3 px-6 flex justify-between items-center text-sm font-semibold whitespace-nowrap">
          <Button
            type="decrement"
            handleClick={() => handleDecCartItem(product.id)}
          />

          <motion.span
                      key={quantity}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      >{quantity}</motion.span>
          <Button
            type="increment"
            handleClick={() => incCartItem(product.id)}
          />
        </div>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="rounded-full w-full bg-rose-50 border border-rose-300 py-3 px-6 flex gap-1 justify-center items-center text-sm font-semibold whitespace-nowrap transition-all duration-200 hover:border-red hover:text-red"
        >
          <Image src="/icon-add-to-cart.svg" alt="" width={21} height={20} />
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductActions;
