import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { collectionProducts } from "../data/collectionProducts";
import { Heart, ShoppingCart, Eye, Check } from "lucide-react";
import { Link } from "react-router-dom";

const CollectionPage = () => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [addedProductId, setAddedProductId] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 2000);
  };

  return (
    <div className="collectionPage">
      {/* 1. Hero / Page Banner Section */}
      <section className="collectionHero">
        <div className="collectionHeroInner">
          <h1 className="collectionHeroTitle">Collection</h1>
          <nav className="collectionBreadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span className="current">Collection</span>
          </nav>
        </div>
      </section>

      <section className="collectionMainSection">
        <div className="collectionContainer">
          {/* Top Bar */}
          <div className="collectionTopBar">
            <div className="collectionTopLeft">
              <p>Showing 1–12 of 48 Results</p>
            </div>
            <div className="collectionTopRight">
              <select className="collectionSortSelect" defaultValue="default">
                <option value="default">Latest</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Average Rating</option>
                <option value="price-low">Low to High</option>
                <option value="price-high">High to Low</option>
              </select>
            </div>
          </div>

          {/* Centered Product Grid (4 columns) */}
          <div className="collectionGrid">
            {collectionProducts.map((product) => (
              <div key={product.id} className="homeTrendingCard group">
                <div className="homeTrendingImageContainer">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="homeTrendingImage group-hover:scale-105 transition duration-500"
                    />
                  </Link>

                  {/* Badge */}
                  {product.badge && (
                    <div className="collectionBadge">
                      {product.badge}
                    </div>
                  )}

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
                  <p className="collectionProductPrice">₹{product.price}</p>
                  
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

          {/* Pagination */}
          <div className="collectionPagination">
            <button className="pageBtn active">1</button>
            <button className="pageBtn">2</button>
            <button className="pageBtn">3</button>
            <button className="pageBtn next">Next</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionPage;
