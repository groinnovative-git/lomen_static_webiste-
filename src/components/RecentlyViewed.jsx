import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecentlyViewed = () => {
  const recentlyViewedProducts = [
    {
      id: 1,
      name: "Classic Oxford Shirt",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80"
    },
    {
      id: 2,
      name: "Premium Cotton Tee",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80"
    },
    {
      id: 3,
      name: "Slim Fit Chinos",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80"
    },
    {
      id: 4,
      name: "Tailored Dress Shirt",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80"
    },
    {
      id: 5,
      name: "Casual Polo Shirt",
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&q=80"
    },
    {
      id: 6,
      name: "Formal Trousers",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80"
    },
    {
      id: 7,
      name: "Linen Summer Shirt",
      image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400&q=80"
    },
    {
      id: 8,
      name: "Graphic Print Tee",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80"
    }
  ];

  const scrollLeft = () => {
    document.getElementById('recentlyViewedScroll').scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    document.getElementById('recentlyViewedScroll').scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="recentlyViewedSection">
        <div className="recentlyViewedHeader">
          <h2 className="sectionTitle">Recently Viewed</h2>
          <div className="scrollControls">
            <button className="scrollButton" onClick={scrollLeft} aria-label="Scroll left">
              <ChevronLeft size={20} />
            </button>
            <button className="scrollButton" onClick={scrollRight} aria-label="Scroll right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="recentlyViewedContainer">
          <div className="recentlyViewedScroll" id="recentlyViewedScroll">
            {recentlyViewedProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="recentlyViewedItem hover:opacity-95 transition">
                <div className="recentlyViewedImageContainer">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="recentlyViewedImage"
                  />
                </div>
                <p className="recentlyViewedName font-medium mt-2">{product.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentlyViewed;