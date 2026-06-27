import React from "react";
import MainLayout from "../layout/MainLayout";
import CategoryPage from "../pages/CategoryPage";
import SEO from "../components/SEO";

const PantModule = () => {
  return (
    <>
      <SEO
        title="Men's Pants Collection | LoMen Fashion Club"
        description="Shop men's pants at LoMen Fashion Club. Slim fit pants, casual trousers, and everyday pants designed for comfort, movement, and modern style."
        keywords="men's pants, slim fit pants, casual trousers for men, men's trousers India, buy men's pants, LoMen pants"
        canonical="/pant"
      />
      <MainLayout>
        <CategoryPage categoryTitle="Pants" categoryName="Pants" />
      </MainLayout>
    </>
  );
};

export default PantModule;
