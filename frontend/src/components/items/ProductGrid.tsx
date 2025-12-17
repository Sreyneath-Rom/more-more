// src/components/items/ProductGrid.tsx
"use client";

import { useState } from "react";
import { products } from "@/constants/products";
import ProductCard from "./ProductCard";
import Pagination from "@/components/ui/Pagination";
import { CheckCircle2 } from "lucide-react";

const PAGE_SIZE = 15;


export default function ProductGrid() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("All");

  const start = (page - 1) * PAGE_SIZE;
  const paginated = products.slice(start, start + PAGE_SIZE);
  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <>
      {/* Filter Tabs & Select Action */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <div className="flex p-1 bg-gray-100 rounded-xl">
        
        </div>

      
      </div>

      {/* Grid - Adjusted for Horizontal Cards */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {paginated.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            selected={selected.includes(product.id)}
            onSelect={() => toggleSelect(product.id)}
          />
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-gray-100">
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </>
  );
}
// const TABS = ["All", "Purchased Item", "Manufacture", "Combo"];
  {/* {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-4 py-1.5 rounded-lg text-xs font-semibold transition-all
                ${activeTab === tab 
                  ? "bg-gray-800 text-white shadow-sm" 
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-200/50"
                }
              `}
            >
              {tab}
            </button>
          ))} */}

  {/* <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-gray-600 border border-gray-200 rounded-full hover:bg-gray-50 bg-white">
           <CheckCircle2 className="w-3.5 h-3.5 text-gray-400" />
           Select
        </button> */}