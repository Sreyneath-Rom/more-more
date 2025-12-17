// src/components/items/ProductCard.tsx
"use client";

import Checkbox from "@/components/ui/Checkbox";
import { Product } from "@/types/product";
import Image from "next/image";

export default function ProductCard({
  product,
  selected,
  onSelect,
}: {
  product: Product;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      className={`relative soft-card p-5 transition-all hover:shadow-xl cursor-pointer ${
        selected ? "ring-2 ring-black ring-offset-4" : ""
      }`}
    >
      <div className="absolute top-4 left-4 z-10">
        <Checkbox checked={selected} onChange={onSelect} />
      </div>

      <div className="aspect-square rounded-3xl overflow-hidden mb-5 border border-gray-200/50">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100" />
        )}
      </div>

      <h3 className="font-semibold text-base line-clamp-2">{product.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{product.desc || "-"}</p>

      <div className="mt-4 inline-block px-5 py-2.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold shadow-sm">
        {product.price}
      </div>
    </div>
  );
}