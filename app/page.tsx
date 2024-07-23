"use client";
import Cart from "@/app/components/Cart";
import { AppProvider } from "@/app/context";
import ProductListWrapper from "./components/ProductListWrapper";

export default function Home() {
  return (
    <>
      <AppProvider>
        <main className="container py-[95px]">
          <div className="flex gap-9">
            <div className="basis-2/3">
              <h1 className="text-rose-900 mb-10 text-5xl font-bold">
                Desserts
              </h1>
              <ProductListWrapper />
            </div>

            <aside className="basis-1/3">
              <Cart />
            </aside>
          </div>
        </main>

        <div className="attribution" role="contentinfo">
          Challenge by {" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/zeynabmvs">Zeynab</a>.
        </div>
      </AppProvider>
    </>
  );
}
