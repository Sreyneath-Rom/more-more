// src/components/items/ItemStats.tsx
export default function ItemStats() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-[13px] text-gray-600">
      <span>Total: <strong className="text-gray-900">120</strong></span>
      <span className="text-sky-600">For Sale: <strong className="text-gray-900">25</strong></span>
      <span className="text-orange-600">Manufacture: <strong className="text-gray-900">25</strong></span>
      <span>Combo: <strong className="text-gray-900">10</strong></span>
      <span>Component: <strong className="text-gray-900">10</strong></span>
    </div>
  );
}