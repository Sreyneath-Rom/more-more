// src/constants/products.ts
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Coca Cola 330ml",
    desc: "12 can",
    price: "$0.25",
    image: "https://images.unsplash.com/photo-1624552139956-f8c25e0c1f33?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Cambodia beer 330ml",
    desc: "12 can",
    price: "$0.25",
    image: "https://images.unsplash.com/photo-1600788886242-5f96ea8da1b7?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Sirloin Beef",
    desc: "7 kg",
    price: "$11.5",
    image: "https://images.unsplash.com/photo-1432139500780-7471a1ebbceb?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Beef Meat Kilo",
    desc: "8 kg",
    price: "$10.25",
    image: "https://images.unsplash.com/photo-1607116176197-0d0c3c83c003?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    name: "Sourdough bread",
    desc: "-",
    price: "$2.25",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
  },
  {
    id: "6",
    name: "Beef Meat Pack",
    desc: "4 packs",
    price: "$4.5",
    image: "https://images.unsplash.com/photo-1606890658317-7af146bb82bf?w=400&h=400&fit=crop",
  },
  {
    id: "7",
    name: "Banana (Kg)",
    desc: "6.5 kg",
    price: "$4.5",
    image: "https://images.unsplash.com/photo-1546543371-4b17b2d1cd4c?w=400&h=400&fit=crop",
  },
  {
    id: "8",
    name: "Cheesecake",
    desc: "10",
    price: "$4.5",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=400&fit=crop",
  },
  {
    id: "9",
    name: "Yellow Mango",
    desc: "20 kg",
    price: "$0.11",
    image: "https://images.unsplash.com/photo-1561642936-6e0a0dd5c59b?w=400&h=400&fit=crop",
  },
  {
    id: "10",
    name: "Kirisu milk",
    desc: "10 piece",
    price: "$4.5",
    image: "https://images.unsplash.com/photo-1563630665172-2760d2db37a1?w=400&h=400&fit=crop",
  },
  // Add more as needed or duplicate for pagination demo
  ...Array.from({ length: 110 }, (_, i) => ({
    id: `${i + 11}`,
    name: `Product ${i + 11}`,
    desc: Math.random() > 0.5 ? `${(Math.random() * 20).toFixed(1)} kg` : "-",
    price: `$${(Math.random() * 15 + 0.1).toFixed(2)}`,
    image: "https://images.unsplash.com/photo-1546543371-4b17b2d1cd4c?w=400&h=400&fit=crop",
  })),
];