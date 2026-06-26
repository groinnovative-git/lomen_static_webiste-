import React, { useState } from "react";
import { Heart, ShoppingCart, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

const ProductCard = () => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [addedProductId, setAddedProductId] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product, 1, "M");
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 2000);
  };

  return (
    <div className="productsContainer">
      <div className="sectionHeader">
        <h2 className="sectionTitle">Featured Products</h2>
        <p className="sectionSubtitle">
          Discover our handpicked collection of premium menswear
        </p>
      </div>

      <div className="productsGrid">
        {products.map((product) => (
          <div key={product.id} className="productCard group">
            <div className="productImageContainer">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="productImage group-hover:scale-105 transition duration-500"
                />
              </Link>

              {/* Wishlist Button */}
              <button
                className={`wishlistButton ${
                  isInWishlist(product.id) ? "active" : ""
                }`}
                onClick={() => toggleWishlist(product)}
                aria-label="Add to wishlist"
              >
                <Heart
                  className="wishlistIcon"
                  size={20}
                  fill={isInWishlist(product.id) ? "#ff4757" : "none"}
                  color={isInWishlist(product.id) ? "#ff4757" : "var(--font-color-primary)"}
                />
              </button>

              <div className="categoryBadge">{product.category}</div>
            </div>

            <div className="productInfo">
              <Link to={`/product/${product.id}`} className="hover:text-amber-600 transition">
                <h3 className="productName font-semibold truncate">{product.name}</h3>
              </Link>
              <div className="productFooter">
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`addToCartBtn flex items-center justify-center transition-colors duration-300 ${
                    addedProductId === product.id ? "bg-emerald-600 text-white" : ""
                  }`}
                  aria-label="Add to cart"
                >
                  {addedProductId === product.id ? (
                    <Check size={18} />
                  ) : (
                    <ShoppingCart size={18} />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
