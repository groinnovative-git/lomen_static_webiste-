import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";
import image5 from "../assets/images/image5.jpeg";

const images = [
  { src: image1, alt: "LoMen Fashion Club - Premium Men's Clothing Collection" },
  { src: image2, alt: "Stylish Menswear from LoMen Fashion Club" },
  { src: image3, alt: "Modern Men's Outfits - LoMen Fashion Club" },
  { src: image4, alt: "Trending Men's Fashion - LoMen Style Collection" },
  { src: image5, alt: "Casual & Smart Men's Wear by LoMen Fashion Club" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="heroSection">
        <div className="heroLeft">
          <div className="heroTag">
            <Sparkles size={14} />
            <span>New Spring Collection</span>
          </div>

          <h1 className="heroTitle">Redefine Your Style</h1>

          <p className="heroDescription">
            Discover premium menswear crafted for the modern gentleman.
          </p>

          <div className="heroActions">
            <a href="https://mybillbook.in/store/lomen_fashion_club" target="_blank" rel="noopener noreferrer" className="primaryBtn">
              Shop Now
              <ArrowRight className="arrow" size={18} />
            </a>
          </div>
        </div>

        <div className="heroRight">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className={`heroImage heroSlide ${index === current ? "heroSlideActive" : ""}`}
            />
          ))}

          <div className="heroDots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`heroDot ${index === current ? "heroDotActive" : ""}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
