import React from "react";
import MainLayout from "../layout/MainLayout";
import CustomizePage from "../pages/CustomizePage";
import SEO from "../components/SEO";

const SITE_URL = "https://lomenfclub.in";

const customizeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Customize", "item": `${SITE_URL}/customize` }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Customize Your Fit | LoMen Fashion Club",
    "url": `${SITE_URL}/customize`,
    "description": "Design your own custom menswear at LoMen Fashion Club. Choose fabric, collar, cuff, and fit for a personalized men's fashion experience.",
    "isPartOf": { "@type": "WebSite", "url": SITE_URL },
    "inLanguage": "en-IN"
  }
];

const CustomizeModule = () => {
  return (
    <>
      <SEO
        title="Customize Your Fit | LoMen Fashion Club"
        description="Design your own custom menswear at LoMen Fashion Club. Choose your fabric, collar, cuff, and fit for a fully personalized men's fashion experience."
        keywords="custom men's wear, personalized shirts India, custom fit menswear, design your own shirt, LoMen customize, bespoke men's fashion Coimbatore"
        canonical="/customize"
        jsonLd={customizeJsonLd}
      />
      <MainLayout>
        <CustomizePage />
      </MainLayout>
    </>
  );
};

export default CustomizeModule;
