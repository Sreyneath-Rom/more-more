'use client';

import { Search, Menu, Plus, Bell, Settings } from 'lucide-react';

const LOGO_URL = "https://i.imgur.com/L537z4W.png"; 

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 h-16 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-between px-4 lg:px-6 h-full">
        
        {/* Left: Brand */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100 text-gray-600">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 p-1 flex items-center justify-center">
               <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-sm font-bold text-gray-900 leading-none">Taing Mengju POS</h1>
              <span className="text-[11px] text-gray-500 font-medium mt-1">Cashier System</span>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 md:gap-6">
          
          <button className="bg-[#EB3B3B] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition shadow-sm shadow-red-200">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="hidden sm:inline">Setup</span>
          </button>
          
          {/* Top Search (Desktop) */}
          <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-3 py-1.5 w-64 border border-gray-200 focus-within:ring-2 focus-within:ring-red-100 focus-within:border-red-300 transition-all">
            <Search className="w-4 h-4 text-red-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-400 text-gray-700"
            />
            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded px-1.5 py-0.5 ml-2">
                <Plus className="w-3 h-3 text-gray-400" />
                <span className="text-[10px] font-bold text-gray-500">F</span>
            </div>
          </div>
          
          {/* Icons */}
          <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition hidden lg:block">
                <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition hidden lg:block relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
          
          {/* User Profile */}
          <div className="flex items-center gap-3 pl-2 cursor-pointer group">
            <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md border-2 border-white ring-1 ring-orange-100">
              TM
            </div>
            <div className="hidden lg:block text-right">
                <span className="block text-sm font-semibold text-gray-800 leading-tight group-hover:text-red-600 transition">Taing Mengju</span>
                <span className="block text-xs text-gray-500 leading-tight">Admin</span>
            </div>
            {/* POS ID */}
            <div className="hidden md:flex items-center justify-center px-3 py-1 bg-orange-50 text-orange-600 border border-orange-200 rounded-full text-xs font-bold shadow-sm">
              POS 71
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}