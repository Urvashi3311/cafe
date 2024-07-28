"use client";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "../lib/data";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([
    {
      product: {
        id: 1,
        image: {
          thumbnail: "/image-waffle-thumbnail.jpg",
          mobile: "/image-waffle-mobile.jpg",
          tablet: "/image-waffle-tablet.jpg",
          desktop: "/image-waffle-desktop.jpg",
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.5,
      },
      quantity: 2,
    },
  ]);

  const addNewProduct = (id:number) => {
    const len = cart.length;
    if (len === products.length) {
      return;
    }
    let cpy = [...cart, { product: products[len], quantity: 1 }];
    setCart(cpy);
  };

  const animations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: 100, transition: { duration: 0.2 } },
  };

  const removeMe = (id: number) => {
    let cpy = cart.filter((item) => item.product.id !== id);
    setCart(cpy);
  };

  const handleAdd = (id: number) => {
    const existingProductIndex = cart.findIndex(
      (cartItem) => cartItem.product.id === id
    );

    console.log(existingProductIndex);
    if (existingProductIndex === -1) {
      return;
    }

    const cpyCart = cart;
    const updatedCart = cpyCart.map((item, index) => {
      if (index === existingProductIndex) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    console.log(updatedCart);

    setCart(updatedCart);
  };

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: 100, transition: { duration: 0.2 } },
  };

  const numberVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <>
      <main className="container px-4 py-[95px]">
        <div className="flex gap-9">
          <div className="w-1/2">
            <AnimatePresence initial={false}>
              {cart.map((item) => (
                <motion.div
                  // {...animations}
                  // layout
                  key={item.product.id}
                  data-key={item.product.id}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  className="bg-rose-300 h-5 mb-2 flex justify-between"
                >
                  key: {item.product.id} -
                  <motion.span
                    // initial="initial"
                    // animate="animate"
                    // exit="exit"
                    variants={numberVariants}
                  >
                    {item.quantity}
                  </motion.span>{" "}
                  -{item.product.name}
                  <span
                    key={item.product.id}
                    onClick={() => removeMe(item.product.id)}
                  >
                    X
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-2">
            {products.map((item) => (
              <button key={item.id} onClick={() => handleAdd(item.id)}>
                + {item.name}
              </button>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
