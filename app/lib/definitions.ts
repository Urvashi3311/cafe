export type ProductType = {
  id: number,
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
};

export type CartItemType = {
  product: ProductType,
  count: number
}

export interface AppState {
  products: ProductType[];
  cart: CartItemType[];
}

export interface AppContextType extends AppState {
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: number) => void;
  incCartItemCount: (productId: number) => void;
  decCartItemCount: (productId: number) => void;
}

export interface Action {
  type: string;
  payload?: any;
}

