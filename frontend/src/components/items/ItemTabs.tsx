// src/components/items/ItemTabs.tsx

const tabs = [
  'Item List',
  'Categories',
  'Tags',
  'Unit of Measure',
  'Custom Attributes',
  'Image Library',
] as const;

export default function ItemTabs() {
  return (
    <div className="flex gap-8 px-6 py-4 border-b border-gray-200 bg-white">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`
            pb-3 text-sm font-medium transition-colors
            ${index === 0
              ? 'text-orange-600 border-b-2 border-orange-600'
              : 'text-gray-600 hover:text-gray-900'
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}