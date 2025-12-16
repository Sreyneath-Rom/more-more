"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import { Plus, Upload, Download, ChevronDown } from "lucide-react";

export default function ItemListPage() {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          {/* Title & Description */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Item List</h1>
          <p className="text-gray-600 mb-8">
            List all your items including your products and services
          </p>

          {/* Actions */}
          <div className="flex gap-3 mb-8">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-800 shadow-sm">
              <Plus className="w-5 h-5" />
              Add New Item
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-5 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 shadow-sm">
              <Upload className="w-5 h-5" />
              Import
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-5 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 shadow-sm">
              <Download className="w-5 h-5" />
              Export
            </button>
          </div>

          {/* Filter Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <input
                type="text"
                placeholder="Product ID, Name, Barcode, ..."
                className="w-full lg:w-96 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <div className="flex gap-2">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium">
                  All
                </button>
                <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
                  Purchased Item
                </button>
                <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
                  Manufacture
                </button>
                <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
                  Combo
                </button>
              </div>
            </div>

            <div className="p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex flex-wrap gap-3">
                {[
                  "Categories",
                  "Tags",
                  "Unit of Measure",
                  "Custom Attributes",
                  "Image Library",
                ].map((label) => (
                  <button
                    key={label}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2 hover:bg-gray-50"
                  >
                    {label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ))}
              </div>

              <p className="text-sm text-gray-600">
                Total: <strong className="text-gray-900">120</strong> For Sale:{" "}
                <strong className="text-gray-900">25</strong> Manufacture:{" "}
                <strong className="text-gray-900">25</strong> Combo:{" "}
                <strong className="text-gray-900">10</strong> Component:{" "}
                <strong className="text-gray-900">10</strong>
              </p>
            </div>
          </div>

          {/* Product Grid */}
          <ProductGrid />
        </main>
      </div>
    </div>
  );
}
