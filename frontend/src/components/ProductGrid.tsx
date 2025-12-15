'use client'
const products = [
  { name: "Coca Cola 330ml", desc: "12 can", price: "$0.25", type: "info", img: "https://www.shutterstock.com/image-photo/tbilisi-georgia-may-29-2024-600nw-2468450965.jpg" },
  { name: "Cambodia beer 330ml", desc: "12 can", price: "$0.25", type: "info", img: "https://media.makrocambodiaclick.com/PRODUCT_1736835908276.png" },
  { name: "Sirloin Beef", desc: "7 kg", price: "$11.5", type: "warning", img: "https://img.freepik.com/premium-photo/fresh-raw-sirloin-beef-meat-steak-isolated-white-background_89816-46033.jpg" },
  { name: "Beef Meat Kilo", desc: "8 kg", price: "$10.25", type: "warning", img: "https://www.shutterstock.com/image-photo/raw-silverside-round-beef-meat-600nw-2628066115.jpg" },
  { name: "Sourdough bread", desc: "-", price: "$2.25", type: "info", img: "https://media.istockphoto.com/id/184591239/photo/loaf-of-bread.jpg?s=612x612&w=0&k=20&c=L9VDtW-19nsB984-JkZVzEQ2e3RD3Eb6K42uVi5NNPs=" },
  { name: "Beef Meat Pack", desc: "4 packs", price: "$4.5", type: "success", img: "https://media.istockphoto.com/id/1296074559/photo/a-large-fresh-piece-of-meat-in-a-vacuum-sealed-package-isolated-on-a-white-background.jpg?s=612x612&w=is&k=20&c=gmqZT9eFO9y5F1DHFtNf1EBjAj8MOFBBZ2arSbt4UXQ=" },
  { name: "Banana (Kg)", desc: "6.5 kg", price: "$4.5", type: "info", img: "https://images.pexels.com/photos/7472115/pexels-photo-7472115.jpeg" },
  { name: "Cheesecake", desc: "10", price: "$4.5", type: "info", img: "https://www.favfamilyrecipes.com/wp-content/uploads/2022/10/Slice-of-Cheesecake-with-fruit-for-How-to-Make-a-Cheesecake.jpg" },
  { name: "Yellow Mango", desc: "20 kg", price: "$0.11", type: "info", img: "https://img.freepik.com/premium-photo/ripe-yellow-mango-with-cut-half-green-leaf-isolated-white-background_252965-516.jpg" },
  { name: "Kirisu milk", desc: "10 piece", price: "$4.5", type: "info", img: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=731723916397269" },
  { name: "Angkor milk", desc: "0 piece", price: "$3.5", type: "info", img: "https://angkormilk.com.kh/wp-content/uploads/2024/11/5Slide-UHT.jpg" },
  { name: "Banana", desc: "0 pc", price: "$1.25", type: "info", img: "https://t3.ftcdn.net/jpg/03/03/66/56/360_F_303665638_AvUUcS4St4a3zcqA4FoW0tCDyyo5RwYR.jpg" },
  { name: "Iced Latte", desc: "-", price: "$3.99", type: "info", img: "https://media.istockphoto.com/id/2183431659/photo/latte-ice-coffee-put-on-white-background-with-isolated-photo-style-serving-with-milk-topping.jpg?s=612x612&w=0&k=20&c=RhqRVQ6-QjSFSO52AUwKvwgkYzNU9i2c_drmxLX6Q4w=" },
  { name: "Mocha Coffee", desc: "-", price: "$3.75", type: "info", img: "https://www.shutterstock.com/image-photo/hot-mocha-latte-isolated-on-260nw-330865577.jpg" },
  { name: "Capuchino", desc: "-", price: "$4.25", type: "info", img: "https://thumbs.dreamstime.com/b/top-view-cappuccino-coffee-latte-art-top-white-paper-mug-high-quality-foam-white-background-best-commercial-178362792.jpg" },
  { name: "Dasani Water 500ml", desc: "100 btl", price: "$0.25", type: "info", img: "https://www.shutterstock.com/image-photo/columbus-ohusa-september-032019-dasani-600nw-1511530136.jpg" },
  { name: "Dasani Water", desc: "10 case", price: "$5.8", type: "info", img: "https://www.kroger.com/product/images/large/front/0000000064891" },
  { name: "Dasani Water 1.5L", desc: "10 btl", price: "$0.5", type: "info", img: "https://umart.store/cdn/shop/products/Dasani_1.5l_3e4296bd-24f4-47db-a347-438fb20080de_1200x.png?v=1644315772" },
  { name: "Arabica Coffee Bean", desc: "3.5 kg", price: "$7.45", type: "warning", img: "https://media.istockphoto.com/id/1298959169/photo/coffee-beans-in-a-bag-isolated-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c fUZf6XqV65UQdojh3_YfYcbhGYSYA9nrv1GN7-fWkM4=" },
  { name: "Sugar", desc: "20 kg", price: "$0.11", type: "warning", img: "https://media.istockphoto.com/id/1388140522/photo/sugar-in-a-sack-isolated-on-a-white-background-white-sugar-in-burlap-sack-cube-sugar-in-jute.jpg?s=612x612&w=0&k=20&c=oPN35scbePjsOHVhGM2Z2xjmYGeT4voypoLHQXfdG7Y=" },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {products.map((product) => (
        <div
          key={product.name}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img src={product.img} alt={product.name} className="w-full h-32 object-cover" />
          <div className="p-3">
            <h4 className="font-medium text-sm line-clamp-2">{product.name}</h4>
            <p className="text-xs text-gray-500 mt-1">{product.desc}</p>
            <div className="flex items-center gap-2 mt-2">
              <p className={`text-lg font-bold ${product.type === 'info' ? 'text-blue-600' : product.type === 'warning' ? 'text-yellow-600' : 'text-green-600'}`}>
                {product.price}
              </p>
              <div className={`w-4 h-4 rounded-full ${product.type === 'info' ? 'bg-blue-500' : product.type === 'warning' ? 'bg-yellow-500' : 'bg-green-500'}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}