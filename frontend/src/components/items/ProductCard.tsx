// src/components/items/ProductCard.tsx
'use client';

import Image from "next/image";
import Checkbox from "@/components/ui/Checkbox";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  selected: boolean;
  onSelect: () => void;
}

export default function ProductCard({ product, selected, onSelect }: ProductCardProps) {
  const description = product.desc?.trim() || "-";

  return (
    <div
      onClick={onSelect}
      className={`
        group relative flex items-center p-4 gap-2 bg-white rounded-2xl border transition-all duration-200 cursor-pointer
        ${selected 
          ? "border-blue-500 ring-2 ring-blue-100 shadow-md" 
          : "border-gray-100 hover:border-gray-300 hover:shadow-lg"
        }
      `}
    >
      {/* Checkbox - visible on selected or hover */}
      <div className={`absolute top-3 right-3 z-10 transition-opacity ${selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <Checkbox 
          checked={selected} 
          onChange={(e) => { 
            e.stopPropagation(); 
            onSelect(); 
          }} 
        />
      </div>

      {/* Product Image */}
      <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-100">
        <Image
          src={product.image || "/placeholder.png"} // fallback if image fails
          alt={product.name}
          width={80}
          height={80}
          className="object-cover w-full h-full"
          unoptimized // Use if external domains aren't in next.config.js yet
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col min-w-0 flex-1">
        <h3 className="text-[13px] font-bold text-gray-900 truncate leading-tight">
          {product.name}
        </h3>
        <p className="text-[11px] font-bold text-orange-500 mt-0.5">
          {description}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm font-bold text-gray-900">{product.price}</span>
          <div className="bg-blue-50 p-0.5 rounded-full">
            <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}