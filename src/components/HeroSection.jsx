import React, { useState, useEffect } from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function Filter() {
  const [searchkey, setSearchkey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [errorIndex, setErrorIndex] = useState(null);

  const { cart, dispatch } = useCart();

  const handleAddToCart = (item, index) => {
    const isExist = cart.find((cartItem) => cartItem.id === item.id);
    if (isExist) {
      setErrorIndex(index);
      setTimeout(() => setErrorIndex(null), 1500);
    } else {
      dispatch({ type: "ADD", payload: item });
    }
  };

  useEffect(() => {
    let updated = products;

    if (searchkey) {
      updated = updated.filter((item) =>
        item.title.toLowerCase().includes(searchkey.toLowerCase())
      );
    }

    if (filterType) {
      updated = updated.filter((item) => item.category === filterType);
    }

    if (filterPrice) {
      updated = updated.filter((item) => item.price.toString() === filterPrice);
    }

    setFilteredProducts(updated);
  }, [searchkey, filterType, filterPrice]);

  const handleReset = () => {
    setSearchkey("");
    setFilterType("");
    setFilterPrice("");
  };

  const categories = [...new Set(products.map((item) => item.category))];
  const prices = [...new Set(products.map((item) => item.price))];

  return (
    <div className="container mx-auto px-4 mt-20">
      {/* Filter Options */}
      <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200">
        <input
          type="text"
          placeholder="Search here"
          className="px-8 py-3 w-full rounded-md border outline-0 text-sm bg-white text-black"
          value={searchkey}
          onChange={(e) => setSearchkey(e.target.value)}
        />
        <div className="flex items-center justify-between mt-4">
          <p className="font-medium">Filters</p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
          >
            Reset Filter
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-3 w-full rounded-md bg-white border outline-0 text-sm"
          >
            <option value="">All Category</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            className="px-4 py-3 w-full rounded-md bg-white border outline-0 text-sm"
          >
            <option value="">All Prices</option>
            {prices.map((price, i) => (
              <option key={i} value={price}>
                ${price}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filtered Product Cards */}
      <div className="mt-10">
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-600 py-10 text-lg font-semibold">
            No products found.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item, index) => {
              const isInCart = cart.find((c) => c.id === item.id);
              return (
                <div key={index} className="p-4 md:w-full drop-shadow-lg">
                  <div className="h-full border-2 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                    <div className="flex justify-center cursor-pointer">
                      <Link to={`/product/${item.id}`}>
                        <img
                          className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-transform duration-300 ease-in-out"
                          src={item.image}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://dummyimage.com/720x400";
                          }}
                          alt={item.title}
                        />
                      </Link>
                    </div>
                    <div className="p-5 border-t-2">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {item.description}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {item.title}
                      </h1>
                      <p className="mb-4">${item.price}</p>
                      <div className="flex gap-2 items-center relative">
                        <button
                          onClick={() => handleAddToCart(item, index)}
                          className={`flex-1 text-white py-2 rounded font-medium transition-all duration-300 ${
                            isInCart
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-red-600 hover:bg-pink-700 cursor-pointer"
                          }`}
                          disabled={isInCart}
                        >
                          {isInCart ? "Already in Cart" : "Add To Cart"}
                        </button>
                        <Link to={`/product/${item.id}`}>
                          <button className="px-4 py-2 rounded cursor-pointer bg-gray-800 hover:bg-black text-white font-medium transition-all duration-300">
                            View Details
                          </button>
                        </Link>
                        {errorIndex === index && (
                          <FaExclamationTriangle
                            className="text-red-600 absolute right-3 -top-6 animate-bounce"
                            title="Already added"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
