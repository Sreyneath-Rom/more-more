// src/app/page.tsx
"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ProductGrid from "@/components/items/ProductGrid";
import ItemToolbar from "@/components/items/ItemToolbar";
import ItemFilters from "@/components/items/ItemFilters";
import ItemStats from "@/components/items/ItemStats";
import ItemTabs from "@/components/items/ItemTabs";

export default function ItemListPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-[var(--background)] min-h-screen">
        <Header />

        {/* Main Content Card */}
        <div className="mx-4 sm:mx-6 my-6 soft-card overflow-hidden">
          {/* Breadcrumb + POS Badge */}
          <div className="flex justify-between items-center px-8 py-5 bg-white/70 backdrop-blur-md border-b border-gray-200/30">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <button className="flex items-center gap-2 hover:text-gray-900 transition">
                Dashboard <span className="text-gray-400">›</span>
              </button>
              <button className="flex items-center gap-2 hover:text-gray-900 transition">
                Items
              </button>
            </div>
            <div className="bg-orange-100/90 text-orange-600 px-6 py-2.5 rounded-full text-sm font-bold border border-orange-200/50 backdrop-blur shadow-sm">
              POS 71
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex gap-10 px-8 py-6 border-b border-gray-200/30 overflow-x-auto">
            {["Item List", "Categories", "Tags", "Unit of Measure", "Custom Attributes", "Image Library"].map((tab) => (
              <button
                key={tab}
                className={`text-sm font-medium whitespace-nowrap transition pb-2 border-b-2 ${
                  tab === "Item List"
                    ? "text-black border-black"
                    : "text-gray-500 border-transparent hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Page Content */}
          <div className="p-8">
            <ItemToolbar />
            <ItemFilters />
            <ItemStats />
            <ItemTabs />
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
}