'use client';

const products = [
  { name: "Coca Cola 330ml", desc: "12 can", price: "$0.25", dot: "bg-blue-500", img: "https://www.shutterstock.com/image-photo/tbilisi-georgia-may-29-2024-600nw-2468450965.jpg" },
  { name: "Cambodia beer 330ml", desc: "12 can", price: "$0.25", dot: "bg-blue-500", img: "https://media.makrocambodiaclick.com/PRODUCT_1736835908276.png" },
  { name: "Sirloin Beef", desc: "7 kg", price: "$11.5", dot: "bg-yellow-500", img: "https://img.freepik.com/premium-photo/fresh-raw-sirloin-beef-meat-steak-isolated-white-background_89816-46033.jpg" },
  { name: "Beef Meat Kilo", desc: "8 kg", price: "$10.25", dot: "bg-yellow-500", img: "https://www.shutterstock.com/image-photo/raw-silverside-round-beef-meat-600nw-2628066115.jpg" },
  { name: "Sourdough bread", desc: "-", price: "$2.25", dot: "bg-blue-500", img: "https://media.istockphoto.com/id/1542962325/photo/sourdough-loaf-of-bread-with-pumpkin-seeds-and-slices-close-up-on-white-background.jpg?s=612x612&w=0&k=20&c=9polh4g__i9buwr5aczU86dknPfv2ReOfbuKV7dsVRU=" },
  { name: "Banana (Kg)", desc: "6.5 kg", price: "$4.5", dot: "bg-blue-500", img: "https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU=" },
  { name: "Cheesecake", desc: "10", price: "$4.5", dot: "bg-blue-500", img: "https://static.vecteezy.com/system/resources/thumbnails/054/967/960/small/fresh-cheesecake-slice-isolated-on-white-background-png.png" },
  { name: "Yellow Mango", desc: "20 kg", price: "$0.11", dot: "bg-blue-500", img: "https://media.istockphoto.com/id/1019835828/photo/mango-and-leaf-isolated-white-background.jpg?s=612x612&w=0&k=20&c=_nmOBzO9mGEitT2rUvO1xAX9jwL5mHYI8AFRbYeyy-A=" },
  { name: "Angkor milk", desc: "0 piece", price: "$3.5", dot: "bg-blue-500", img: "https://media.makrocambodiaclick.com/PRODUCT_1726649987141.jpeg" },
  { name: "Banana", desc: "0 pc", price: "$1.25", dot: "bg-blue-500", img: "https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU=" },
  { name: "Iced Latte", desc: "-", price: "$3.99", dot: "bg-blue-500", img: "https://thumbs.dreamstime.com/b/iced-latte-coffee-drink-glass-refreshing-beverage-isolated-white-background-397770943.jpg" },
  { name: "Mocha Coffee", desc: "-", price: "$3.75", dot: "bg-blue-500", img: "https://img.freepik.com/premium-photo/white-mug-mocha-coffee-isolated-white-background-file-contains-with-clipping-path-so-easy-work_24076-673.jpg" },
  { name: "Cappuccino", desc: "-", price: "$4.25", dot: "bg-blue-500", img: "https://thumbs.dreamstime.com/b/coffee-cup-cappuccino-heart-foam-studio-isolated-white-background-cafe-drink-love-writing-foamy-beverage-art-276864062.jpg" },
  { name: "Dasani Water", desc: "500ml 100 btl", price: "$0.25", dot: "bg-blue-500", img: "https://www.shutterstock.com/image-photo/columbus-ohusa-september-032019-dasani-600nw-1511530136.jpg" },
  { name: "Dasani Water", desc: "10 case", price: "$5.8", dot: "bg-blue-500", img: "https://i.ebayimg.com/images/g/E9cAAeSwH8RonN9V/s-l400.jpg" },
  { name: "Dasani Water 1.5L", desc: "10 btl", price: "$0.5", dot: "bg-blue-500", img: "https://thumbor.asia-southeast1.aeon-my-prod.e.spresso.com/unsafe/fit-in/512x400/filters:quality(100):max_bytes(200000):fill(white)/https://catalog-assets-asia-southeast1.aeon-my-prod.e.spresso.com/c3RvcmFnZS5nb29nbGVhcGlzLmNvbQ==/YWVvbm1hbGF5c2lhLWJveGVkLXB1YmxpYw==/U3VwZXJtYXJrZXQ=/MzAzNDE2M18x.jpg" },
  { name: "Arabica Coffee Bean", desc: "3.5 kg", price: "$7.45", dot: "bg-yellow-500", img: "https://media.istockphoto.com/id/1298959169/photo/coffee-beans-in-a-bag-isolated-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=fUZf6XqV65UQdojh3_YfYcbhGYSYA9nrv1GN7-fWkM4=" },
  { name: "Sugar", desc: "20 kg", price: "$0.11", dot: "bg-yellow-500", img: "https://thumbs.dreamstime.com/b/sugar-sack-isolated-white-background-burlap-cube-jute-bag-243560281.jpg" },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {products.map((product) => (
        <div
          key={`${product.name}-${product.desc}`}
          className="bg-white rounded-3xl overflow-hidden hover:shadow-md transition-shadow border border-gray-100"
        >
          <div className="aspect-square bg-gray-50 p-6">
            {product.img ? (
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 rounded-2xl" />
            )}
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-gray-900 text-lg truncate">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{product.desc}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-2xl font-bold text-orange-600">{product.price}</span>
              <div className={`w-4 h-4 rounded-full ${product.dot}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}