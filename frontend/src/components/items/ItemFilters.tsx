import { Search, MoreHorizontal, Plus } from "lucide-react";

export default function ItemFilters() {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
        <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50">
          <MoreHorizontal className="w-4 h-4" />
        </button>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            placeholder="Product ID, Name, Barcode..."
            className="w-full shadow-inner shadow-indigo-100 bg-linear-to-br from-indigo-50 to-white pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="flex items-center gap-2 bg-blue-50 text-sky-600 px-3 py-1.5 rounded-full text-[11px] font-bold border border-blue-100">
          Category 3 selected <span className="cursor-pointer ml-1">×</span>
        </div>

        <button className="text-sky-500 text-[11px] font-bold flex items-center gap-1 whitespace-nowrap">
          <Plus className="w-3 h-3" /> All filter
        </button>
      </div>

      <div className="flex items-center gap-3 text-[11px] text-gray-400 font-bold flex-wrap">
        <span>Total: <b className="text-gray-900">120</b></span>
        <div className="w-px h-3 bg-gray-200" />
        <span className="text-sky-500">For Sale: <b className="text-gray-900">25</b></span>
        <div className="w-px h-3 bg-gray-200" />
        <span className="text-sky-500">Manufacture: <b className="text-gray-900">25</b></span>
      </div>
    </div>
  );
}