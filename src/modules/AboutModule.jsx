import React from "react";
import MainLayout from "../layout/MainLayout";
import AboutPage from "../pages/AboutPage";
import SEO from "../components/SEO";

const AboutModule = () => {
  return (
    <>
      <SEO
        title="About LoMen Fashion Club | Modern Men's Fashion Brand"
        description="Learn about LoMen Fashion Club, a men's fashion brand focused on stylish clothing collections, modern menswear, and everyday fashion confidence for young men."
        keywords="about LoMen Fashion Club, men's fashion brand India, modern menswear brand, men's clothing Coimbatore"
        canonical="/about"
      />
      <MainLayout>
        <AboutPage />
      </MainLayout>
    </>
  );
};

export default AboutModule;
