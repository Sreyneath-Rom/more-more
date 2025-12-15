// src/app/page.tsx
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductGrid from '@/components/ProductGrid';
import { Plus, Upload, Download, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Now uses <Link> for real navigation */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-600 mb-4">
              Dashboard › Items › Inventory
            </div>

            {/* Top Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div /> {/* Spacer */}
              <div className="flex gap-3">
                <Link href="/items/new" className="bg-black text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-800 transition">
                  <Plus className="w-5 h-5" />
                  Add New Item
                </Link>
                <button className="border border-gray-300 px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition">
                  <Upload className="w-4 h-4" />
                  Import
                </button>
                <button className="border border-gray-300 px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>

            {/* Main White Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              {/* Title */}
              <h2 className="text-2xl font-bold mb-2">Item List</h2>
              <p className="text-gray-600 mb-6">
                List all your items including your products and services
              </p>

              {/* Sub Navigation Tabs */}
              <div className="flex items-center gap-6 text-sm text-gray-600 border-b border-gray-200 pb-4 mb-6 overflow-x-auto whitespace-nowrap">
                <button className="font-medium text-orange-600 border-b-2 border-orange-600 pb-4">
                  Item List
                </button>
                <Link href="/items/categories" className="hover:text-gray-900 transition">Categories</Link>
                <Link href="/items/tags" className="hover:text-gray-900 transition">Tags</Link>
                <Link href="/items/units" className="hover:text-gray-900 transition">Unit of Measure</Link>
                <Link href="/items/attributes" className="hover:text-gray-900 transition">Custom Attributes</Link>
                <Link href="/items/images" className="hover:text-gray-900 transition flex items-center gap-1">
                  <div className="w-4 h-4 bg-gray-300 rounded" />
                  Image Library
                </Link>
              </div>

              {/* Search, Filters & Stats */}
              <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2.5">
                    <Search className="w-5 h-5 text-gray-500 mr-2" />
                    <input
                      type="text"
                      placeholder="Product ID, Name, Barcode..."
                      className="bg-transparent outline-none w-48 text-sm"
                    />
                  </div>
                  <button className="border border-gray-300 px-4 py-2.5 rounded-lg text-sm">
                    Category 3 selected
                  </button>
                  <button className="border border-gray-300 px-4 py-2.5 rounded-lg text-sm flex items-center gap-1">
                    + All filter
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  Total: 120 | For Sale: 25 | Manufacture: 25 | Combo: 10 | Component: 10
                </p>
              </div>

              {/* Main Tabs */}
              <div className="flex gap-8 border-b border-gray-200 mb-8">
                {["All", "Purchased Item", "Manufacture", "Combo"].map((tab) => (
                  <button
                    key={tab}
                    className={`pb-4 px-1 text-sm font-medium border-b-2 transition ${
                      tab === "All"
                        ? "border-black text-black"
                        : "border-transparent text-gray-600 hover:text-black"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Product Grid */}
              <ProductGrid />

              {/* Pagination */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-10 text-sm">
                <div className="flex items-center gap-2 mb-4 sm:mb-0">
                  <button className="p-2 border rounded hover:bg-gray-50 transition">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="px-3 py-1.5 bg-black text-white rounded">1</button>
                  <button className="px-3 py-1.5 border rounded hover:bg-gray-50 transition">2</button>
                  <button className="px-3 py-1.5 border rounded hover:bg-gray-50 transition">3</button>
                  <span className="text-gray-500">...</span>
                  <button className="px-3 py-1.5 border rounded hover:bg-gray-50 transition">12</button>
                  <button className="p-2 border rounded hover:bg-gray-50 transition">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-gray-600">First ‹ 1 2 3 ... 12 › Last</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-3 text-center text-xs text-gray-500">
        version 1.0
      </footer>
    </div>
  );
}