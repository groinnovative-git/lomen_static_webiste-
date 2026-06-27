import React from "react";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import SEO from "../components/SEO";

const SITE_URL = "https://lomenfclub.in";

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LoMen Fashion Club",
    "alternateName": "LoMen",
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/lomen-logo.jpg`,
      "width": 200,
      "height": 200
    },
    "description": "LoMen Fashion Club is a premium men's fashion brand based in Coimbatore, Tamil Nadu, offering stylish clothing collections, modern menswear, and custom-fit options for everyday wear.",
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
    "sameAs": ["https://www.instagram.com/lomen_f_club/"],
    "foundingLocation": {
      "@type": "Place",
      "name": "Coimbatore, Tamil Nadu, India"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "LoMen Fashion Club",
    "alternateName": "LoMen",
    "url": SITE_URL,
    "description": "Premium men's fashion and clothing collections from LoMen Fashion Club — shirts, t-shirts, pants, jackets, hoodies, and custom menswear.",
    "inLanguage": "en-IN",
    "publisher": {
      "@type": "Organization",
      "name": "LoMen Fashion Club"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "LoMen Fashion Club | Premium Men's Fashion & Clothing Collection",
    "url": `${SITE_URL}/`,
    "description": "Explore LoMen Fashion Club for premium men's fashion, stylish clothing collections, trending outfits, and modern menswear designed for everyday confidence.",
    "isPartOf": { "@type": "WebSite", "url": SITE_URL },
    "about": { "@type": "Organization", "name": "LoMen Fashion Club" },
    "inLanguage": "en-IN"
  },
  {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "name": "LoMen Fashion Club",
    "url": SITE_URL,
    "logo": `${SITE_URL}/lomen-logo.jpg`,
    "image": `${SITE_URL}/og-image.jpg`,
    "description": "LoMen Fashion Club offers premium men's fashion including shirts, t-shirts, pants, jackets, hoodies, blazers, shorts, and custom menswear in Coimbatore, Tamil Nadu.",
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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.026446,
      "longitude": 76.941166
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "10:00",
      "closes": "20:00"
    },
    "sameAs": ["https://www.instagram.com/lomen_f_club/"],
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
    "hasMap": "https://maps.google.com/?q=LOMEN+FASHION+CLUB+Coimbatore"
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "LoMen Fashion Club - Men's Clothing Categories",
    "description": "Shop men's fashion categories at LoMen Fashion Club",
    "numberOfItems": 8,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Men's Shirts", "url": `${SITE_URL}/shirt` },
      { "@type": "ListItem", "position": 2, "name": "Men's T-Shirts", "url": `${SITE_URL}/tshirt` },
      { "@type": "ListItem", "position": 3, "name": "Men's Pants", "url": `${SITE_URL}/pant` },
      { "@type": "ListItem", "position": 4, "name": "Men's Jackets", "url": `${SITE_URL}/product` },
      { "@type": "ListItem", "position": 5, "name": "Men's Hoodies", "url": `${SITE_URL}/product` },
      { "@type": "ListItem", "position": 6, "name": "Men's Blazers", "url": `${SITE_URL}/product` },
      { "@type": "ListItem", "position": 7, "name": "Men's Casual Wear", "url": `${SITE_URL}/product` },
      { "@type": "ListItem", "position": 8, "name": "Custom Men's Wear", "url": `${SITE_URL}/customize` }
    ]
  }
];

const HomeModule = () => {
  return (
    <>
      <SEO
        title="LoMen Fashion Club | Premium Men's Fashion & Clothing Collection"
        description="Explore LoMen Fashion Club for premium men's fashion, stylish clothing collections, trending outfits, and modern menswear designed for everyday confidence."
        keywords="men's fashion, men's clothing, menswear, fashion club, stylish outfits for men, men's collection, casual wear for men, premium menswear, LoMen Fashion Club, Coimbatore, Tamil Nadu"
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
