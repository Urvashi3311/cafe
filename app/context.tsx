'use client'
import { createContext, useContext, useReducer, ReactNode } from "react";
import { products, cart } from "@/app/lib/data";
import {
  AppContextType,
  AppState,
  ProductType,
} from "@/app/lib/definitions";
import appReducer from "@/app/reducer";

const defaultValue: AppState = {
  // products: products,
  cart: cart,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, defaultValue);

  const addToCart = (product: ProductType) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const incCartItemCount = (productId: number) => {
    dispatch({ type: "INCREAMENT_COUNT", payload: productId });
  };
  const decCartItemCount = (productId: number) => {
    dispatch({ type: "DECREAMENT_COUNT", payload: productId });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        incCartItemCount,
        decCartItemCount,
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
