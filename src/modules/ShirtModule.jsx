import React from "react";
import MainLayout from "../layout/MainLayout";
import CategoryPage from "../pages/CategoryPage";

const ShirtModule = () => {
  return (
    <>
      <MainLayout>
        <CategoryPage categoryTitle="Shirts" categoryName="Shirts" />
      </MainLayout>
    </>
  );
};

export default ShirtModule;
