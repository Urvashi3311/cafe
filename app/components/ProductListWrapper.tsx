
import ProductList from "@/app/components/ProductList";
// import { fetchProducts } from "../lib/fetchProducts";
import { products } from "../lib/data";

export default function ProductListWrapper() {
  // const products = await fetchProducts();
  return <ProductList products={products} />;
}