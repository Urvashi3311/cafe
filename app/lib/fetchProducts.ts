import { ProductType } from './definitions';
import { products } from './data';

export const fetchProducts = async (): Promise<ProductType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};