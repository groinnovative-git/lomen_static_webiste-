import React from "react";
import MainLayout from "../layout/MainLayout";
import ContactPage from "../pages/ContactPage";
import SEO from "../components/SEO";

const SITE_URL = "https://lomenfclub.in";

const contactJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": `${SITE_URL}/contact` }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact LoMen Fashion Club | Men's Fashion Enquiries",
    "url": `${SITE_URL}/contact`,
    "description": "Contact LoMen Fashion Club for men's fashion enquiries, product information, size guidance, customization requests, and customer support.",
    "isPartOf": { "@type": "WebSite", "url": SITE_URL },
    "inLanguage": "en-IN",
    "mainEntity": {
      "@type": "Organization",
      "name": "LoMen Fashion Club",
      "telephone": "+91-93609-59528",
      "email": "lomenfashionclub@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "74, Collector Sivakumar St, Saibaba Colony",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641038",
        "addressCountry": "IN"
      }
    }
  }
];

const ContactModule = () => {
  return (
    <>
      <SEO
        title="Contact LoMen Fashion Club | Men's Fashion Enquiries"
        description="Contact LoMen Fashion Club in Coimbatore for men's fashion enquiries, product details, size guidance, customization, and customer support. Call +91 93609 59528."
        keywords="contact LoMen Fashion Club, men's fashion enquiry Coimbatore, LoMen customer support, LoMen phone number, fashion store Tamil Nadu contact"
        canonical="/contact"
        jsonLd={contactJsonLd}
      />
      <MainLayout>
        <ContactPage />
      </MainLayout>
    </>
  );
};

export default ContactModule;
