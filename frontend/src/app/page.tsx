// src/app/page.tsx
"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ItemSubNavProduct from "@/components/items/ItemSubNavProduct";
import ItemToolbar from "@/components/items/ItemToolbar";
import ItemSubNav from "@/components/items/ItemSubNav";
import ProductGrid from "@/components/items/ProductGrid";
import ItemFilters from "@/components/items/ItemFilters";
import ItemTabs from "@/components/items/ItemTabs";

export default function ItemListPage() {
  const [view, setView] = useState("list"); // 'list', 'categories', etc.

  return (
    <div className="flex h-screen overflow-hidden bg-[#F3F4F6]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <div className="px-10 mt-4">
          <ItemSubNavProduct />
        </div>

        <div className="flex-1 mx-6 mb-6 bg-white rounded-2xl shadow-sm border border-gray-200/60 overflow-hidden flex flex-col">
          <div className="px-8 pt-8 pb-0">
            <ItemToolbar />
            <ItemSubNav activeView={view} setView={setView} />
          </div>

          <div className="flex-1 overflow-y-auto px-8 pb-8 pt-2 custom-scrollbar">
            {view === "list" ? (
              <div className="animate-in fade-in duration-300">
                <ItemFilters />
                <ItemTabs />
                <ProductGrid />
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-gray-400 font-bold italic">
                {view.toUpperCase()} View Coming Soon...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}