import React from "react";
import MainLayout from "../layout/MainLayout";
import CategoryPage from "../pages/CategoryPage";
import SEO from "../components/SEO";

const SITE_URL = "https://lomenfclub.in";

const pantJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": `${SITE_URL}/product` },
      { "@type": "ListItem", "position": 3, "name": "Pants", "item": `${SITE_URL}/pant` }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Men's Pants Collection | LoMen Fashion Club",
    "url": `${SITE_URL}/pant`,
    "description": "Shop men's pants at LoMen Fashion Club — slim fit pants, casual trousers, and everyday pants designed for comfort, movement, and modern style.",
    "isPartOf": { "@type": "WebSite", "url": SITE_URL },
    "inLanguage": "en-IN"
  }
];

const PantModule = () => {
  return (
    <>
      <SEO
        title="Men's Pants Collection | LoMen Fashion Club"
        description="Shop men's pants at LoMen Fashion Club — slim fit pants, casual trousers, and everyday pants designed for comfort, movement, and modern style."
        keywords="men's pants, slim fit pants India, casual trousers for men, men's trousers online, buy men's pants, LoMen pants Coimbatore"
        canonical="/pant"
        jsonLd={pantJsonLd}
      />
      <MainLayout>
        <CategoryPage categoryTitle="Pants" categoryName="Pants" />
      </MainLayout>
    </>
  );
};

export default PantModule;
