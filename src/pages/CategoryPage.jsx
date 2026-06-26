import React from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryPage = ({ categoryTitle, categoryName }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  // Filter products by category
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  const getHeaderImage = () => {
    switch (categoryName.toLowerCase()) {
      case "shirts":
        return "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=1200&q=80";
      case "t-shirts":
        return "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80";
      case "pants":
        return "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1200&q=80";
      default:
        return "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80";
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Category Banner */}
      <section className="relative h-[250px] md:h-[350px] bg-[#0e0906] flex items-center justify-center text-center overflow-hidden">
        {/* Category specific background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={getHeaderImage()}
            alt={categoryTitle}
            className="w-full h-full object-cover opacity-30 object-center"
          />
        </div>
        <div className="relative z-10 max-w-xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            Premium <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">{categoryTitle}</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-light">
            Explore our curated collections of {categoryTitle.toLowerCase()} designed with precision tailoring.
          </p>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex justify-between items-center mb-10 pb-4 border-b border-gray-100">
          <p className="text-gray-500 text-sm">{filteredProducts.length} premium designs found</p>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0e0906]">
            LoMen Exclusive Collection
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
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

                <div className="flex justify-end items-center mt-4 pt-4 border-t border-gray-50">
                  <button
                    onClick={() => addToCart(product, 1, "M")}
                    className="w-10 h-10 bg-[#0e0906] hover:bg-neutral-800 text-white rounded-full flex items-center justify-center shadow-sm transition"
                    title="Add to Cart"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
