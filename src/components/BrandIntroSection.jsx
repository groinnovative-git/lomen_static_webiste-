import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

const BrandIntroSection = () => {
  return (
    <section className="brandIntroSection" aria-label="About LoMen Fashion Club">
      <div className="brandIntroInner">

        <div className="brandIntroContent">
          <span className="brandIntroTag">Who We Are</span>
          <h2 className="brandIntroTitle">
            Premium Men's Fashion from <span className="brandIntroHighlight">LoMen Fashion Club</span>
          </h2>
          <p className="brandIntroDesc">
            <strong>LoMen Fashion Club</strong> is a men's fashion brand based in{" "}
            <strong>Coimbatore, Tamil Nadu, India</strong>. We offer a curated range of
            premium men's clothing — including shirts, t-shirts, pants, jackets, hoodies,
            blazers, and custom-fit menswear — designed for young men who value style,
            comfort, and everyday confidence.
          </p>
          <p className="brandIntroDesc">
            Whether you're shopping for casual wear, smart fits, or personalised clothing,
            LoMen Fashion Club delivers quality menswear with fast delivery across India
            and easy returns.
          </p>

          <div className="brandIntroMeta">
            <span className="brandIntroMetaItem">
              <MapPin size={14} />
              Coimbatore, Tamil Nadu
            </span>
            <span className="brandIntroMetaItem">🇮🇳 Pan-India Delivery</span>
            <span className="brandIntroMetaItem">↩ 7-Day Easy Returns</span>
          </div>

          <Link to="/about" className="brandIntroLink">
            Learn More About Us <ArrowRight size={15} />
          </Link>
        </div>

        <div className="brandIntroStats">
          {[
            { value: "6.3K+", label: "Happy Customers" },
            { value: "162+", label: "New Arrivals" },
            { value: "8+", label: "Categories" },
            { value: "24/7", label: "Customer Support" },
          ].map((stat) => (
            <div key={stat.label} className="brandIntroStat">
              <span className="brandIntroStatValue">{stat.value}</span>
              <span className="brandIntroStatLabel">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandIntroSection;
