// app/items/page.tsx  ← This is the default "/items" route (Items tab active)
export default function ItemsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Items Page</h1>
      <p>Manage your items here...</p>
      {/* Your items table/list/etc. */}
    </div>
  );
}