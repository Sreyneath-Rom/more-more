// src/components/items/ItemFilters.tsx
export default function ItemFilters() {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-8">
      <input
        type="text"
        placeholder="Product ID, Name, Barcode..."
        className="px-6 py-4 rounded-full border border-gray-300 soft-inset w-full max-w-lg text-base outline-none focus:border-blue-500 transition"
      />

      <button className="bg-blue-100 text-blue-700 px-7 py-4 rounded-full font-medium">
        Category 3 selected
      </button>

      <button className="btn-ghost">
        + All filter
      </button>
    </div>
  );
}