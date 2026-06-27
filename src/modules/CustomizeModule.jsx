import React from "react";
import MainLayout from "../layout/MainLayout";
import CustomizePage from "../pages/CustomizePage";
import SEO from "../components/SEO";

const CustomizeModule = () => {
  return (
    <>
      <SEO
        title="Customize Your Fit | LoMen Fashion Club"
        description="Design your own custom menswear at LoMen Fashion Club. Choose your fabric, collar, cuff, and fit for a personalized men's fashion experience."
        keywords="custom men's wear, personalized shirts, custom fit menswear, design your own shirt, LoMen customize, bespoke men's fashion"
        canonical="/customize"
      />
      <MainLayout>
        <CustomizePage />
      </MainLayout>
    </>
  );
};

export default CustomizeModule;
