// src/components/items/ProductGrid.tsx
"use client";

import { useState, useMemo } from "react";
import { products } from "@/constants/products";
import ProductCard from "./ProductCard";
import Pagination from "@/components/ui/Pagination";

const PAGE_SIZE = 15;

interface ProductGridProps {
  activeTab: string;
  onSelectedChange: (count: number) => void;
}

export default function ProductGrid({ activeTab, onSelectedChange }: ProductGridProps) {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);

  // Update parent when selection changes
  useMemo(() => {
    onSelectedChange(selected.length);
  }, [selected.length, onSelectedChange]);

  const filteredProducts = useMemo(() => {
    if (activeTab === "All") return products;
    const term = activeTab.toLowerCase().replace(" ", "");
    return products.filter(p => p.name.toLowerCase().includes(term));
  }, [activeTab]);

  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  const paginated = filteredProducts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const toggleSelect = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
    setPage(1); // Optional: reset page on selection
  };

  return (
    <>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {paginated.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            selected={selected.includes(product.id)}
            onSelect={() => toggleSelect(product.id)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 pt-6 border-t border-gray-100">
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      )}
    </>
  );
}