import React from "react";
import { Instagram } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    alt: "Men's fashion outfit 1",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    alt: "Men's fashion outfit 2",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80",
    alt: "Men's fashion outfit 3",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&q=80",
    alt: "Men's fashion outfit 4",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&q=80",
    alt: "Men's fashion outfit 5",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    alt: "Men's fashion outfit 6",
  },
];

const InstagramSection = () => {
  return (
    <section className="homeInstagramSection">
      <div className="homeInstagramSectionInner">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Follow us on Instagram</h2>
          <p className="sectionSubtitle homeInstagramHandle">
            @lomen_f_club
          </p>
        </div>

        <div className="homeInstagramGrid">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/lomen_f_club/"
              target="_blank"
              rel="noopener noreferrer"
              className="homeInstagramCard group"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="homeInstagramImage"
              />
              <div className="homeInstagramOverlay">
                <Instagram size={28} strokeWidth={1.5} />
                <span className="homeInstagramOverlayText">View Post</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
