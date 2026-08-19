import React, { useState, useEffect } from "react";
import banner1 from "../assets/images/offer banner 1.png";
import banner2 from "../assets/images/offer banener 2.png";
import banner3 from "../assets/images/offer banner 3.png";

const BannerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [banner1, banner2, banner3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section style={{ overflow: "hidden", backgroundColor: "var(--bg-color-secondary)", padding: "40px 0", position: "relative" }}>
      <div 
        style={{ 
          display: "flex", 
          width: "100%", 
          transition: "transform 0.5s ease-in-out", 
          transform: `translateX(-${currentIndex * 100}%)` 
        }}
      >
        {banners.map((banner, index) => (
          <div key={index} style={{ minWidth: "100%", display: "flex", justifyContent: "center", boxSizing: "border-box" }}>
            <img 
              src={banner} 
              alt={`Offer Banner ${index + 1}`} 
              style={{ width: "100%", maxWidth: "1440px", height: "auto", borderRadius: "36px", padding: "0 20px", margin: "0 auto" }} 
            />
          </div>
        ))}
      </div>
      
      <div style={{ position: "absolute", bottom: "60px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "10px" }}>
        {banners.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentIndex(index)}
            style={{ 
              width: "10px", 
              height: "10px", 
              borderRadius: "50%", 
              backgroundColor: currentIndex === index ? "#c88732" : "rgba(0,0,0,0.3)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "background-color 0.3s ease"
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSection;
