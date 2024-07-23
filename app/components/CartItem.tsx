'use client'

import { CartItemType } from "../lib/definitions";
import Button from "./Button";
import { useAppContext } from "../context";

type CartItemProps = {
  item: CartItemType;
};

const CartItem = (props: CartItemProps) => {
  const item = props.item;
  const { removeFromCart } = useAppContext();
  const cartItemTotal = item.count * item.product.price;
  return (
    <div className="flex justify-between items-center border-b border-rose-100 py-3">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold">{item.product.name}</p>
        <div className="text-sm">
          <span className="mr-4 text-red font-semibold">{item.count}x</span>
          <span className="mr-2 text-rose-300">@ ${item.product.price}</span>
          <span className="text-rose-500 font-semibold">${cartItemTotal}</span>
        </div>
      </div>
      <Button
        type="remove"
        handleClick={() => removeFromCart(item.product.id)}
        classes="!border-rose-300 !hover:border-rose-900"
      />
    </div>
  );
};

export default CartItem;
