"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ProductGrid from "@/components/items/ProductGrid";
import { Plus, Upload, Download, ChevronDown, Circle } from "lucide-react";

export default function ItemListPage() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen bg-amber-50">
        <Header />
        <div className="bg-white  rounded-3xl mx-6 my-4 p-4 text-center text-sm font-medium shadow-sm ">
          {/* Breadcrumb Tabs + POS Badge */}
          <div className="bg-gray-100 border-b border-gray-200 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <button className="flex items-center gap-1 hover:text-gray-900">
                Dashboard <span>×</span>
              </button>
              <button className="flex items-center gap-1 hover:text-gray-900">
                Items <span>×</span>
              </button>
              <button className="flex items-center gap-1 hover:text-gray-900">
                Inventory <span>×</span>
              </button>
            </div>
            <div className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold border border-orange-200">
              POS 71
            </div>
          </div>

          {/* Sub Navigation */}
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-8 text-sm">
            <button className="text-orange-600 font-medium border-b-2 border-orange-600 pb-4">
              Item List
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              Categories
            </button>
            <button className="text-gray-600 hover:text-gray-900">Tags</button>
            <button className="text-gray-600 hover:text-gray-900">
              Unit of Measure
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              Custom Attributes
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              Image Library
            </button>
          </div>

          <main className="flex-1 px-8 py-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Item List</h1>
                <p className="text-gray-600 mt-1">
                  List all your items including your products and services
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-black text-white px-5 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-900">
                  <Plus className="w-5 h-5" />
                  Add New Item
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200">
                  <Upload className="w-4 h-4" />
                  Import
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200">
                  <Download className="w-4 h-4" />
                  Export
                </button>
                <button className="text-gray-500 hover:text-gray-700 text-2xl">
                  ⋮
                </button>
              </div>
            </div>

            {/* Search + Filters */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Product ID, Name, Barcode, ..."
                  className="w-full px-5 py-3 pl-12 bg-white border border-gray-300 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
              <button className="bg-blue-100 text-blue-700 px-5 py-3 rounded-full text-sm font-medium">
                Category 3 selected ..
              </button>
              <button className="bg-gray-100 text-gray-700 px-5 py-3 rounded-full text-sm font-medium">
                + All filter
              </button>
            </div>

            {/* Totals */}
            <p className="text-sm text-gray-600 mb-6">
              Total: <strong className="text-gray-900">120</strong> | For Sale:{" "}
              <strong className="text-gray-900">25</strong> | Manufacture:{" "}
              <strong className="text-gray-900">25</strong> | Combo:{" "}
              <strong className="text-gray-900">10</strong> | Component:{" "}
              <strong className="text-gray-900">10</strong>
            </p>

            {/* Type Filters */}
            <div className="flex items-center gap-3 mb-8">
              <button className="px-6 py-3 bg-black text-white rounded-full font-medium">
                All
              </button>
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200">
                Purchased Item
              </button>
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200">
                Manufacture
              </button>
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200">
                Combo
              </button>
              <div className="flex-1" />
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 flex items-center gap-2">
                <Circle className="w-4 h-4" />
                Select
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Product Grid */}
            <ProductGrid />

            {/* Pagination */}
            <div className="mt-12 flex justify-center items-center gap-3">
              <button className="px-5 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50">
                First
              </button>
              <button className="w-10 h-10 bg-black text-white rounded-full text-sm font-medium">
                1
              </button>
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50">
                3
              </button>
              <span className="text-gray-500">...</span>
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50">
                12
              </button>
              <button className="px-5 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50">
                Last
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
