export default function ItemFilters() {
  return (
    <div className="flex gap-3 mb-6">
      <input
        placeholder="Product ID, Name, Barcode..."
        className="px-5 py-3 rounded-full border w-80 text-sm"
      />
      <button className="bg-blue-100 text-blue-700 px-5 py-3 rounded-full text-sm">
        Category 3 selected
      </button>
      <button className="bg-gray-100 px-5 py-3 rounded-full text-sm">
        + All filter
      </button>
    </div>
  );
}
