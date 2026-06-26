import React from "react";
import { Users, Star, Package, Headphones } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Users,
    value: "6.3k+",
    label: "Happy Customers",
  },
  {
    id: 2,
    icon: Star,
    value: "1.2k+",
    label: "Customer Reviews",
  },
  {
    id: 3,
    icon: Package,
    value: "250+",
    label: "New Arrivals",
  },
  {
    id: 4,
    icon: Headphones,
    value: "24/7",
    label: "Support",
  },
];

const TrustedSection = () => {
  return (
    <section className="homeTrustedSection">
      <div className="homeTrustedSectionInner">
        <div className="homeTrustedHeader">
          <h2 className="homeTrustedTitle">
            Trusted by 6.3k+ Happy Customers
          </h2>
          <p className="homeTrustedSubtitle">
            A growing fashion destination for premium men's wear.
          </p>
        </div>

        <div className="homeTrustedGrid">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.id} className="homeTrustedCard">
                <div className="homeTrustedIconWrapper">
                  <IconComponent size={28} strokeWidth={1.5} />
                </div>
                <h3 className="homeTrustedValue">{stat.value}</h3>
                <p className="homeTrustedLabel">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
