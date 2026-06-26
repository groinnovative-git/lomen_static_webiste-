import React from "react";
import MainLayout from "../layout/MainLayout";
import CategoryPage from "../pages/CategoryPage";

const TShirtModule = () => {
  return (
    <>
      <MainLayout>
        <CategoryPage categoryTitle="T-Shirts" categoryName="T-Shirts" />
      </MainLayout>
    </>
  );
};

export default TShirtModule;
