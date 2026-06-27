import React from "react";
import MainLayout from "../layout/MainLayout";
import ContactPage from "../pages/ContactPage";
import SEO from "../components/SEO";

const ContactModule = () => {
  return (
    <>
      <SEO
        title="Contact LoMen Fashion Club | Men's Fashion Enquiries"
        description="Contact LoMen Fashion Club for men's fashion collection enquiries, product information, size guidance, customization requests, and customer support."
        keywords="contact LoMen Fashion Club, men's fashion enquiry, LoMen customer support, Coimbatore fashion store contact"
        canonical="/contact"
      />
      <MainLayout>
        <ContactPage />
      </MainLayout>
    </>
  );
};

export default ContactModule;
