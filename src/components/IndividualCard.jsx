import React from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const IndividualCard = ({ title }) => {
  const products = [
    {
      id: 1,
      name: "Classic Oxford Shirt",
      category: "Shirts",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    },
    {
      id: 2,
      name: "Tailored Dress Shirt",
      category: "Shirts",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
    },
    {
      id: 3,
      name: "Linen Summer Shirt",
      category: "Shirts",
      price: 69.99,
      image:
        "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80",
    },
    {
      id: 4,
      name: "Casual Button Down",
      category: "Shirts",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80",
    },
    {
      id: 5,
      name: "Casual Button Down",
      category: "Shirts",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80",
    },
    {
      id: 6,
      name: "Casual Button Down",
      category: "Shirts",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80",
    },
    {
      id: 7,
      name: "Casual Button Down",
      category: "Shirts",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80",
    },
  ];

  const scrollCategory = (direction) => {
    const element = document.getElementById("category-scroll");
    const scrollAmount = direction === "left" ? -300 : 300;
    element.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="categorySection categoryDivider">
      <div className="categoryHeader">
        <h2 className="categoryTitle">{title || "Collections"}</h2>
        <div className="categoryNavigation">
          <button
            className="scrollButton"
            onClick={() => scrollCategory("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="scrollButton"
            onClick={() => scrollCategory("right")}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="categoryContainer">
        <div className="categoryScroll" id="category-scroll">
          {products.map((product) => (
            <div key={product.id} className="itemCard">
              <div className="itemImageWrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="itemImage"
                />
                <div className="categoryTag">{product.category}</div>
              </div>

              <div className="itemDetails">
                <h3 className="itemName">{product.name}</h3>
                <div className="itemBottom">
                  <button className="cartBtn" aria-label="Add to cart">
                    <ShoppingCart size={16} />
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

export default IndividualCard;
