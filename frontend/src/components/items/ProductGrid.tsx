// src/components/items/ProductGrid.tsx
'use client';

import { PRODUCTS } from '@/constants/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {PRODUCTS.map((product, index) => (
        <ProductCard key={`${product.name}-${product.desc}-${index}`} product={product} />
      ))}
    </div>
  );
}