// src/components/items/ItemToolbar.tsx
import { Plus, Upload, Download } from "lucide-react";

export default function ItemToolbar() {
  return (
    <div className="flex justify-between mb-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Item List</h2>
        <p className="text-gray-600 mt-1">
          List all your items including your products and services
        </p>
      </div>

      <div className="flex gap-4">
        <button className="btn-primary flex items-center gap-3">
          <Plus className="w-5 h-5" /> Add New Item
        </button>
        <button className="btn-secondary flex items-center gap-3">
          <Upload className="w-5 h-5" /> Import
        </button>
        <button className="btn-secondary flex items-center gap-3">
          <Download className="w-5 h-5" /> Export
        </button>
      </div>
    </div>
  );
}