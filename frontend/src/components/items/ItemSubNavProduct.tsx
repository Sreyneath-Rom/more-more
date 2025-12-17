// src/components/items/ItemSubNavProduct.tsx
'use client';

import { LayoutDashboard, ShoppingBag, Package } from 'lucide-react';

export default function ItemSubNavProduct() {
  return (
    <div className="flex items-end justify-between border-b border-gray-200/60 w-full px-2">
      <div className="flex items-end gap-1">
        <Tab
          label="Dashboard"
          active={false}
          icon={<LayoutDashboard className="w-4 h-4" />}
        />
        <Tab
          label="Items"
          active={true}
          icon={<ShoppingBag className="w-4 h-4" />}
        />
        <Tab
          label="Inventory"
          active={false}
          icon={<Package className="w-4 h-4" />}
        />
      </div>

      <button className="mb-2 bg-[#F97316] text-white px-7 py-2.5 rounded-full text-[13px] font-extrabold shadow-lg shadow-orange-100 flex items-center gap-2 hover:bg-[#f85800] transition">
        POS <span className="text-[10px]">↗</span>
      </button>
    </div>
  );
}

interface TabProps {
  label: string;
  active: boolean;
  icon?: React.ReactNode;
}

function Tab({ label, active, icon }: TabProps) {
  return (
    <div
      className={`px-6 py-3.5 text-[13px] font-extrabold rounded-t-[14px] cursor-pointer relative transition-all flex items-center gap-2
        ${active
          ? "bg-white text-[#F97316] border-x border-t border-gray-200 -mb-px z-10 shadow-[0_-4px_12px_-6px_rgba(0,0,0,0.08)]"
          : "bg-gray-200/40 text-gray-500 hover:bg-gray-200/70"
        }
      `}
    >
      {icon && (
        <span
          className={active ? "text-[#F97316]" : "text-gray-500"}
        >
          {icon}
        </span>
      )}
      {label}
    </div>
  );
}