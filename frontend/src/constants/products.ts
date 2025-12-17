// src/constants/products.ts
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Coca Cola 330ml",
    desc: "12 can",
    price: "$0.25",
    image: "https://blvckstains.com/wp-content/uploads/2021/02/coca-cola-330mL-Can-label-Branding-scaled.jpg", // Clean Coca Cola can
  },
  {
    id: "2",
    name: "Cambodia beer 330ml",
    desc: "12 can",
    price: "$0.25",
    image: "https://tipsytopsy.com.sg/cdn/shop/files/g8asit8f.png?v=1745400160", // Cambodia Premium Beer can
  },
  {
    id: "3",
    name: "Sirloin Beef",
    desc: "7 kg",
    price: "$11.5",
    image: "https://shop.creekstonefarms.com/cdn/shop/files/Baseball_Cut_Top_Sirloin.jpg?v=1755627515", // Premium raw sirloin steak
  },
  {
    id: "4",
    name: "Beef Meat Kilo",
    desc: "8 kg",
    price: "$10.25",
    image: "https://www.meatemporium.com.au/cdn/shop/products/JA_AME_OurFarmBeefPack_29.jpg?v=1652748098", // Beef pack (kilo style)
  },
  {
    id: "5",
    name: "Sourdough bread",
    desc: "-",
    price: "$2.25",
    image: "https://www.theperfectloaf.com/wp-content/uploads/2015/09/theperfectloaf_miling_fresh-17.jpg", // Beautiful fresh sourdough
  },
  {
    id: "6",
    name: "Beef Meat Pack",
    desc: "4 packs",
    price: "$4.5",
    image: "https://s3.amazonaws.com/grazecart/sagemountainbeef/images/1742416647_67db2b07d5ce4.jpeg", // Grass-fed beef packs
  },
  {
    id: "7",
    name: "Banana (Kg)",
    desc: "6.5 kg",
    price: "$4.5",
    image: "https://tiimg.tistatic.com/fp/1/008/061/1-kilogram-healthy-natural-fresh-whole-sweet-banana-791.jpg", // Fresh bananas bunch
  },
  {
    id: "8",
    name: "Cheesecake",
    desc: "10",
    price: "$4.5",
    image: "https://cdn11.bigcommerce.com/s-xk9q0zvlyg/images/stencil/1280x1280/products/130/467/NY_Cheesecake_whole_lo_res__39147.1745866032.jpg?c=1", // Classic New York cheesecake
  },
  {
    id: "9",
    name: "Yellow Mango",
    desc: "20 kg",
    price: "$0.11",
    image: "https://tiimg.tistatic.com/fp/2/007/714/soft-juicy-fleshed-fruit-king-of-fruit-fresh-mango--883.jpg", // Ripe yellow mangoes
  },
  {
    id: "10",
    name: "Kirisu milk",
    desc: "10 piece",
    price: "$4.5",
    image: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=122158166576565103", // Real Kirisu milk product
  },
  // Demo products - using a clean generic placeholder
  ...Array.from({ length: 110 }, (_, i) => ({
    id: `${i + 11}`,
    name: `Product ${i + 11}`,
    desc: Math.random() > 0.5 ? `${(Math.random() * 20).toFixed(1)} kg` : "-",
    price: `$${(Math.random() * 15 + 0.1).toFixed(2)}`,
    image: "https://www.shutterstock.com/image-vector/generic-placeholder-vector-graphic-file-260nw-2698168727.jpg", // Simple placeholder
  })),
];