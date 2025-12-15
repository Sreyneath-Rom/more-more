'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductGrid from '@/components/ProductGrid';
import { Plus, Upload, Download, Search, ChevronLeft, ChevronRight, ListFilter, ChevronDown } from 'lucide-react';
import Link from 'next/link';

// Helper for conditional classes
const cn = (...inputs: (string | undefined | null | false)[]) => inputs.filter(Boolean).join(' ');

// Action buttons (Import/Export)
const actionButtons = [
  { label: 'Import', Icon: Upload },
  { label: 'Export', Icon: Download },
];

// Filter pills
const filterButtons = [
  { label: 'Sort by', Icon: ListFilter, active: false, hasChevron: true },
  { label: 'All Categories', Icon: null, active: true, hasChevron: true },
  { label: 'All Items', Icon: null, active: false, hasChevron: true },
  { label: 'All Types', Icon: null, active: false, hasChevron: true },
  { label: 'All Stock', Icon: null, active: false, hasChevron: true },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8F9FC] flex flex-col font-sans text-gray-900">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6 lg:p-8 max-w-480 mx-auto">
            
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6 font-medium">
              Dashboard <span className="mx-2">/</span> 
              <span className="text-gray-900 font-semibold">Items</span> <span className="mx-2">/</span> 
              Inventory
            </nav>

            {/* Title & Top Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Inventory</h2>

              <div className="flex gap-3 w-full md:w-auto">
                <Link 
                  href="/items/new" 
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition shadow-sm"
                >
                  <Plus className="w-5 h-5" />
                  Add New Item
                </Link>
                {actionButtons.map((btn) => (
                  <button 
                    key={btn.label}
                    className="bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition shadow-sm"
                  >
                    <btn.Icon className="w-4 h-4 text-gray-500" />
                    <span className="hidden sm:inline">{btn.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Search & Filter Bar */}
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 mb-6">
              <div className="flex flex-col xl:flex-row gap-4 justify-between items-center">
                
                {/* Search Input */}
                <div className="relative w-full xl:w-96 group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-red-500" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm transition-colors"
                    placeholder="Search products, category, code..."
                  />
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap justify-end gap-2 w-full xl:w-auto">
                  {filterButtons.map((btn) => (
                    <button
                      key={btn.label}
                      className={cn(
                        "flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all border",
                        btn.active
                          ? "bg-orange-500 border-orange-500 text-white shadow-md"
                          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                      )}
                    >
                      {btn.Icon && <btn.Icon className="w-4 h-4" />}
                      {btn.label}
                      {btn.hasChevron && <ChevronDown className={cn("w-3.5 h-3.5", btn.active ? "text-white" : "text-gray-400")} />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* The Grid */}
            <ProductGrid />

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 text-sm text-gray-600">
              <p className="mb-4 sm:mb-0">
                Showing <span className="font-bold text-gray-900">1</span> to <span className="font-bold text-gray-900">20</span> of <span className="font-bold text-gray-900">25,000</span> results
              </p>

              <div className="flex items-center gap-2">
                <button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 flex items-center gap-1 transition">
                  <ChevronLeft className="w-4 h-4" />
                  Prev
                </button>
                <button className="w-9 h-9 flex items-center justify-center bg-red-600 text-white rounded-lg font-medium shadow-sm">1</button>
                <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition">2</button>
                <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition">3</button>
                <span className="px-2">...</span>
                <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition">12</button>
                <button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-1 transition">
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 text-center text-xs text-gray-400">
        Taing Mengju POS System. All rights reserved. 2024.
      </footer>
    </div>
  );
}