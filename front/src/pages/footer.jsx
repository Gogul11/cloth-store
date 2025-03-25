import { useNavigate } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate()

    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-500">Trendy Trends</h2>
            <p className="text-sm mt-2 text-gray-400">
              Your go-to fashion destination for stylish and affordable clothing.
            </p>
          </div>
  
          <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold">Shop</h3>
              <ul className="text-gray-400 mt-2">
                <li><a href="#" className="hover:text-blue-500">Men</a></li>
                <li><a href="#" className="hover:text-blue-500">Women</a></li>
                <li><a href="#" className="hover:text-blue-500">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Customer Service</h3>
              <ul className="text-gray-400 mt-2">
                <li><p href="#" className="hover:text-blue-500">FAQ</p></li>
                <li><p  onClick={() => navigate('/purchase')} className="hover:text-blue-500">Purchase</p></li>
                <li><p onClick={() => navigate('/about')} className="hover:text-blue-500">About</p></li>
              </ul>
            </div>
          </div>
  
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-end gap-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>
        </div>
  
        <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Trendy Trends. All Rights Reserved.
        </div>
      </footer>
    );
  }
  