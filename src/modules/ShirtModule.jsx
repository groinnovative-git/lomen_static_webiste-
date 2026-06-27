import React from "react";
import MainLayout from "../layout/MainLayout";
import CategoryPage from "../pages/CategoryPage";
import SEO from "../components/SEO";

const SITE_URL = "https://lomenfclub.in";

const shirtJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": `${SITE_URL}/product` },
      { "@type": "ListItem", "position": 3, "name": "Shirts", "item": `${SITE_URL}/shirt` }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Men's Shirts Collection | LoMen Fashion Club",
    "url": `${SITE_URL}/shirt`,
    "description": "Explore premium men's shirts at LoMen Fashion Club. Smart casual shirts, formal shirts, and everyday cotton shirts crafted for comfort and modern style.",
    "isPartOf": { "@type": "WebSite", "url": SITE_URL },
    "inLanguage": "en-IN"
  }
];

const ShirtModule = () => {
  return (
    <>
      <SEO
        title="Men's Shirts Collection | LoMen Fashion Club"
        description="Explore premium men's shirts at LoMen Fashion Club. Smart casual shirts, formal shirts, and everyday cotton shirts crafted for comfort and modern style."
        keywords="men's shirts, cotton shirts for men, casual shirts India, formal shirts for men, buy men's shirts online, LoMen shirts Coimbatore"
        canonical="/shirt"
        jsonLd={shirtJsonLd}
      />
      <MainLayout>
        <CategoryPage categoryTitle="Shirts" categoryName="Shirts" />
      </MainLayout>
    </>
  );
};

export default ShirtModule;
