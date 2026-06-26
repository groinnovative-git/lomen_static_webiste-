import React, { useState } from "react";
import { Heart, ShoppingCart, Eye, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const trendingProducts = [
  {
    id: 101,
    name: "Urban Denim Jacket",
    category: "Jackets",
    price: 129.99,
    originalPrice: 179.99,
    discount: 28,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
  },
  {
    id: 102,
    name: "Classic Slim Fit Jeans",
    category: "Jeans",
    price: 79.99,
    originalPrice: 109.99,
    discount: 27,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
  },
  {
    id: 103,
    name: "Oversized Streetwear T-Shirt",
    category: "T-Shirts",
    price: 44.99,
    originalPrice: 64.99,
    discount: 31,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
  },
  {
    id: 104,
    name: "Premium Cotton Shirt",
    category: "Shirts",
    price: 89.99,
    originalPrice: 129.99,
    discount: 31,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
  },
  {
    id: 105,
    name: "Casual Bomber Jacket",
    category: "Jackets",
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
  },
  {
    id: 106,
    name: "Tailored Black Blazer",
    category: "Blazers",
    price: 199.99,
    originalPrice: 279.99,
    discount: 29,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
  },
  {
    id: 107,
    name: "Relaxed Fit Shorts",
    category: "Shorts",
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80",
  },
  {
    id: 108,
    name: "Minimal Hoodie",
    category: "Hoodies",
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
  },
];

const TrendingSection = () => {
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
    <section className="homeTrendingSection">
      <div className="homeTrendingSectionInner">
        <div className="sectionHeader">
          <h2 className="sectionTitle">What's Trending Now</h2>
          <p className="sectionSubtitle">
            Discover the most loved styles picked for modern men.
          </p>
        </div>

        <div className="homeTrendingGrid">
          {trendingProducts.map((product) => (
            <div key={product.id} className="homeTrendingCard group">
              <div className="homeTrendingImageContainer">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="homeTrendingImage group-hover:scale-105 transition duration-500"
                  />
                </Link>

                {/* Discount Badge */}
                <div className="homeTrendingDiscount">
                  -{product.discount}%
                </div>

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
                    color={
                      isInWishlist(product.id)
                        ? "#ff4757"
                        : "var(--font-color-primary)"
                    }
                  />
                </button>

                <div className="categoryBadge">{product.category}</div>
              </div>

              <div className="homeTrendingInfo">
                <Link
                  to={`/product/${product.id}`}
                  className="homeTrendingNameLink"
                >
                  <h3 className="productName font-semibold truncate">
                    {product.name}
                  </h3>
                </Link>
                <div className="homeTrendingFooter">
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
                    className="addToCartBtn flex items-center justify-center transition-colors duration-300"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
