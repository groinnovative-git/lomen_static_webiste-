import React from "react";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import SEO from "../components/SEO";

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LoMen Fashion Club",
    "url": "https://lomenfclub.in",
    "logo": "https://lomenfclub.in/lomen-logo.jpg",
    "description": "LoMen Fashion Club is a premium men's fashion brand offering stylish clothing collections, modern menswear, and everyday fashion for men in India.",
    "email": "lomenfashionclub@gmail.com",
    "telephone": "+91-93609-59528",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "74, Collector Sivakumar St, Saibaba Colony",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641038",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/lomen_f_club/"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "LoMen Fashion Club",
    "url": "https://lomenfclub.in",
    "description": "Premium men's fashion and clothing collections from LoMen Fashion Club."
  },
  {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "name": "LoMen Fashion Club",
    "url": "https://lomenfclub.in",
    "logo": "https://lomenfclub.in/lomen-logo.jpg",
    "image": "https://lomenfclub.in/og-image.jpg",
    "description": "LoMen Fashion Club offers premium men's fashion including shirts, t-shirts, pants, jackets, hoodies, and custom menswear in Coimbatore, Tamil Nadu.",
    "telephone": "+91-93609-59528",
    "email": "lomenfashionclub@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "74, Collector Sivakumar St, Saibaba Colony",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641038",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "10:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.instagram.com/lomen_f_club/"
    ],
    "priceRange": "₹₹"
  }
];

const HomeModule = () => {
  return (
    <>
      <SEO
        title="LoMen Fashion Club | Premium Men's Fashion & Clothing Collection"
        description="Explore LoMen Fashion Club for premium men's fashion, stylish clothing collections, trending outfits, and modern menswear designed for everyday confidence."
        keywords="men's fashion, men's clothing, menswear, fashion club, stylish outfits for men, men's collection, casual wear for men, premium menswear, LoMen Fashion Club, Coimbatore"
        canonical="/"
        jsonLd={homeJsonLd}
      />
      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  );
};

export default HomeModule;
