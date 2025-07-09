import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { LuLinkedin } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-700">
      <div className="container mx-auto px-5 py-24">
        <div className="flex flex-wrap md:text-left text-center">
          {/* CATEGORIES */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-sm font-semibold mb-3">CATEGORIES</h2>
            <ul className="list-none space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Order
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Local For Vocal
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:underline">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-sm font-semibold mb-3">CUSTOMER SERVICE</h2>
            <ul className="list-none space-y-2">
              <li>
                <Link to="/returnpolicy" className="hover:underline">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-sm font-semibold mb-3">Services</h2>
            <ul className="list-none space-y-2">
              <li>
                <Link to="/privacypolicy" className="hover:underline">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* PAYMENT IMAGE */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <img
              src="https://ecommerce-sk.vercel.app/pay.png"
              alt="We Accept"
              className="w-full max-w-xs mx-auto"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-gray-200">
        <div className="container mx-auto px-5 py-4 flex flex-col sm:flex-row items-center">
          <Link to="/" className="text-black text-xl font-bold">
            Abu Talha
          </Link>
          <p className="text-sm text-gray-600 sm:ml-6 mt-2 sm:mt-0">
            © 2025 ecommerce —{" "}
            <a href="mailto:mabutalha468@gmail.com" className="hover:underline">
              mabutalha468@gmail.com
            </a>
          </p>
          <span className="inline-flex sm:ml-auto mt-2 sm:mt-0 space-x-3">
            <a
              href="https://www.facebook.com/md.abu.tal.ha.206"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/abu-tal-ha"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abu-talha-/"
              target="_blank"
              rel="noreferrer"
              className="  hover:text-blue-700"
            >
              <LuLinkedin className="w-5 h-5" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
