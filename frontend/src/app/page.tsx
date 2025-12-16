// src/app/page.tsx (or src/app/items/page.tsx)
"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ItemToolbar from "@/components/items/ItemToolbar";
import ItemTabs from "@/components/items/ItemTabs";
import ItemFilters from "@/components/items/ItemFilters";
import ItemStats from "@/components/items/ItemStats";
import ProductGrid from "@/components/items/ProductGrid";

export default function ItemListPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-amber-50 min-h-screen">
        <Header />
        <div className="mx-6 my-4 bg-white rounded-3xl shadow-sm overflow-hidden">
          {/* Breadcrumb + POS Badge */}
          <div className="flex justify-between items-center px-6 py-3 bg-gray-100 border-b border-gray-200">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <button className="flex items-center gap-1 hover:text-gray-900">
                Dashboard <span className="text-gray-400">×</span>
              </button>
              <button className="flex items-center gap-1 hover:text-gray-900">
                Items <span className="text-gray-400">×</span>
              </button>
              <button className="flex items-center gap-1 hover:text-gray-900">
                Inventory <span className="text-gray-400">×</span>
              </button>
            </div>
            <div className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold border border-orange-200">
              POS 71
            </div>
          </div>

          <ItemTabs />

          <div className="p-8">
            <ItemToolbar />
            <ItemFilters />
            <ItemStats />

            {/* Type Filters */}
            <div className="flex items-center gap-4 mb-8">
              <button className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium">All</button>
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">Purchased Item</button>
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">Manufacture</button>
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">Combo</button>
              <div className="flex-1" />
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 flex items-center gap-2">
                Select
              </button>
            </div>

            <ProductGrid />

            {/* Pagination */}
            <div className="flex justify-center gap-3 mt-12">
              <button className="px-4 py-2 border rounded-full text-sm">First</button>
              <button className="w-9 h-9 bg-black text-white rounded-full text-sm font-medium">1</button>
              <button className="w-9 h-9 border rounded-full text-sm">2</button>
              <button className="w-9 h-9 border rounded-full text-sm">3</button>
              <span className="text-gray-500">...</span>
              <button className="w-9 h-9 border rounded-full text-sm">12</button>
              <button className="px-4 py-2 border rounded-full text-sm">Last</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}