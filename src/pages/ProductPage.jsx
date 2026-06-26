import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/products';
import { Heart, ShoppingCart, Star, Minus, Plus, Check, ArrowLeft } from 'lucide-react';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  
  // Find product by id or default to product id 1
  const product = getProductById(id) || getProductById(1);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Excellent quality! The fabric feels premium and the fit is perfect. Highly recommend!",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Michael Smith",
      rating: 4,
      comment: "Great item, fits well. The color is exactly as shown in the pictures.",
      date: "1 week ago"
    }
  ]);

  // Reset states when product changes
  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
    if (product && product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link to="/product" className="inline-flex items-center text-sm font-semibold text-[#0e0906] hover:underline">
            <ArrowLeft className="mr-2" size={16} /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleReviewSubmit = () => {
    if (rating > 0 && reviewText.trim()) {
      const newReview = {
        id: reviews.length + 1,
        name: "Anonymous User",
        rating: rating,
        comment: reviewText,
        date: "Just now"
      };
      setReviews([newReview, ...reviews]);
      setRating(0);
      setReviewText('');
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
    }, 3000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb / Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <Link to="/product" className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-black transition">
          <ArrowLeft className="mr-2" size={14} /> Back to entire collection
        </Link>
      </div>

      <div className="productPageContainer py-8">
        <div className="productRow">
          {/* Images Section */}
          <div className="productImagesSection">
            <div className="thumbnailImages">
              {product.images?.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnailItem ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.name} thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="mainImageContainer">
              <img src={product.images?.[selectedImage] || product.image} alt={product.name} className="mainImage" />
              <button
                className={`wishlistBadge ${isInWishlist(product.id) ? 'active' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label="Toggle wishlist"
              >
                <Heart size={22} fill={isInWishlist(product.id) ? "#ff4757" : "none"} color={isInWishlist(product.id) ? "#ff4757" : "currentColor"} />
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div className="productDetailsSection">
            <div className="productCategory">{product.category}</div>
            <h1 className="productTitle">{product.name}</h1>

            <div className="ratingSection">
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className="star"
                    fill={star <= Math.floor(product.rating) ? '#fbbf24' : 'none'}
                    color={star <= Math.floor(product.rating) ? '#fbbf24' : '#ccc'}
                  />
                ))}
              </div>
              <span className="ratingText">({product.reviewsCount || 100} reviews)</span>
            </div>

            <p className="productDescription">{product.description}</p>

            <div className="featuresSection">
              <h3 className="featuresTitle">Key Features</h3>
              <ul className="featuresList">
                {product.features?.map((feature, index) => (
                  <li key={index} className="featureItem">
                    <Check size={18} className="featureIcon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selector */}
            <div className="sizeSection">
              <div className="sizeLabel">Select Size</div>
              <div className="sizeOptions">
                {product.sizes?.map((size) => (
                  <button
                    key={size}
                    className={`sizeButton ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="quantitySection">
              <div className="quantityLabel">Quantity</div>
              <div className="quantityControl">
                <button className="quantityButton" onClick={() => handleQuantityChange('decrease')}>
                  <Minus size={18} />
                </button>
                <span className="quantityValue">{quantity}</span>
                <button className="quantityButton" onClick={() => handleQuantityChange('increase')}>
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="actionButtons">
              <button onClick={handleAddToCart} className="addToCartButton w-full">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>

            {successMsg && (
              <div className="mt-4 p-4 bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold rounded-xl flex items-center gap-2">
                <Check size={16} /> Added {quantity} x {product.name} (Size {selectedSize}) to cart!
              </div>
            )}

            {product.inStock && (
              <div className="stockStatus">
                <Check size={18} />
                <span>In Stock - Ships within 2-3 days</span>
              </div>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="reviewsSection">
          <h2 className="reviewsTitle">Customer Reviews</h2>

          <div className="reviewForm">
            <h3 className="reviewFormTitle">Write a Review</h3>
            
            <div className="ratingInput">
              <label className="ratingInputLabel">Your Rating</label>
              <div className="starRating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`starButton ${star <= rating ? 'filled' : ''}`}
                    onClick={() => setRating(star)}
                  >
                    <Star size={28} />
                  </button>
                ))}
              </div>
            </div>

            <textarea
              className="reviewTextarea"
              placeholder="Share your thoughts about this product..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />

            <button type="button" className="submitReviewButton" onClick={handleReviewSubmit}>
              Submit Review
            </button>
          </div>

          <div className="reviewsList">
            {reviews.map((review) => (
              <div key={review.id} className="reviewCard">
                <div className="reviewHeader">
                  <div>
                    <div className="reviewerName">{review.name}</div>
                    <div className="reviewDate">{review.date}</div>
                  </div>
                  <div className="reviewRating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className="star"
                        fill={star <= review.rating ? '#fbbf24' : 'none'}
                        color={star <= review.rating ? '#fbbf24' : '#ccc'}
                      />
                    ))}
                  </div>
                </div>
                <p className="reviewComment">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;