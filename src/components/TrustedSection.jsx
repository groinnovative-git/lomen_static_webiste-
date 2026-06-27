import React from "react";
import { Users, Star, Package, Headphones } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Users,
    value: "4.1K+",
    label: "Happy Customers",
  },
  {
    id: 2,
    icon: Star,
    value: "779+",
    label: "Customer Reviews",
  },
  {
    id: 3,
    icon: Package,
    value: "162+",
    label: "New Arrivals",
  },
  {
    id: 4,
    icon: Headphones,
    value: "24/7",
    label: "Customer Support",
  },
];

const TrustedSection = () => {
  return (
    <section className="homeTrustedSection">
      <div className="homeTrustedSectionInner">

        <div className="homeTrustedHeader">
          <h2 className="homeTrustedTitle">
            Trusted by 6.3K+ Happy Customers
          </h2>
          <p className="homeTrustedSubtitle">
            Delivering premium menswear with exceptional quality and customer satisfaction.
          </p>
        </div>

        <div className="homeTrustedStatsRow">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.id} className="homeTrustedStat">
                <div className="homeTrustedIconCircle">
                  <IconComponent size={30} strokeWidth={1.5} />
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
