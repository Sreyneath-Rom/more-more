export default function ProductCard({ product }: any) {
  return (
    <div className="bg-white rounded-2xl border hover:shadow-sm transition">
      <div className="aspect-square bg-gray-50 p-6">
        <img
          src={product.img}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-4">
        <h3 className="font-medium truncate">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.desc}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-orange-600 font-semibold">{product.price}</span>
          <span className={`w-3 h-3 rounded-full ${product.dot}`} />
        </div>
      </div>
    </div>
  );
}
