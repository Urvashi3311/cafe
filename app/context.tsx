import { createContext, useContext, useReducer, ReactNode } from "react";
import { products } from "@/app/lib/data";
import {
  AppContextType,
  AppState,
  ProductType,
  Action,
} from "@/app/lib/definitions";
import appReducer from "@/app/reducer";

const defaultValue: AppState = {
  products: products,
  cart: [],
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, defaultValue);

  const addToCart = (product: ProductType) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  return (
    <AppContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const UseAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
