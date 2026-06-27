import React from "react";
import MainLayout from "../layout/MainLayout";
import CategoryPage from "../pages/CategoryPage";
import SEO from "../components/SEO";

const SITE_URL = "https://lomenfclub.in";

const tshirtJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": `${SITE_URL}/product` },
      { "@type": "ListItem", "position": 3, "name": "T-Shirts", "item": `${SITE_URL}/tshirt` }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Men's T-Shirts Collection | LoMen Fashion Club",
    "url": `${SITE_URL}/tshirt`,
    "description": "Shop stylish men's t-shirts at LoMen Fashion Club — oversized tees, streetwear t-shirts, and casual everyday t-shirts for the modern man.",
    "isPartOf": { "@type": "WebSite", "url": SITE_URL },
    "inLanguage": "en-IN"
  }
];

const TShirtModule = () => {
  return (
    <>
      <SEO
        title="Men's T-Shirts Collection | LoMen Fashion Club"
        description="Shop stylish men's t-shirts at LoMen Fashion Club — oversized tees, streetwear t-shirts, and casual everyday t-shirts for the modern man."
        keywords="men's t-shirts, oversized t-shirts India, streetwear tees, casual t-shirts for men, buy men's t-shirts online, LoMen t-shirts"
        canonical="/tshirt"
        jsonLd={tshirtJsonLd}
      />
      <MainLayout>
        <CategoryPage categoryTitle="T-Shirts" categoryName="T-Shirts" />
      </MainLayout>
    </>
  );
};

export default TShirtModule;
