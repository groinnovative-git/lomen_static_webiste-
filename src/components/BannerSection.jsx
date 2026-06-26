import React from "react";
import banner1 from "../assets/images/banner1.jpeg";
import banner2 from "../assets/images/banner2.jpeg";

const BannerSection = () => {
  return (
    <section className="homeBannerSection">
      <div className="homeBannerTrack">
        {/* We duplicate the content to create a seamless infinite loop */}
        <div className="homeBannerGroup">
          <img src={banner1} alt="Promotional Banner 1" className="homeBannerImage" />
          <img src={banner2} alt="Promotional Banner 2" className="homeBannerImage" />
        </div>
        <div className="homeBannerGroup" aria-hidden="true">
          <img src={banner1} alt="Promotional Banner 1" className="homeBannerImage" />
          <img src={banner2} alt="Promotional Banner 2" className="homeBannerImage" />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
