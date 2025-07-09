import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="min-h-[calc(100vh-306px)]">
      <Navbar />
      {/* <HeroSection /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
