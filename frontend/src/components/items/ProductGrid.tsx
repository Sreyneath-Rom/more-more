// src/components/items/ProductGrid.tsx
"use client";

import { useState, useMemo, useEffect } from "react";
import { products } from "@/constants/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  activeTab: string;
  currentPage: number;
  itemsPerPage: number;
  onSelectedChange: (count: number) => void;
}

export default function ProductGrid({
  activeTab,
  currentPage,
  itemsPerPage,
  onSelectedChange,
}: ProductGridProps) {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    onSelectedChange(selected.length);
  }, [selected.length, onSelectedChange]);

  const filteredProducts = useMemo(() => {
    if (activeTab === "All") return products;

    const lowerTab = activeTab.toLowerCase();
    return products.filter((p) => {
      const name = p.name.toLowerCase();
      const desc = (p.desc || "").toLowerCase();
      return (
        name.includes(lowerTab) ||
        desc.includes(lowerTab) ||
        (lowerTab.includes("purchased") && name.includes("purchase")) ||
        (lowerTab.includes("manufacture") && name.includes("make"))
      );
    });
  }, [activeTab]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  if (paginated.length === 0) {
    return (
      <div className="col-span-full text-center py-20">
        <p className="text-lg font-medium text-gray-500">No items found</p>
        <p className="text-sm text-gray-400 mt-2">Try changing the tab or adjusting filters</p>
      </div>
    );
  }

  return (
    <div className="grid  gap-4
                    grid-cols-2 
                    sm:grid-cols-3 
                    md:grid-cols-4 
                    lg:grid-cols-5 
                    xl:grid-cols-6 
                    ">
      {paginated.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          selected={selected.includes(product.id)}
          onSelect={() => toggleSelect(product.id)}
        />
      ))}
    </div>
  );
}