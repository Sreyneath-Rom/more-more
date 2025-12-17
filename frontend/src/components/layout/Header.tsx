// src/components/layout/Header.tsx
import { Search, Bell, Settings, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="h-18 px-8 flex items-center justify-between bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Brand: High-Contrast Hierarchy */}
      <div className="flex flex-col min-w-60">
        <h1 className="text-[18px] font-black text-gray-900 leading-tight">តាំង មេងជូ POS</h1>
        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.18em] mt-0.5">
          Hong Hua Technology Co., Ltd
        </p>
      </div>

      {/* Search: Neutral Gray Pill */}
      <div className="flex-1 max-w-2xl mx-12 relative">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 stroke-[2.5]" />
        <input
          type="text"
          placeholder="Search anything here..."
          className="w-full pl-12 pr-6 py-2.5 bg-[#F3F4F6] border-none rounded-full text-[13px] placeholder:text-gray-400 outline-none"
        />
      </div>

      {/* Profile & Tools */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1 border-r border-gray-100 pr-5">
          <button className="p-2.5 text-gray-400 relative">
            <Bell className="w-5 h-5 stroke-[1.8]" />
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#EF4444] border-2 border-white rounded-full" />
          </button>
          <button className="p-2.5 text-gray-400"><Settings className="w-5 h-5 stroke-[1.8]" /></button>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-[13px] font-extrabold text-gray-900 leading-none">Taing Mengju</p>
            <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase">Cashier</p>
          </div>
          <div className="relative">
            <div className="w-10 h-10 bg-[#FEF2F2] text-[#EF4444] rounded-full flex items-center justify-center text-[12px] font-black border border-[#FEE2E2]">TM</div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#10B981] border-[3px] border-white rounded-full" />
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 stroke-3" />
        </div>
      </div>
    </header>
  );
}