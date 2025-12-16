'use client';

const products = [
  { name: "Coca Cola 330ml", desc: "12 can", price: "$0.25", dot: "bg-blue-500" },
  { name: "Cambodia beer 330ml", desc: "12 can", price: "$0.25", dot: "bg-blue-500" },
  { name: "Sirloin Beef", desc: "7 kg", price: "$11.5", dot: "bg-yellow-500" },
  { name: "Beef Meat Kilo", desc: "8 kg", price: "$10.25", dot: "bg-yellow-500" },
  { name: "Sourdough bread", desc: "-", price: "$2.25", dot: "bg-blue-500" },
  { name: "Beef Meat Pack", desc: "4 packs", price: "$4.5", dot: "bg-green-500" },
  // Add the rest similarly...
].map((p, i) => ({
  ...p,
  img: [
    "https://www.shutterstock.com/image-photo/tbilisi-georgia-may-29-2024-600nw-2468450965.jpg",
    "https://media.makrocambodiaclick.com/PRODUCT_1736835908276.png",
    "https://img.freepik.com/premium-photo/fresh-raw-sirloin-beef-meat-steak-isolated-white-background_89816-46033.jpg",
    "https://www.shutterstock.com/image-photo/raw-silverside-round-beef-meat-600nw-2628066115.jpg",
    "https://media.istockphoto.com/id/1296074559/photo/a-large-fresh-piece-of-meat-in-a-vacuum-sealed-package-isolated-on-a-white-background.jpg?s=612x612&w=is&k=20&c=gmqZT9eFO9y5F1DHFtNf1EBjAj8MOFBBZ2arSbt4UXQ=",
    "https://media.istockphoto.com/id/1296074559/photo/a-large-fresh-piece-of-meat-in-a-vacuum-sealed-package-isolated-on-a-white-background.jpg?s=612x612&w=is&k=20&c=gmqZT9eFO9y5F1DHFtNf1EBjAj8MOFBBZ2arSbt4UXQ=",
    // Use matching URLs from your original code
  ][i % 6] // Cycle if needed
}));

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {products.map((product) => (
        <div key={product.name} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
          <div className="aspect-square overflow-hidden">
            <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{product.desc}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-orange-600">{product.price}</span>
              <div className={`w-4 h-4 rounded-full ${product.dot}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}