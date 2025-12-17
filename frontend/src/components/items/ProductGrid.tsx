"use client";

import { useState } from "react";
import { products } from "@/constants/products";
import ProductCard from "./ProductCard";
import Pagination from "@/components/ui/Pagination";

const PAGE_SIZE = 30;

export default function ProductGrid() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);

  const start = (page - 1) * PAGE_SIZE;
  const paginated = products.slice(start, start + PAGE_SIZE);
  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      {/* GRID */}
      <div
        className="
          grid gap-6
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-6
        "
      >
        {paginated.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            selected={selected.includes(product.id)}
            onSelect={() => toggleSelect(product.id)}
          />
        ))}
      </div>

      {/* PAGINATION */}
      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </>
  );
}
