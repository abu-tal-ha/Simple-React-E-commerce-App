import React, { useState, useEffect } from "react";
import productsData from "../data/products";
import { useCart } from "../context/CartContext";
import { FaExclamationTriangle, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiLoader } from "react-icons/fi";

function ProductCard() {
  const { cart, dispatch } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorIndex, setErrorIndex] = useState(null);
  const [searchkey, setSearchkey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 300);
  }, []);

  const handleAddToCart = (item, index) => {
    const isExist = cart.find((cartItem) => cartItem.id === item.id);
    if (isExist) {
      setErrorIndex(index);
      setTimeout(() => setErrorIndex(null), 1500);
    } else {
      dispatch({ type: "ADD", payload: item });
    }
  };

  const handleReset = () => {
    setSearchkey("");
    setFilterType("");
    setFilterPrice("");
    setSortOrder("");
  };

  const filteredProducts = products
    .filter((p) => p.title.toLowerCase().includes(searchkey.toLowerCase()))
    .filter((p) =>
      filterType
        ? (p.category || "").toLowerCase() === filterType.toLowerCase()
        : true
    )
    .filter((p) => (filterPrice ? p.price <= parseFloat(filterPrice) : true));

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low") return a.price - b.price;
    if (sortOrder === "high") return b.price - a.price;
    return 0;
  });

  const allCategories = [
    ...new Set(products.map((p) => p.category || "Uncategorized")),
  ];

  const allPrices = [
    ...new Set(products.map((p) => Math.ceil(p.price)).sort((a, b) => a - b)),
  ];

  return (
    <section className="text-gray-600 body-font mt-20 mb-8 min-h-[calc(100vh-306px)] ">
      <div className="container mx-auto px-4 mt-5">
        {/* Filter Section */}
        <div className="p-5 rounded-lg max-w-6xl m-auto bg-gray-100 drop-shadow-xl border border-gray-200">
          <input
            type="text"
            value={searchkey}
            onChange={(e) => setSearchkey(e.target.value)}
            placeholder="Search here"
            className="px-8 py-3 w-full rounded-md bg-white outline-0 text-sm"
          />
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium">Filters</p>
            <button
              onClick={handleReset}
              className="px-4 py-2 text-sm font-medium cursor-pointer rounded-md text-gray-800 hover:text-red-500"
            >
              Reset Filter
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-3 rounded-md text-sm bg-white"
            >
              <option value="">All Category</option>
              {allCategories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={filterPrice}
              onChange={(e) => setFilterPrice(e.target.value)}
              className="px-4 py-3 rounded-md text-sm bg-white"
            >
              <option value="">All Prices</option>
              {allPrices.map((price, i) => (
                <option key={i} value={price}>
                  ${price}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Header */}
        <div className="lg:w-full w-full mb-6 lg:mb-10 flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 mt-8  ">
              Our Latest Collection
            </h1>
            <div className="h-1 w-20 bg-pink-600 rounded"></div>
          </div>
          <div className="mt-8">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 rounded-md text-sm bg-white text-gray-800 shadow-sm"
            >
              <option value="">Sort by</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-10 flex flex-wrap -m-4">
          {loading ? (
            <div className="w-full grid place-items-center mt-20 mb-10">
              <FiLoader className="animate-spin text-blue-500 text-4xl" />
              {/* <FaSpinner className="animate-spin text-blue-500 text-4xl" /> */}
            </div>
          ) : sortedProducts.length === 0 ? (
            <p className="text-center text-red-500 w-full text-xl mt-10">
              No products found.
            </p>
          ) : (
            sortedProducts.map((item, index) => {
              const isInCart = cart.find((c) => c.id === item.id);
              return (
                <div key={index} className="p-4 md:w-1/4 drop-shadow-lg">
                  <div className="h-full border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow">
                    <Link to={`/product/${item.id}`}>
                      <img
                        className="rounded-2xl w-full h-64 sm:h-72 md:h-80 object-cover p-2 hover:scale-105 transition-transform duration-300"
                        src={item.image}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://dummyimage.com/720x400";
                        }}
                        alt={item.title}
                      />
                    </Link>
                    <div className="p-5 ">
                      <h2 className="tracking-widest text-xs font-medium  mb-1">
                        {item.description}
                      </h2>
                      <h1 className="text-lg font-medium mb-3  ">
                        {item.title}
                      </h1>
                      <p className="mb-4  ">${item.price}</p>
                      <div className="flex gap-2 items-center relative">
                        <button
                          onClick={() => handleAddToCart(item, index)}
                          className={`flex-1   py-2 rounded font-medium transition-all duration-300 ${
                            isInCart
                              ? "bg-gray-400 cursor-not-allowed"
                              : "btn btn-info hover:btn btn-outline btn-accent cursor-pointer"
                          }`}
                          disabled={isInCart}
                        >
                          {isInCart ? "Already in Cart" : "Add To Cart"}
                        </button>
                        <Link to={`/product/${item.id}`}>
                          <button className="px-4 py-2 rounded btn btn-info   text-white font-medium transition-all duration-300">
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
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
