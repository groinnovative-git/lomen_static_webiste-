import React from "react";
import MainLayout from "../layout/MainLayout";
import CategoryPage from "../pages/CategoryPage";
import SEO from "../components/SEO";

const ShirtModule = () => {
  return (
    <>
      <SEO
        title="Men's Shirts Collection | LoMen Fashion Club"
        description="Explore premium men's shirts at LoMen Fashion Club. Smart casual shirts, formal shirts, and everyday cotton shirts crafted for comfort and modern style."
        keywords="men's shirts, cotton shirts for men, casual shirts, formal shirts, buy men's shirts India, LoMen shirts"
        canonical="/shirt"
      />
      <MainLayout>
        <CategoryPage categoryTitle="Shirts" categoryName="Shirts" />
      </MainLayout>
    </>
  );
};

export default ShirtModule;
