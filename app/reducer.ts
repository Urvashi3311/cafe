import {
    AppContextType,
    AppState,
    ProductType,
    Action,
  } from "@/app/lib/definitions";


const appReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, action.payload] };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((product: ProductType) => product.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default appReducer;