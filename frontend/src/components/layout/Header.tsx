// src/components/layout/Header.tsx
import { Search, Bell, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 sticky top-0 z-50 bg-amber-50 backdrop-blur-md border-b border-gray-200 px-6 flex items-center">
      <div className="flex justify-between w-full items-center">
        <div>
          <h1 className="text-sm font-semibold text-gray-900">តាំង មេងជូ POS</h1>
          <p className="text-xs text-gray-500">Hong Hua Technology Co.,Ltd</p>
        </div>

        <div className="flex items-center gap-5">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            Setup
          </button>

          <div className="flex items-center bg-white px-4 py-2 rounded-full border w-72">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              placeholder="Search everything..."
              className="text-sm outline-none w-full"
            />
            <span className="text-xs text-gray-400">⌘ F</span>
          </div>

          <Settings className="w-5 h-5 text-gray-500 cursor-pointer" />
          <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />

          <div className="flex items-center gap-2">
            <div className="text-right">
              <p className="text-sm font-medium">Taing Mengju</p>
              <p className="text-xs text-gray-500">Cashier</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">
              TM
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}