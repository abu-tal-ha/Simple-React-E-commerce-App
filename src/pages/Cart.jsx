import React from "react";
import { useCart } from "../context/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md mt-20 mb-8 min-h-[calc(100vh-306px)]">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
        Cart Items
      </h1>
      <Helmet>
        <title>my || Cart</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* 🛒 Left Side: Cart Items */}
        <div className="flex-1 overflow-x-auto">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <table className="min-w-full text-sm text-left border">
              <thead className="bg-gray-100 text-gray-700 font-medium border-b">
                <tr>
                  <th className="p-4">Image</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <img
                        src={
                          item.image
                            ? item.image
                            : "https://via.placeholder.com/100"
                        }
                        alt={item.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/100";
                        }}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="p-4">
                      <p className="text-base font-medium text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>
                    </td>
                    <td className="p-4 text-black">${item.price.toFixed(2)}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2 text-orange-500">
                        <button
                          onClick={() => dispatch({ type: "DECREASE", index })}
                          className="hover:text-orange-600 cursor-pointer border rounded-full p-1"
                        >
                          <FaMinus />
                        </button>
                        <span className="text-black font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => dispatch({ type: "INCREASE", index })}
                          className="hover:text-orange-600 cursor-pointer border rounded-full p-1"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    <td className="p-4 text-black">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => dispatch({ type: "REMOVE", index })}
                        className="text-orange-500 hover:text-red-600 text-xl cursor-pointer"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* 💵 Right Side: Total Section */}
        <div className="w-full lg:w-[300px] p-4 border rounded-lg shadow-md h-fit">
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-900 font-medium">
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Shipping</span>
              <span className="text-gray-900 font-medium">$100</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span className="text-green-700">Total:</span>
              <span className="text-green-700">
                ${(total + 100).toFixed(2)}
              </span>
            </div>
            <button className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
