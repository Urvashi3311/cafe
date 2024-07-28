"use client";

import { useAppContext } from "@/app/context";
import CartItem from "@/app/components/CartItem";
import Image from "next/image";
import { useState, useEffect } from "react";
import Modal from "@/app/components/Modal";
import Order from "@/app/components/Order";
import { formatDollar } from "@/app/utils";
import { AnimatePresence } from "framer-motion";
import { useIsPresent } from "framer-motion";

type CartPropTypes = {};

const Cart = (props: CartPropTypes) => {
  const { cart, getTotalQuantity, getOrderTotal } = useAppContext();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-[10px] p-4 lg:p-6">
        <h2 className="text-red text-2xl lg:text-2xl mb-4 lg:mb-6 font-bold">
          Your Cart ({getTotalQuantity()})
        </h2>

        {getOrderTotal() > 0 ? (
          <>
            <div className="mb-5">
              {/* TODO: using AnimatePresence for exit animation stops cartItem to rerender correctly  */}

              <AnimatePresence initial={false}>
                {cart.map((item) => (
                  <CartItem item={item} key={item.product.id} />
                ))}
              </AnimatePresence>
            </div>

            <div className="flex justify-between items-center mb-5">
              <p>Order Total</p>
              <p className="font-bold text-2xl">
                {formatDollar(getOrderTotal())}
              </p>
            </div>

            <div className="bg-rose-100 rounded-md p-3 lg:p-4 flex justify-center items-center gap-2 text-sm mb-5">
              <Image
                src="/icon-carbon-neutral.svg"
                alt=""
                width={21}
                height={20}
              />
              <p>
                This is <b>carbon-neutral</b> delivery
              </p>
            </div>

            <button
              onClick={() => setOpenModal(true)}
              className="rounded-full bg-red text-white font-semibold p-[13px] w-full transition-all duration-200 hover:bg-rose-950"
            >
              Confirm Order
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <Image
              src="/illustration-empty-cart.svg"
              alt=""
              width={128}
              height={128}
            />
            <p className="text-rose-400 text-semibold">
              Your added items will appear here
            </p>
          </div>
        )}
      </div>

      <Modal isOpen={openModal} setIsOpen={setOpenModal}>
        <Order setIsOpen={setOpenModal} />
      </Modal>
    </>
  );
};

export default Cart;
