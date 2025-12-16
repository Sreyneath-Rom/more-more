// src/components/items/ItemFilters.tsx

export default function ItemFilters() {
  return (
    <div className="flex gap-4 items-center mb-6">
      <input
        type="text"
        placeholder="Product ID, Name, Barcode..."
        className="px-5 py-3 rounded-full border border-gray-300 w-96 text-sm outline-none"
      />
      <button className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium">
        Category 3 selected
      </button>
      <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full text-sm font-medium">
        + All filter
      </button>
    </div>
  );
}