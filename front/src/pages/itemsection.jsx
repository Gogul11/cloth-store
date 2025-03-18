import { useState } from "react";
import { Menu, X, Search, ShoppingCart, User, Star } from "lucide-react";
import NavBar from "../components/navbar";

const categories = ["Men", "Women", "Kids", "Footwear", "Accessories", "Sale"];
const products = [
  {
    id: 1,
    name: "Casual Shirt",
    price: "$30",
    rating: 4.5,
    image: "https://source.unsplash.com/400x400/?shirt",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: "$60",
    rating: 4.7,
    image: "https://source.unsplash.com/400x400/?jacket",
  },
  {
    id: 3,
    name: "Sneakers",
    price: "$50",
    rating: 4.3,
    image: "https://source.unsplash.com/400x400/?shoes",
  },
  {
    id: 4,
    name: "Elegant Dress",
    price: "$90",
    rating: 4.8,
    image: "https://source.unsplash.com/400x400/?dress",
  },
];

export default function AjioClone() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen m-3">
       <div className="flex justify-center m-3">
               <NavBar />
             </div>
      <nav className="flex items-center justify-between px-4 py-4 shadow-md bg-white md:px-8">
        <div className="hidden md:flex items-center gap-4">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search for products"
              className="px-4 py-2 w-full border rounded-lg focus:outline-none"
            />
            <Search className="absolute top-2 right-3 text-gray-600" />
          </div>
          <User className="text-gray-700 cursor-pointer" />
          <ShoppingCart className="text-gray-700 cursor-pointer" />
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-100 py-4">
          <input
            type="text"
            placeholder="Search for products"
            className="px-4 py-2 w-4/5 border rounded-lg focus:outline-none mb-4"
          />
          <div className="flex gap-4">
            <User className="text-gray-700 cursor-pointer" />
            <ShoppingCart className="text-gray-700 cursor-pointer" />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative w-full h-52 md:h-80 bg-gray-200 flex items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white bg-black px-6 py-3 rounded-lg">
          Flat 50% Off – Shop Now!
        </h2>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 my-6 px-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-3 py-2 text-sm md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-52 md:h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <div className="flex items-center mt-2">
                <p className="text-gray-700 font-bold">{product.price}</p>
                <div className="flex items-center ml-auto text-yellow-500">
                  <Star size={16} />
                  <span className="ml-1 text-gray-700">{product.rating}</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
