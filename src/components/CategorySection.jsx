import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Jackets",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    link: "/product",
  },
  {
    id: 2,
    name: "Jeans",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
    link: "/product",
  },
  {
    id: 3,
    name: "Shirts",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    link: "/shirt",
  },
  {
    id: 4,
    name: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    link: "/tshirt",
  },
  {
    id: 5,
    name: "Hoodies",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    link: "/product",
  },
  {
    id: 6,
    name: "Shorts",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80",
    link: "/product",
  },
  {
    id: 7,
    name: "Blazers",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    link: "/product",
  },
  {
    id: 8,
    name: "Casual Wear",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80",
    link: "/product",
  },
];

const CategorySection = () => {
  return (
    <section className="homeCategorySection">
      <div className="homeCategorySectionInner">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Shop by Category</h2>
          <p className="sectionSubtitle">
            Explore our latest collections made for everyday style.
          </p>
        </div>

        <div className="homeCategoryGrid">
          {categories.map((category) => (
            <Link
              to={category.link}
              key={category.id}
              className="homeCategoryCard group"
            >
              <div className="homeCategoryImageWrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="homeCategoryImage"
                />
                <div className="homeCategoryOverlay" />
              </div>
              <div className="homeCategoryLabel">
                <span>{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
