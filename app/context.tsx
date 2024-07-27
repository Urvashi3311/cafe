"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";
import { cart } from "@/app/lib/data";
import {
  AppContextType,
  AppState,
  ProductType,
  CartItemType,
} from "@/app/lib/definitions";
import appReducer from "@/app/reducer";

const defaultValue: AppState = {
  cart: cart,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, defaultValue);

  const addToCart = (product: ProductType) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const incCartItem = (productId: number) => {
    dispatch({ type: "INCREAMENT_QUANTITY", payload: productId });
  };
  const decCartItem = (productId: number) => {
    dispatch({ type: "DECREAMENT_QUANTITY", payload: productId });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const getTotalQuantity = () => {
    return state.cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getRowTotal = (item: CartItemType) => {
    return item.product.price * item.quantity;
  };

  const getOrderTotal = () => {
    return state.cart.reduce(
      (cartTotal, cartItem) => cartTotal + getRowTotal(cartItem),
      0
    );
  };

  const emptyCart = () => {
    dispatch({ type: "EMPTY_CART" });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        incCartItem,
        decCartItem,
        getTotalQuantity,
        getRowTotal,
        getOrderTotal,
        emptyCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
