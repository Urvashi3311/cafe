import ProductList from "@/app/components/ProductList";
// import { fetchProducts } from "../lib/fetchProducts";
import { products } from "@/app/lib/data";

export default function ProductListWrapper() {
  // const products = await fetchProducts();
  return (
    <>
      <h1 className="text-rose-900 mb-7 md:mb-10 text-4xl md:text-5xl font-bold">Desserts</h1>
      <ProductList products={products} />
    </>
  );
}
