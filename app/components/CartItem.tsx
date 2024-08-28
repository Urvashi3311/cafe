"use client";

import { CartItemType } from "@/app/lib/definitions";
import Button from "@/app/components/Button";
import { useAppContext } from "@/app/context";
import { formatDollar } from "@/app/utils";
import { motion } from "framer-motion";
import { memo } from "react";

type CartItemProps = {
  item: CartItemType;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart } = useAppContext();

  const cartItemTotal = item.quantity * item.product.price;

  const animations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: 100, transition: { duration: 0.2 } },
    layout: true,
    layoutId: `product_${item.product.id}`,
  };

  return (
    <motion.div
      {...animations}
      className="flex justify-between items-center border-b border-rose-100 py-3 bg-white"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-bold">{item.product.name}</h3>
        <div className="text-sm">
          <motion.span
            key={item.quantity}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            layout
            className="mr-4 text-red font-semibold"
          >
            {item.quantity}x
          </motion.span>
          <span className="mr-2 text-rose-300">
            @ {formatDollar(item.product.price)}
          </span>
          <span className="text-rose-500 font-semibold">
            {formatDollar(cartItemTotal)}
          </span>
        </div>
      </div>
      <Button
        type="remove"
        handleClick={() => removeFromCart(item.product.id)}
        classes="!border-rose-300 hover:!border-rose-900"
      />
    </motion.div>
  );
};

export default memo(CartItem);
