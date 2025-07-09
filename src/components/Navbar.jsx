import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaOpencart } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full bg-base-100 text-black shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold">
          <Link to="/">
            <h1 className="text-2xl font-extrabold tracking-wide text-pink-600 drop-shadow-md uppercase">
              Shop<span className="text-gray-800">Zone</span>
            </h1>

            {/* <img
              src="/src/assets/images/logo.png"
              className="w-32 h-9 object-contain"
              alt="Logo"
            /> */}
          </Link>
        </div>
        <div className="space-x-6 flex items-center text-sm font-medium">
          <Link to="/" className="hover:text-pink-600 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-pink-600 transition">
            About
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-1 hover:text-pink-600 transition"
          >
            <FaOpencart className="w-6 h-5" />
            <span>{cart.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
