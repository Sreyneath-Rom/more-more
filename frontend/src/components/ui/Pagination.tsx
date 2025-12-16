export default function Pagination() {
  return (
    <div className="flex justify-center gap-3 mt-12">
      <button className="px-4 py-2 border rounded-full">First</button>
      <button className="w-9 h-9 bg-black text-white rounded-full">1</button>
      <button className="w-9 h-9 border rounded-full">2</button>
      <button className="px-4 py-2 border rounded-full">Last</button>
    </div>
  );
}
