import React from "react";
import { useCart } from "../context/CartContext";
import { Trash2, ShoppingCart, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const { wishlistItems, toggleWishlist, addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="bg-white min-h-[70vh] flex items-center justify-center py-20 px-6">
        <div className="text-center max-w-sm mx-auto">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-500 mx-auto mb-6">
            <Heart size={28} />
          </div>
          <h2 className="text-2xl font-normal text-gray-900 mb-3">Your Wishlist is Empty</h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Save items you like here to purchase them later. Discover bespoke styles tailored to your taste.
          </p>
          <Link
            to="/product"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0e0906] hover:bg-neutral-800 text-white rounded-full font-semibold transition w-full"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-light text-gray-900 mb-12">
          Your Favorite <span className="font-semibold">Designs</span>
        </h1>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col h-full bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                  />
                </Link>

                {/* Remove button */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-4 right-4 w-9 h-9 bg-white hover:bg-red-50 rounded-full flex items-center justify-center shadow-sm text-red-500 transition"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 size={16} />
                </button>

                <div className="absolute bottom-4 left-4 bg-[#0e0906]/85 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded">
                  {product.category}
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <Link to={`/product/${product.id}`} className="hover:text-amber-600 transition">
                    <h3 className="font-semibold text-gray-900 text-base mb-1 line-clamp-1">{product.name}</h3>
                  </Link>
                </div>

                <div className="flex justify-end items-center mt-4 pt-4 border-t border-gray-50">
                  <button
                    onClick={() => {
                      addToCart(product, 1, "M");
                      // Optionally remove from wishlist once added to cart
                      toggleWishlist(product);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#0e0906] hover:bg-neutral-800 text-white rounded-full text-xs font-semibold uppercase tracking-wider transition"
                    title="Add to Cart"
                  >
                    Add <ShoppingCart size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
