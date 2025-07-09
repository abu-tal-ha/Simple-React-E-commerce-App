import React from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaShippingFast,
  FaHeadset,
  FaTags,
} from "react-icons/fa";

const About = () => {
  return (
    <section className=" min-h-[calc(100vh-306px)]  bg-gray-200">
      <div className="bg-white mt-22 mb-8 text-gray-800 py-12 px-6  max-w-7xl mx-auto rounded-lg shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About Our Store
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Welcome to{" "}
          <span className="text-pink-600 font-semibold">ShopZone</span> — your
          one-stop destination for high-quality products at unbeatable prices.
          From fashion to electronics, we bring you a seamless shopping
          experience.
        </p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-12">
          <div>
            <FaShoppingCart className="text-pink-600 text-4xl mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-1">Wide Product Range</h3>
            <p className="text-sm text-gray-600">
              Explore electronics, fashion, home goods & more.
            </p>
          </div>
          <div>
            <FaShippingFast className="text-pink-600 text-4xl mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-1">Fast Delivery</h3>
            <p className="text-sm text-gray-600">
              Get your order delivered within 2-5 business days.
            </p>
          </div>
          <div>
            <FaHeadset className="text-pink-600 text-4xl mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
            <p className="text-sm text-gray-600">
              We’re always here to help you with your queries.
            </p>
          </div>
          <div>
            <FaTags className="text-pink-600 text-4xl mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-1">Best Deals</h3>
            <p className="text-sm text-gray-600">
              Enjoy regular offers, discounts, and seasonal sales.
            </p>
          </div>
        </div>

        {/* Why Us */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We’re dedicated to offering you the best shopping experience online.
            Our intuitive UI, secure payment system, customer-first approach,
            and premium product lineup make us stand out.
          </p>
        </div>

        <div className="text-center">
          <Link to="/">
            <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white cursor-pointer font-semibold rounded shadow transition">
              🛍 Explore Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
