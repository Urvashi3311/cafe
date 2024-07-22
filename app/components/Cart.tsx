import { useAppContext } from "@/app/context";
import { useMemo } from "react";

type CartPropTypes = {};

const Cart = (props: CartPropTypes) => {
  const { cart } = useAppContext();

  const getTotalCount = ()=> {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  return (
    <div className="bg-white rounded-[10px] py-8 px-6">
      Your Cart ( {getTotalCount()} )
      {cart.map((item, index) => (
        <p key={index}>
          {item.product.name} - {item.count}{" "}
        </p>
      ))}
    </div>
  );
};

export default Cart;
