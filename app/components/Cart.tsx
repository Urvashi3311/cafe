'use client'

import { useAppContext } from "@/app/context";
import CartItem from "@/app/components/CartItem";
import { CartItemType } from "../lib/definitions";
import Image from "next/image";

type CartPropTypes = {};

const Cart = (props: CartPropTypes) => {
  const { cart } = useAppContext();

  const getTotalCount = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  };
  const getRowTotal = (item: CartItemType) => {
    return item.product.price * item.count;
  };
  const getOrderTotal = () => {
    return cart.reduce(
      (cartTotal, cartItem) => cartTotal + getRowTotal(cartItem),
      0
    );
  };

  return (
    <div className="bg-white rounded-[10px] py-8 px-6">
      <h2 className="text-red text-3xl mb-9 font-bold">
        Your Cart ( {getTotalCount()} )
      </h2>

      {getOrderTotal() > 0 ? (
        <>
          <div className="mb-5">
            {cart.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          </div>

          <div className="flex justify-between items-center mb-5">
            <p>Order Total</p>
            <p className="font-bold text-2xl">{getOrderTotal()}</p>
          </div>

          <div className="bg-rose-100 rounded-md p-[14px] flex justify-center items-center gap-2 text-sm mb-5">
            <Image
              src="/icon-carbon-neutral.svg"
              alt="Carbon neutral delivary"
              width={21}
              height={20}
            />
            This is <b>carbon-neutral</b> delivery
          </div>

          <button className="rounded-full bg-red text-white font-bold p-[13px] w-full">
            Confirm Order
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-8">
          <Image
            src="/illustration-empty-cart.svg"
            alt="Empty Cart"
            width={128}
            height={128}
          />
          <p className="text-rose-400 text-semibold">
            Your added items will appear here
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
