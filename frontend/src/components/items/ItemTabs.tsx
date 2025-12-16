const tabs = [
  'Item List',
  'Categories',
  'Tags',
  'Unit of Measure',
  'Custom Attributes',
  'Image Library',
];

export default function ItemTabs() {
  return (
    <div className="flex gap-8 px-6 border-b border-gray-200 text-sm">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          className={`pb-4 ${
            i === 0
              ? 'text-orange-600 font-medium border-b-2 border-orange-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
