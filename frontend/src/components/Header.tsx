'use client';

import { Search, Bell, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-amber-50  h-16 flex items-center px-6 sticky top-0 z-50 ">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-lg border border-gray-100" />
            <div>
              <h1 className="text-lg font-bold text-gray-900">តាំង មេងជូ POS</h1>
              <p className="text-xs text-gray-500">Hong Hua Technology Co.,Ltd</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Setup
          </button>

          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-72 border border-gray-200">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search everything..."
              className="bg-transparent outline-none text-sm text-gray-700 w-full placeholder-gray-400"
            />
            <span className="text-gray-400 ml-2 text-sm">+ F</span>
          </div>

          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-5 h-5 text-gray-500" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">Taing Mengju</p>
              <p className="text-xs text-gray-500">Cashier</p>
            </div>
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              TM
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
}