import React from "react";
import MainLayout from "../layout/MainLayout";
import ProductsPage from "../pages/ProductsPage";
import SEO from "../components/SEO";

const SITE_URL = "https://lomenfclub.in";

const productsJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": `${SITE_URL}/product` }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Shop Men's Fashion | All Products | LoMen Fashion Club",
    "url": `${SITE_URL}/product`,
    "description": "Browse all men's fashion products at LoMen Fashion Club — shirts, t-shirts, pants, jackets, hoodies, and more stylish menswear for everyday wear.",
    "isPartOf": { "@type": "WebSite", "url": SITE_URL },
    "inLanguage": "en-IN"
  }
];

const ProductsModule = () => {
  return (
    <>
      <SEO
        title="Shop Men's Fashion | All Products | LoMen Fashion Club"
        description="Browse all men's fashion products at LoMen Fashion Club. Shop shirts, t-shirts, pants, jackets, hoodies, and more stylish menswear for everyday wear."
        keywords="shop men's fashion, men's clothing online, menswear products, LoMen products, buy men's shirts, men's jackets online India, casual menswear"
        canonical="/product"
        jsonLd={productsJsonLd}
      />
      <MainLayout>
        <ProductsPage />
      </MainLayout>
    </>
  );
};

export default ProductsModule;
