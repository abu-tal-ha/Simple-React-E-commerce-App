import { useParams } from "react-router-dom";
import products from "../data/products";
import { Helmet } from "react-helmet";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import {
  FaStar,
  FaRegStarHalfStroke,
  FaHeartCircleCheck,
} from "react-icons/fa6";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const { cart, dispatch } = useCart();
  const [error, setError] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const product = products.find((p) => p.id.toString() === id);
  if (!product) return <p>Product not found</p>;

  // Load like status from localStorage
  useEffect(() => {
    const likedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || {};
    if (likedProducts[id]?.liked) {
      setLiked(true);
      setLikes(likedProducts[id].likes || 1);
    }
  }, [id]);

  const handleAddToCart = () => {
    const isExist = cart.find((item) => item.id === product.id);
    if (isExist) {
      setError(true);
      setTimeout(() => setError(false), 1500);
    } else {
      dispatch({ type: "ADD", payload: product });
    }
  };

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikes(1);
      const likedProducts =
        JSON.parse(localStorage.getItem("likedProducts")) || {};
      likedProducts[id] = {
        liked: true,
        likes: 1, // Future: You can increase if multiple users supported
      };
      localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
    }
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden mt-12">
      <div className="container px-5 py-20 mx-auto">
        <Helmet>
          <title>{product.title} || Details</title>
        </Helmet>

        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.title}
            src={
              product.image ||
              "https://via.placeholder.com/380x350?text=No+Image"
            }
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/380x350?text=No+Image";
            }}
            className="w-[380px] h-[350px] object-cover object-center rounded-lg shadow-md mx-auto"
          />

          {/* <img
            alt={product.title}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded "
            src={product.image}
          /> */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>

            <div className="flex mb-4">
              <span className="flex items-center text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
                <span className="text-gray-600 ml-2">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                <a
                  href="https://www.facebook.com/md.abu.tal.ha.206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abu-talha-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500"
                >
                  <RiLinkedinFill className="w-5 h-5" />
                </a>
              </span>
            </div>

            <p className="leading-relaxed border-b-2 mb-5 pb-5">
              {product.description}
            </p>

            <div className="flex items-center">
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xl font-semibold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm line-through ml-8 text-gray-500">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="text-xs bg-red-400 text-white p-2 ml-12 py-0.5 rounded">
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  % OFF
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                className={`ml-auto text-white ${
                  error
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-500 hover:bg-indigo-600 cursor-pointer"
                } border-0 py-2 px-6 rounded transition`}
                disabled={error}
              >
                {error ? "Already Added" : "Add To Cart"}
              </button>

              <button
                onClick={handleLike}
                disabled={liked}
                className={`ml-4 rounded-full cursor-pointer w-10 h-10 ${
                  liked ? "bg-red-100" : "bg-gray-200"
                } inline-flex items-center justify-center text-gray-500`}
                title={liked ? "You liked this" : "Click to like"}
              >
                {liked ? (
                  <FaHeartCircleCheck className="w-5 h-5 cursor-not-allowed text-red-500" />
                ) : (
                  <IoMdHeartEmpty className="w-5 h-5" />
                )}
              </button>
              <span className="ml-2 text-sm text-gray-500">{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
