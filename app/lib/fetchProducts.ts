import { ProductType } from "@/app/lib/definitions";
import { products } from "@/app/lib/data";

export const fetchProducts = async (): Promise<ProductType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
