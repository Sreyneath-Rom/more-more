import { Plus, Upload, Download } from 'lucide-react';

export default function ItemToolbar() {
  return (
    <div className="flex justify-between mb-6">
      <div>
        <h2 className="text-2xl font-semibold">Item List</h2>
        <p className="text-sm text-gray-600">
          List all your items including products and services
        </p>
      </div>

      <div className="flex gap-3">
        <button className="bg-black text-white px-5 py-3 rounded-full flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add New Item
        </button>
        <button className="bg-gray-100 px-4 py-3 rounded-full flex gap-2">
          <Upload className="w-4 h-4" /> Import
        </button>
        <button className="bg-gray-100 px-4 py-3 rounded-full flex gap-2">
          <Download className="w-4 h-4" /> Export
        </button>
      </div>
    </div>
  );
}
