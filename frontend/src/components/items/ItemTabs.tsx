// src/components/items/ItemTabs.tsx
export default function ItemTabs() {
  return (
    <div className="flex gap-5 items-center mb-10 flex-wrap">
      {["All", "Purchased Item", "Manufacture", "Combo"].map((tab) => (
        <button
          key={tab}
          className={tab === "All" ? "btn-primary" : "btn-secondary"}
        >
          {tab}
        </button>
      ))}

      <div className="flex-1" />

      <button className="btn-ghost">
        Select
      </button>
    </div>
  );
}