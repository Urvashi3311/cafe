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

export interface AppState {
  products: ProductType[];
  cart: ProductType[];
}

export interface AppContextType extends AppState {
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: number) => void;
}

export interface Action {
  type: string;
  payload?: any;
}