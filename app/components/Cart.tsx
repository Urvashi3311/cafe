import { useAppContext } from "@/app/context";
import CartItem from "@/app/components/CartItem";

type CartPropTypes = {};

const Cart = (props: CartPropTypes) => {
  const { cart } = useAppContext();

  const getTotalCount = ()=> {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  return (
    <div className="bg-white rounded-[10px] py-8 px-6">
      <h2 className="text-red text-3xl mb-9">Your Cart ( {getTotalCount()} )</h2>
      {cart.map((item, index) => (
        <CartItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Cart;
