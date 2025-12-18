import { Plus, Upload, Download, MoreHorizontal } from "lucide-react";

export default function ItemToolbar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Item List</h2>
        <p className="text-gray-500 mt-1.5 text-sm">
          List all your items including your products and services
        </p>
      </div>

      <div className="flex flex-wrap gap-3 w-full sm:w-auto">
        <button className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg transition-all active:scale-95">
          <Plus className="w-4 h-4" /> Add New Item
        </button>

        <button className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium transition-all">
          <Upload className="w-4 h-4" /> Import
        </button>

        <button className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium transition-all">
          <Download className="w-4 h-4" /> Export
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 text-gray-500 transition-all">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}