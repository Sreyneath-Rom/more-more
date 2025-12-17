// src/components/items/ItemTabs.tsx
"use client";

import { CheckCircle2 } from "lucide-react";

const TABS = ["All", "Purchased Item", "Manufacture", "Combo"] as const;

type TabType = typeof TABS[number];

interface ItemTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  selectedCount: number;
}

export default function ItemTabs({
  activeTab,
  onTabChange,
  selectedCount,
}: ItemTabsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6  bg-gray-100  sticky top-0 z-20 ">
      {/* Tabs */}
      <div className="flex items-center p-1 bg-gray-100 rounded-xl shadow-inner">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              px-6 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 whitespace-nowrap
              ${activeTab === tab
                ? "bg-gray-900 text-white shadow-md"
                : "text-gray-600 hover:text-gray-900 hover:bg-white"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Select Button - Shows only when items are selected */}
      {selectedCount > 0 && (
        <button className="flex items-center gap-2.5 px-6 py-2.5 text-xs font-bold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-gray-500" />
          Selected ({selectedCount})
        </button>
      )}
    </div>
  );
}