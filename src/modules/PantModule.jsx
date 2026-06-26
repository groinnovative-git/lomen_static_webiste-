import React from "react";
import MainLayout from "../layout/MainLayout";
import CategoryPage from "../pages/CategoryPage";

const PantModule = () => {
  return (
    <>
      <MainLayout>
        <CategoryPage categoryTitle="Pants" categoryName="Pants" />
      </MainLayout>
    </>
  );
};

export default PantModule;
