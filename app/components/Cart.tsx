"use client";

import { useAppContext } from "@/app/context";
import CartItem from "@/app/components/CartItem";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/app/components/Modal";
import Order from "@/app/components/Order";

type CartPropTypes = {};

const Cart = (props: CartPropTypes) => {
  const { cart, getTotalCount, getOrderTotal } = useAppContext();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-[10px] py-6 lg:py-8 px-4 lg:px-6">
        <h2 className="text-red text-2xl lg:text-3xl mb-4 lg:mb-9 font-bold">
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
              <p className="font-bold text-2xl">${getOrderTotal()}</p>
            </div>

            <div className="bg-rose-100 rounded-md p-3 lg:p-4 flex justify-center items-center gap-2 text-sm mb-5">
              <Image
                src="/icon-carbon-neutral.svg"
                alt="Carbon neutral delivary"
                width={21}
                height={20}
              />
              <p>This is <b>carbon-neutral</b> delivery</p>
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

      <Modal isOpen={openModal} setIsOpen={setOpenModal}>
        <Order setIsOpen={setOpenModal} />
      </Modal>
    </>
  );
};

export default Cart;
