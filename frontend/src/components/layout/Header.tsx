// src/components/layout/Header.tsx
"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  Settings,
  ChevronDown,
  User,
  LogOut,
  SlidersHorizontal,
  X,
} from "lucide-react";

export default function Header() {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openMobileSearch, setOpenMobileSearch] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/80 border-b border-gray-200/50">
        <div className="h-16 px-6 sm:px-8 flex items-center justify-between">

          {/* Left - Company Name */}
          <div className="flex items-center gap-5">
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                តាំង មេងជូ POS
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                Hong Hua Technology Co., Ltd
              </p>
            </div>
          </div>

          {/* Center - Search (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center px-8">
            <div className="flex items-center bg-gray-100/70 soft-inset px-6 py-3.5 rounded-full border border-gray-200/50 w-full max-w-xl backdrop-blur">
              <Search className="w-5 h-5 text-gray-500 mr-3" />
              <input
                placeholder="Search products, customers..."
                className="text-sm outline-none w-full bg-transparent placeholder-gray-500"
              />
              <kbd className="text-xs text-gray-400 ml-3">⌘ F</kbd>
            </div>
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-4 relative">

            {/* Mobile Search Button */}
            <button
              onClick={() => setOpenMobileSearch(true)}
              className="md:hidden p-3 rounded-full hover:bg-gray-100/70 transition"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            {/* Setup Button */}
            <button className="hidden sm:flex bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-full text-sm font-semibold transition shadow-md">
              Setup
            </button>

            {/* Notifications */}
            <button className="relative p-3 rounded-full hover:bg-gray-100/70 transition">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full" />
            </button>

            {/* Settings */}
            <button className="p-3 rounded-full hover:bg-gray-100/70 transition hidden sm:block">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>

            {/* User Menu */}
            <button
              onClick={() => setOpenUserMenu(!openUserMenu)}
              className="flex items-center gap-3 p-2 rounded-full hover:bg-gray-100/70 transition"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full" />
              <div className="text-left hidden sm:block">
                <p className="text-sm font-semibold text-gray-900">Taing Mengju</p>
                <p className="text-xs text-gray-500">Cashier</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-600 hidden sm:block" />
            </button>

            {/* User Dropdown */}
            {openUserMenu && (
              <div className="absolute right-0 top-20 w-72 bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-200/50 z-50 overflow-hidden">
                <div className="p-6 border-b border-gray-200/50 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-3 shadow-lg" />
                  <p className="text-lg font-semibold">Taing Mengju</p>
                  <p className="text-sm text-gray-500">Cashier</p>
                </div>

                <div className="py-2">
                  <button className="flex items-center gap-4 w-full px-6 py-4 text-sm hover:bg-gray-100/70 transition">
                    <User className="w-5 h-5 text-gray-600" /> Profile
                  </button>
                  <button className="flex items-center gap-4 w-full px-6 py-4 text-sm hover:bg-gray-100/70 transition">
                    <SlidersHorizontal className="w-5 h-5 text-gray-600" /> Preferences
                  </button>
                </div>

                <div className="border-t border-gray-200/50">
                  <button className="flex items-center gap-4 w-full px-6 py-4 text-sm text-red-600 hover:bg-red-50/70 transition">
                    <LogOut className="w-5 h-5" /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Search Overlay */}
      {openMobileSearch && (
        <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-2xl">
          <div className="h-16 px-6 flex items-center border-b border-gray-200/50">
            <div className="flex items-center w-full bg-gray-100/70 soft-inset px-6 py-3.5 rounded-full">
              <Search className="w-5 h-5 text-gray-500 mr-3" />
              <input
                autoFocus
                placeholder="Search products, customers..."
                className="text-base outline-none w-full bg-transparent"
              />
              <button onClick={() => setOpenMobileSearch(false)}>
                <X className="w-6 h-6 text-gray-500 ml-3" />
              </button>
            </div>
          </div>
          <div className="p-10 text-center text-gray-500">
            Start typing to search…
          </div>
        </div>
      )}
    </>
  );
}