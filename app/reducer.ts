import { AppState, Action } from "@/app/lib/definitions";

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            product: action.payload,
            quantity: 1,
          },
        ],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.product.id !== action.payload
        ),
      };
    case "INCREAMENT_QUANTITY":
      const existingProductIndex = state.cart.findIndex(
        (cartItem) => cartItem.product.id === action.payload
      );
      const updatedCart = state.cart.map((item, index) => {
        if (index === existingProductIndex) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      return {
        ...state,
        cart: updatedCart,
      };
    case "DECREAMENT_QUANTITY":
      const existingProductIndex2 = state.cart.findIndex(
        (cartItem) => cartItem.product.id === action.payload
      );
      const updatedCart2 = state.cart.map((item, index) => {
        if (index === existingProductIndex2) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });

      return {
        ...state,
        cart: updatedCart2,
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default appReducer;
