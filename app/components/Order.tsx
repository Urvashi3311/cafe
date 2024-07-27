import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { useAppContext } from "@/app/context";
import OrderItem from "@/app/components/OrderItem";
import { formatDollar } from "@/app/utils";

interface OrderProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Order = ({ setIsOpen }: OrderProps) => {
  const { cart, getOrderTotal, emptyCart } = useAppContext();

  const handleNewOrder = () => {
    setIsOpen(false);
    emptyCart();
  };

  return (
    <div>
      <Image src="/icon-order-confirmed.svg" alt=" " width={40} height={40} />
      <h2 className="text-4xl font-bold my-5">Order Confirmed</h2>
      <p className="mb-6 text-rose-300">We hope enjoy your food!</p>

      <div className="flex flex-col p-5 bg-rose-50 rounded-lg mb-7">
        {cart.map((item, index) => (
          <OrderItem item={item} key={item.product.id} />
        ))}

        <div className="flex items-center justify-between">
          <span>Order Total</span>
          <span className="font-bold text-2xl">
            {formatDollar(getOrderTotal())}
          </span>
        </div>
      </div>
      <button
        onClick={handleNewOrder}
        className="rounded-full bg-red text-white font-semibold p-[13px] w-full transition-all duration-200 hover:bg-rose-950"
      >
        Start New Order
      </button>
    </div>
  );
};

export default Order;
