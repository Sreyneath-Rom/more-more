'use client';

import { Search, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6 shadow-sm">
      <div className="flex items-center justify-between w-full">

        {/* Left: Logo + Title */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {/* Placeholder for logo - replace with your actual logo URL if available */}
            <div className="w-10 h-10 bg-gray-200 rounded-lg border border-gray-100" />
            <div>
              <h1 className="text-lg font-bold text-gray-900">Taing Mengju POS</h1>
              <p className="text-xs text-gray-500">Cashier System</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Setup Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Setup
          </button>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-72 border border-gray-200">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search everything..."
              className="bg-transparent outline-none text-sm text-gray-700 w-full placeholder-gray-400"
            />
          </div>

          {/* Icons */}
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-5 h-5 text-gray-500" />
            {/* Optional notification dot if needed */}
          </button>

          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">Taing Mengju</p>
              <p className="text-xs text-gray-500">Cashier</p>
            </div>
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              TM
            </div>
            <div className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold border border-orange-200">
              POS 71
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}