// src/components/items/ItemSubNav.tsx
type ViewType = "list" | "categories" | "tags" | "uom" | "attributes" | "library";

interface ItemSubNavProps {
  activeView: ViewType;
  setView: (v: ViewType) => void;
}

export default function ItemSubNav({ activeView, setView }: ItemSubNavProps) {
  const tabs = [
    { id: "list", label: "Item List" },
    { id: "categories", label: "Categories" },
    { id: "tags", label: "Tags" },
    { id: "uom", label: "Unit of Measure" },
    { id: "attributes", label: "Custom Attributes" },
    { id: "library", label: "Image Library" },
  ] as const;

  return (
    <div className="flex items-center gap-8 border-b border-gray-100 overflow-x-auto hide-scrollbar mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setView(tab.id)}
          className={`
            pb-4 text-sm font-bold whitespace-nowrap transition-colors relative
            ${activeView === tab.id ? "text-orange-600" : "text-gray-400 hover:text-gray-600"}
          `}
        >
          {tab.label}
          {activeView === tab.id && (
            <span className="absolute bottom-0 left-0 w-full h-0.75 bg-orange-500 rounded-t-full" />
          )}
        </button>
      ))}
    </div>
  );
}