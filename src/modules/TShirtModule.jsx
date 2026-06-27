import React from "react";
import MainLayout from "../layout/MainLayout";
import CategoryPage from "../pages/CategoryPage";
import SEO from "../components/SEO";

const TShirtModule = () => {
  return (
    <>
      <SEO
        title="Men's T-Shirts Collection | LoMen Fashion Club"
        description="Shop stylish men's t-shirts at LoMen Fashion Club. Oversized tees, streetwear t-shirts, and casual everyday t-shirts for the modern man."
        keywords="men's t-shirts, oversized t-shirts, streetwear tees, casual t-shirts for men, buy men's t-shirts India, LoMen t-shirts"
        canonical="/tshirt"
      />
      <MainLayout>
        <CategoryPage categoryTitle="T-Shirts" categoryName="T-Shirts" />
      </MainLayout>
    </>
  );
};

export default TShirtModule;
