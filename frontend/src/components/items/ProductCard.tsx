// src/components/items/ProductCard.tsx

import { PRODUCTS } from '@/constants/products';

export default function ProductCard({ product }: { product: typeof PRODUCTS[number] }) {
  return (
    <div className="bg-white rounded-2xl border hover:shadow-sm transition-shadow">
      <div className="aspect-square bg-gray-50 p-6 rounded-t-2xl">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.desc}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-orange-600 font-semibold">{product.price}</span>
          <span className={`w-3 h-3 rounded-full ${product.dot}`} />
        </div>
      </div>
    </div>
  );
}