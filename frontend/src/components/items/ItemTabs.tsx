// src/components/items/ItemTabs.tsx
import { CheckCircle2 } from "lucide-react";

export default function ItemTabs() {
  const tabs = ["All", "Purchased Item", "Manufacture", "Combo"];
  const activeTab = "All";

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-1.5 bg-gray-50 p-1.5 rounded-xl border border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`
              px-5 py-2 rounded-lg text-xs font-bold transition-all
              ${tab === activeTab 
                ? "bg-gray-900 text-white shadow-md" 
                : "text-gray-500 hover:text-gray-900 hover:bg-white"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      <button className="flex items-center gap-2 px-5 py-2 text-xs font-bold text-gray-600 border border-gray-200 rounded-full hover:bg-gray-50 bg-white transition-all">
         <CheckCircle2 className="w-4 h-4 text-gray-400" />
         Select
      </button>
    </div>
  );
}