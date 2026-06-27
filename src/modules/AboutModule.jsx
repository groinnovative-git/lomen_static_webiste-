import React from "react";
import MainLayout from "../layout/MainLayout";
import AboutPage from "../pages/AboutPage";
import SEO from "../components/SEO";

const SITE_URL = "https://lomenfclub.in";

const aboutJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "About", "item": `${SITE_URL}/about` }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About LoMen Fashion Club | Modern Men's Fashion Brand",
    "url": `${SITE_URL}/about`,
    "description": "Learn about LoMen Fashion Club, a men's fashion brand focused on stylish clothing collections, modern menswear, and everyday fashion confidence for young men in India.",
    "isPartOf": { "@type": "WebSite", "url": SITE_URL },
    "about": {
      "@type": "Organization",
      "name": "LoMen Fashion Club",
      "url": SITE_URL,
      "description": "LoMen Fashion Club creates modern menswear for young men who want style, comfort, and confidence in every outfit. Based in Coimbatore, Tamil Nadu."
    },
    "inLanguage": "en-IN"
  }
];

const AboutModule = () => {
  return (
    <>
      <SEO
        title="About LoMen Fashion Club | Modern Men's Fashion Brand"
        description="Learn about LoMen Fashion Club — a premium men's fashion brand in Coimbatore, Tamil Nadu, offering stylish clothing, modern menswear, and custom-fit options for young men."
        keywords="about LoMen Fashion Club, men's fashion brand Coimbatore, modern menswear brand India, men's clothing Tamil Nadu, LoMen brand story"
        canonical="/about"
        jsonLd={aboutJsonLd}
      />
      <MainLayout>
        <AboutPage />
      </MainLayout>
    </>
  );
};

export default AboutModule;
