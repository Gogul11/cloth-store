import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const [log, setLog] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", route: "/" },
    { name: "Purchase", route: "/purchase" },
    { name: "About", route: "/about" },
  ];

  const navClass =
    "text-white font-medium px-4 py-2 rounded-md hover:text-blue-400 transition-all duration-300";

  return (
    <nav className="w-full bg-black/70 backdrop-blur-md shadow-lg border-b border-white/10">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        {/* Brand / Logo */}
        <div className="text-white text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
          MyApp
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <p key={item.name} className={navClass} onClick={() => navigate(item.route)}>
              {item.name}
            </p>
          ))}
          {log ? (
            <p className={`${navClass} hover:text-green-400`}>Profile</p>
          ) : (
            <p className={`${navClass} hover:text-yellow-400`} onClick={() => navigate("/login")}>
              Login
            </p>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-black/90">
          {navItems.map((item) => (
            <p key={item.name} className={navClass} onClick={() => {
              navigate(item.route);
              setMenuOpen(false);
            }}>
              {item.name}
            </p>
          ))}
          {log ? (
            <p className={`${navClass} hover:text-green-400`} onClick={() => setMenuOpen(false)}>
              Profile
            </p>
          ) : (
            <p className={`${navClass} hover:text-yellow-400`} onClick={() => {
              navigate("/login");
              setMenuOpen(false);
            }}>
              Login
            </p>
          )}
        </div>
      )}
    </nav>
  );
}
