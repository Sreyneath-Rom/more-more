'use client';

import { Search, Menu, Circle } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-linear-to-br from-green-500 via-blue-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-md">
              TM
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Taing Mengju POS System</h1>
              <p className="text-xs text-gray-500">Cashier</p>
            </div>
          </div>
        </div>

        {/* Right: Search + Setup + User */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-64">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search everything..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-red-600 transition">
            <Circle className="w-4 h-4 fill-current" />
            Setup
          </button>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow">
              TM
            </div>
            <span className="hidden md:block text-sm font-medium text-gray-800">Taing Mengju</span>
            <div className="bg-orange-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow">
              POS 71
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}