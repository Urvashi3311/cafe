import { useAppContext } from "@/app/context"

type CartPropTypes = {
}

const Cart = (props: CartPropTypes) => {
  const {cart} = useAppContext()
  return (
    <div>Cart

    {cart.map((item, index) => (<p key={index}>{item.product.name} - {item.count} </p>))}

    </div>
  )
}


export default Cart