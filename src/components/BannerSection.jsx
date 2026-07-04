  import React from "react";
import banner1 from "../assets/images/Banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";

const BannerSection = () => {
  return (
    <section className="homeBannerSection">
      <div className="homeBannerTrack">
        {/* We duplicate the content to create a seamless infinite loop */}
        <div className="homeBannerGroup">
          <img src={banner1} alt="LoMen Fashion Club - Men's Collection Promotional Banner" className="homeBannerImage" />
          <img src={banner2} alt="LoMen Fashion Club - New Arrivals Men's Fashion Banner" className="homeBannerImage" />
          <img src={banner3} alt="LoMen Fashion Club - Special Offers Banner" className="homeBannerImage" />
        </div>
        <div className="homeBannerGroup" aria-hidden="true">
          <img src={banner1} alt="" className="homeBannerImage" />
          <img src={banner2} alt="" className="homeBannerImage" />
          <img src={banner3} alt="" className="homeBannerImage" />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
