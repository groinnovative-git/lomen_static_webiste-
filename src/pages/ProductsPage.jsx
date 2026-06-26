import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { Heart, ShoppingCart, Star, SlidersHorizontal, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // Filtering
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "All") return true;
    return product.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0; // default
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-[#0e0906] text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="relative max-w-xl mx-auto z-10">
          <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
            The <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Entire Collection</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-light">
            Explore our complete collection of shirts, t-shirts, and pants engineered for fit, durability, and character.
          </p>
        </div>
      </section>

      {/* Main Products Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Latest Arrivals
          </h2>
          <span className="text-sm text-gray-500 font-medium">
            Showing all {sortedProducts.length} items
          </span>
        </div>

        {/* Dynamic Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <div key={product.id} className="group flex flex-col h-full bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                  />
                </Link>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-4 right-4 w-9 h-9 bg-white hover:bg-neutral-50 rounded-full flex items-center justify-center shadow-sm text-gray-800 transition"
                  aria-label="Add to wishlist"
                >
                  <Heart
                    size={18}
                    className="transition-colors duration-200"
                    fill={isInWishlist(product.id) ? "#ff4757" : "none"}
                    color={isInWishlist(product.id) ? "#ff4757" : "currentColor"}
                  />
                </button>

                <div className="absolute bottom-4 left-4 bg-[#0e0906]/85 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded">
                  {product.category}
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-amber-500">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={12}
                          fill={s <= Math.floor(product.rating) ? "currentColor" : "none"}
                          className="currentColor"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400">({product.reviewsCount})</span>
                  </div>
                  <Link to={`/product/${product.id}`} className="hover:text-amber-600 transition">
                    <h3 className="font-semibold text-gray-900 text-base mb-1 line-clamp-1">{product.name}</h3>
                  </Link>
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-50">
                  <a
                    href="https://mybillbook.in/store/lomen_fashion_club"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="homeTrendingQuickViewBtn"
                  >
                    <Eye size={16} />
                    <span>Quick View</span>
                  </a>
                  <a
                    href="https://mybillbook.in/store/lomen_fashion_club"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#0e0906] hover:bg-neutral-800 text-white rounded-full flex items-center justify-center shadow-sm transition"
                    title="Add to Cart"
                  >
                    <ShoppingCart size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
