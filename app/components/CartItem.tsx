"use client";

import { CartItemType } from "@/app/lib/definitions";
import Button from "@/app/components/Button";
import { useAppContext } from "@/app/context";
import { formatDollar } from "@/app/utils";
import { motion, useIsPresent, Variants } from "framer-motion";
import { useEffect } from "react";

type CartItemProps = {
  item: CartItemType;
};

const CartItem = (props: CartItemProps) => {
  const item = props.item;
  const { removeFromCart } = useAppContext();
  const cartItemTotal = item.quantity * item.product.price;

  const containerVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: 100, transition: { duration: 0.2 } },
  };

  const quantityVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    // transition: { duration: 0.3 },
  };

  useEffect(() => {
    console.log("cartItem updated", item.quantity);
  }, [item.quantity]);

  // TODO: remove later, only for test
  const isPresent = useIsPresent();

  useEffect(() => {
    console.log(isPresent);
    !isPresent && console.log(item.product.id, "I've been removed!");
  }, [isPresent]);

  useEffect(() => {
    console.log("new quantity: ", item.product.name, item.quantity);
  }, [item.quantity]);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
      id="animated"
      className="flex justify-between items-center border-b border-rose-100 py-3"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-bold">{item.product.name}</h3>
        <div className="text-sm">
          <motion.span
            key={item.quantity}
            variants={quantityVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            layout
            // transition="transition"
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

export default CartItem;
