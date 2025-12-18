// src/components/items/ItemSubNavProduct.tsx
"use client";

import { LayoutDashboard, ShoppingBag, Package } from "lucide-react";
import { useState } from "react";

type SubTab = "dashboard" | "items" | "inventory";

interface TabProps {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

function Tab({ label, icon, active, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3.5 text-[13px] font-extrabold rounded-t-[14px] 
        flex items-center gap-2 transition-all relative
        ${active
          ? "bg-white text-orange-600 border-x border-t border-gray-200 -mb-px z-10 shadow-sm"
          : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
        }
      `}
    >
      <span className={active ? "text-orange-600" : "text-gray-500"}>{icon}</span>
      {label}
    </button>
  );
}

export default function ItemSubNavProduct() {
  const [activeTab, setActiveTab] = useState<SubTab>("items");

  return (
    <div className="flex items-end justify-between border-b border-gray-200 w-full px-4 mt-4">
      <div className="flex items-end gap-1 bg-gray-100 rounded-t-lg">
        <Tab label="Dashboard" icon={<LayoutDashboard className="w-4 h-4" />} active={activeTab === "dashboard"} onClick={() => setActiveTab("dashboard")} />
        <Tab label="Items" icon={<ShoppingBag className="w-4 h-4" />} active={activeTab === "items"} onClick={() => setActiveTab("items")} />
        <Tab label="Inventory" icon={<Package className="w-4 h-4" />} active={activeTab === "inventory"} onClick={() => setActiveTab("inventory")} />
      </div>

      <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg transition-colors mb-1">
        POS 71
      </button>
    </div>
  );
}