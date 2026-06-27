import React from "react";
import MainLayout from "../layout/MainLayout";
import ProductsPage from "../pages/ProductsPage";
import SEO from "../components/SEO";

const ProductsModule = () => {
  return (
    <>
      <SEO
        title="Shop Men's Fashion | All Products | LoMen Fashion Club"
        description="Browse all men's fashion products at LoMen Fashion Club. Shop shirts, t-shirts, pants, jackets, hoodies, and more stylish menswear for everyday wear."
        keywords="shop men's fashion, men's clothing online, menswear products, LoMen products, buy men's shirts, men's jackets online India"
        canonical="/product"
      />
      <MainLayout>
        <ProductsPage />
      </MainLayout>
    </>
  );
};

export default ProductsModule;
