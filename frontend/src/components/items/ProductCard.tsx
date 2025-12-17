// src/components/items/ProductCard.tsx
"use client";

import Checkbox from "@/components/ui/Checkbox";
import { Product } from "@/types/product";
import Image from "next/image";
import { MouseEvent } from "react";

export default function ProductCard({
  product,
  selected,
  onSelect,
}: {
  product: Product;
  selected: boolean;
  onSelect: () => void;
}) {
  // Prevent checkbox click from triggering the card's onClick
  const handleCheckboxClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onSelect();
  };

  return (
    <div
      className={`relative bg-white rounded-3xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer border border-transparent ${
        selected ? "ring-4 ring-black ring-offset-2" : ""
      }`}
      onClick={onSelect}
    >
      {/* Checkbox */}
      <div className="absolute top-4 left-4 z-20">
        <Checkbox
          checked={selected}
          onChange={handleCheckboxClick}  // Correct type: (e: MouseEvent) => void, but we call onSelect() which is () => void
        />
      </div>

      {/* Image container */}
      <div className="aspect-square bg-white p-10 flex items-center justify-center">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain drop-shadow-lg"
          />
        ) : (
          <div className="w-full h-full bg-gray-50 rounded-2xl border border-dashed border-gray-300 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Text content */}
      <div className="px-6 pb-6 pt-2">
        <h3 className="font-semibold text-base text-gray-900 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* Temporary safe fallback until you add 'unit' to Product type */}
        <p className="text-sm text-gray-500 mt-1.5 leading-none">
          {product.desc || "-"}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold shadow-sm">
          {product.price || "$0.00"}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}