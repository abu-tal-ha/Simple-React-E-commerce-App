import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaOpencart } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-base-100 text-black shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl">
          <h1 className="font-extrabold tracking-wide text-pink-600 drop-shadow-md uppercase">
            Shop<span className="text-gray-800">Zone</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center text-sm font-medium">
          <Link to="/" className="hover:text-pink-600 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-pink-600 transition">
            About
          </Link>
        </div>

        {/* Cart & Menu Button */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <Link
            to="/cart"
            className="flex items-center gap-1 hover:text-pink-600 transition"
          >
            <FaOpencart className="w-6 h-5" />
            <span>{cart.length}</span>
          </Link>

          {/* Toggle Menu Icon */}
          <button
            className="md:hidden text-2xl focus:outline-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoMdClose /> : <CiMenuFries />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-40 rounded-b-xl animate-slideDown">
          <div className="flex flex-col text-center py-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-lg font-medium hover:text-pink-600 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-lg font-medium hover:text-pink-600 transition"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
