"use client";
import Cart from "@/app/components/Cart";
import { AppProvider } from "@/app/context";
import ProductListWrapper from "@/app/components/ProductListWrapper";

export default function Home() {
  return (
    <>
      <AppProvider>
        <main className="container px-4 py-[95px]">
          <div className="flex flex-col md:flex-row gap-9">
            <div className="basis-2/3">
              <ProductListWrapper />
            </div>

            <aside className="basis-1/3">
              <Cart />
            </aside>
          </div>
        </main>
      </AppProvider>
    </>
  );
}
