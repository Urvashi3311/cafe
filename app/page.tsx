import Image from "next/image";
import Cart from "@/app/components/Cart";
import { products } from "./lib/data";
import { ProductType } from "@/app/lib/definitions";
import Product from "@/app/components/Product";

export default function Home() {
  return (
    <>
      <main className="container pt-[95px]">
        <div className="flex gap-9">
          <div className="basis-2/3">
            <h1 className="text-rose-900 mb-10 text-5xl font-bold">Desserts</h1>
            <div className="grid grid-cols-3 gap-x-5 gap-y-9">
              {products.map((item: ProductType, index: number) => (
                <Product key={index} detail={item} />
              ))}
            </div>
          </div>

          <aside className="basis-1/3">
            <Cart />
          </aside>
        </div>
      </main>
      <div className="attribution" role="contentinfo">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/zeynabmvs">Zeynab</a>.
      </div>
    </>
  );
}
