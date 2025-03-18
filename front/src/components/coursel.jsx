import { useState, useEffect } from "react";

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative w-[1400px] h-[550px] overflow-hidden mx-auto mb-[50px]">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute flex flex-col items-center justify-around w-full h-full bg-white shadow-xl rounded-2xl transition-opacity duration-1000 ${
            current === index ? "opacity-100 rotate-in" : "opacity-0 rotate-out"
          }`}
        >
          <img
            src={`https://placehold.co/300x300.png`}
            alt="Clothing Item"
            className="w-[90%] h-[250px] object-cover rounded-t-2xl"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Stylish Outfit</h2>
            <p className="text-lg text-gray-600 mt-2">Rs. {999 + index * 100}</p>
            <button className="mt-4 px-5 py-3 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg shadow-md hover:from-cyan-600 hover:to-blue-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
